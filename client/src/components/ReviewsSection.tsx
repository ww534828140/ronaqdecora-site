/*
 * رونق للديكور — قسم تقييمات حقيقية فقط.
 * يعرض التقييمات الموافق عليها من قاعدة البيانات، ويستقبل تقييمات جديدة للمراجعة.
 */

import { trpc } from '@/lib/trpc';
import { CheckCircle2, Loader2, MessageSquareQuote, Send, Star } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

function getVisitorKey() {
  if (typeof window === 'undefined') return 'server-render-placeholder';
  const storageKey = 'ronaq-review-visitor-key';
  const existing = window.localStorage.getItem(storageKey);
  if (existing) return existing;
  const created = window.crypto.randomUUID();
  window.localStorage.setItem(storageKey, created);
  return created;
}

function Stars({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} من 5 نجوم`}>
      {[1, 2, 3, 4, 5].map(star => (
        <Star
          key={star}
          size={size}
          className={star <= value ? 'fill-accent text-accent' : 'text-border'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { data, isLoading } = trpc.reviews.list.useQuery();
  const utils = trpc.useUtils();
  const [authorName, setAuthorName] = useState('');
  const [city, setCity] = useState('الرياض');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [visitorKey] = useState(getVisitorKey);

  const submitReview = trpc.reviews.submit.useMutation({
    onSuccess: result => {
      setSubmittedMessage(result.message);
      setAuthorName('');
      setCity('الرياض');
      setRating(0);
      setComment('');
      if (result.autoApproved) {
        void utils.reviews.list.invalidate();
      }
      toast.success(result.message);
    },
    onError: error => toast.error(error.message),
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rating < 1) {
      toast.error('اختر عدد النجوم أولاً.');
      return;
    }

    submitReview.mutate({
      authorName,
      city,
      rating,
      comment,
      visitorKey,
    });
  };

  return (
    <section id="reviews" className="relative overflow-hidden bg-[#171715] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_80%_20%,#D4AF37_0,transparent_34%)]" />
      <div className="container relative">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 border-b border-accent/60 pb-2 text-sm font-semibold text-accent">
            <MessageSquareQuote size={18} />
            آراء حقيقية من عملائنا
          </div>
          <h2 className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl">
            قيّم تجربتك مع رونق
          </h2>
          <p className="max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            اختر عدد النجوم واكتب تجربتك. تُنشر تقييمات الخمس نجوم تلقائياً، أما التقييمات الأخرى فتظهر بعد مراجعتها.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white p-6 text-foreground shadow-2xl md:p-9"
            dir="rtl"
          >
            <div className="mb-7">
              <label className="mb-3 block text-lg font-bold">تقييمك بالنجوم</label>
              <div className="flex gap-2" role="radiogroup" aria-label="اختر تقييمك من خمس نجوم">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    role="radio"
                    aria-checked={rating === star}
                    aria-label={`${star} نجوم`}
                    onClick={() => setRating(star)}
                    className="rounded-xl p-2 transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <Star
                      size={34}
                      className={star <= rating ? 'fill-accent text-accent' : 'text-border'}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-semibold">الاسم</span>
                <input
                  required
                  minLength={2}
                  maxLength={80}
                  value={authorName}
                  onChange={event => setAuthorName(event.target.value)}
                  placeholder="اسمك الكريم"
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-semibold">المدينة</span>
                <input
                  required
                  minLength={2}
                  maxLength={80}
                  value={city}
                  onChange={event => setCity(event.target.value)}
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-3 outline-none transition-colors focus:border-accent"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block font-semibold">اكتب تجربتك</span>
              <textarea
                required
                minLength={10}
                maxLength={600}
                rows={5}
                value={comment}
                onChange={event => setComment(event.target.value)}
                placeholder="أخبرنا عن الخدمة وجودة التنفيذ والتعامل..."
                className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 leading-7 outline-none transition-colors focus:border-accent"
              />
              <span className="mt-1 block text-left text-xs text-muted-foreground">{comment.length}/600</span>
            </label>

            <button
              type="submit"
              disabled={submitReview.isPending}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold text-accent-foreground transition-transform duration-150 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitReview.isPending ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              إرسال التقييم
            </button>

            {submittedMessage && (
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
                <CheckCircle2 size={20} />
                {submittedMessage}
              </div>
            )}
          </form>

          <div>
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="mb-1 text-sm text-white/55">متوسط التقييمات المنشورة</p>
                <div className="flex items-center gap-3">
                  <strong className="text-4xl text-accent">{data?.average || '—'}</strong>
                  {data?.average ? <Stars value={Math.round(data.average)} size={20} /> : null}
                </div>
              </div>
              <span className="text-sm text-white/55">{data?.count || 0} تقييم</span>
            </div>

            {isLoading ? (
              <div className="flex min-h-56 items-center justify-center">
                <Loader2 className="animate-spin text-accent" size={30} />
              </div>
            ) : data?.items.length ? (
              <div className="grid gap-5">
                {data.items.map(review => (
                  <article key={review.id} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold">{review.authorName}</h3>
                        <p className="text-sm text-white/50">{review.city}</p>
                      </div>
                      <Stars value={review.rating} />
                    </div>
                    <p className="leading-8 text-white/75">“{review.comment}”</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-white/20 bg-white/[0.04] p-10 text-center">
                <Star className="mx-auto mb-4 text-accent" size={34} />
                <h3 className="mb-2 text-xl font-bold">شارك تجربتك الأولى</h3>
                <p className="leading-7 text-white/55">لا توجد تقييمات منشورة حتى الآن. تقييمات الخمس نجوم تظهر تلقائياً، وما عداها بعد التحقق.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <a
        href="#reviews"
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-xl transition-transform duration-150 hover:-translate-y-0.5 md:px-5 md:text-base"
      >
        <Star size={18} />
        قيّم تجربتك
      </a>
    </section>
  );
}
