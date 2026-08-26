import { useAuth } from '@/_core/hooks/useAuth';
import { startLogin } from '@/const';
import { trpc } from '@/lib/trpc';
import { Check, Loader2, LogIn, ShieldCheck, Star, X } from 'lucide-react';
import { toast } from 'sonner';

export default function ReviewsAdmin() {
  const { user, loading } = useAuth();
  const utils = trpc.useUtils();
  const pending = trpc.reviews.pending.useQuery(undefined, {
    enabled: user?.role === 'admin',
  });
  const moderate = trpc.reviews.moderate.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.reviews.pending.invalidate(),
        utils.reviews.list.invalidate(),
      ]);
      toast.success('تم تحديث حالة التقييم.');
    },
    onError: error => toast.error(error.message),
  });

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-secondary">
        <Loader2 className="animate-spin text-accent" size={34} />
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-secondary p-5" dir="rtl">
        <div className="w-full max-w-md rounded-3xl bg-white p-9 text-center shadow-xl">
          <ShieldCheck className="mx-auto mb-5 text-accent" size={42} />
          <h1 className="mb-3 text-2xl font-extrabold">إدارة تقييمات رونق</h1>
          <p className="mb-7 leading-7 text-muted-foreground">هذه الصفحة خاصة بصاحب الموقع لمراجعة التقييمات قبل نشرها.</p>
          <button
            type="button"
            onClick={startLogin}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-bold text-accent-foreground"
          >
            <LogIn size={19} />
            تسجيل دخول المالك
          </button>
        </div>
      </main>
    );
  }

  if (user.role !== 'admin') {
    return (
      <main className="flex min-h-screen items-center justify-center bg-secondary p-5" dir="rtl">
        <div className="rounded-3xl bg-white p-9 text-center shadow-xl">
          <X className="mx-auto mb-4 text-red-500" size={40} />
          <h1 className="text-2xl font-extrabold">غير مصرح بالدخول</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-secondary py-16" dir="rtl">
      <div className="container max-w-5xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold text-accent">لوحة المراجعة</p>
            <h1 className="text-3xl font-extrabold md:text-4xl">تقييمات بانتظار الموافقة</h1>
          </div>
          <a href="/" className="font-semibold text-muted-foreground hover:text-foreground">العودة إلى الموقع</a>
        </div>

        {pending.isLoading ? (
          <div className="flex min-h-48 items-center justify-center">
            <Loader2 className="animate-spin text-accent" size={32} />
          </div>
        ) : pending.data?.length ? (
          <div className="grid gap-5">
            {pending.data.map(review => (
              <article key={review.id} className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold">{review.authorName}</h2>
                    <p className="text-sm text-muted-foreground">{review.city}</p>
                  </div>
                  <div className="flex gap-1" aria-label={`${review.rating} من 5 نجوم`}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={18} className={star <= review.rating ? 'fill-accent text-accent' : 'text-border'} />
                    ))}
                  </div>
                </div>
                <p className="mb-6 leading-8 text-muted-foreground">“{review.comment}”</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    disabled={moderate.isPending}
                    onClick={() => moderate.mutate({ id: review.id, status: 'approved' })}
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white disabled:opacity-50"
                  >
                    <Check size={19} />
                    موافقة ونشر
                  </button>
                  <button
                    type="button"
                    disabled={moderate.isPending}
                    onClick={() => moderate.mutate({ id: review.id, status: 'rejected' })}
                    className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-5 py-3 font-bold text-red-700 disabled:opacity-50"
                  >
                    <X size={19} />
                    رفض
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border bg-white p-12 text-center">
            <Check className="mx-auto mb-4 text-emerald-600" size={38} />
            <h2 className="text-xl font-bold">لا توجد تقييمات معلقة حالياً</h2>
          </div>
        )}
      </div>
    </main>
  );
}
