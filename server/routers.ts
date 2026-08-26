import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { createHash } from "node:crypto";
import { z } from "zod";
import * as db from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  reviews: router({
    list: publicProcedure.query(async () => {
      const items = await db.listApprovedCustomerReviews();
      const count = items.length;
      const average = count
        ? Number((items.reduce((sum, item) => sum + item.rating, 0) / count).toFixed(1))
        : 0;

      return { items, count, average };
    }),
    submit: publicProcedure
      .input(
        z.object({
          authorName: z.string().trim().min(2).max(80),
          city: z.string().trim().min(2).max(80).default("الرياض"),
          rating: z.number().int().min(1).max(5),
          comment: z.string().trim().min(10).max(600),
          visitorKey: z.string().min(16).max(100),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const autoApproved = input.rating === 5;
        const forwarded = ctx.req.headers["x-forwarded-for"];
        const ip = Array.isArray(forwarded)
          ? forwarded[0]
          : forwarded?.split(",")[0]?.trim() || ctx.req.ip || "unknown";
        const day = new Date().toISOString().slice(0, 10);
        const submissionKey = createHash("sha256")
          .update(`${input.visitorKey}|${ip}|${day}`)
          .digest("hex");

        try {
          await db.createCustomerReview({
            authorName: input.authorName.trim(),
            city: input.city.trim(),
            rating: input.rating,
            comment: input.comment.trim(),
            status: autoApproved ? "approved" : "pending",
            submissionKey,
          });
        } catch (error) {
          const code = (error as { code?: string })?.code;
          if (code === "ER_DUP_ENTRY") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "سبق إرسال تقييم من هذا الجهاز اليوم.",
            });
          }
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "تعذر حفظ التقييم حالياً. حاول مرة أخرى لاحقاً.",
          });
        }

        return {
          success: true,
          autoApproved,
          message: autoApproved
            ? "شكراً لتقييمك بخمس نجوم. تم نشره الآن."
            : "شكراً لتقييمك. سيظهر بعد مراجعته.",
        };
      }),
    pending: adminProcedure.query(() => db.listPendingCustomerReviews()),
    moderate: adminProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
          status: z.enum(["approved", "rejected"]),
        })
      )
      .mutation(async ({ input }) => {
        await db.moderateCustomerReview(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
