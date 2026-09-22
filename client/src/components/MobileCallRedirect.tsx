import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '966539740564';
const DISPLAY_WHATSAPP_NUMBER = '0539740564';
const REDIRECT_KEY = 'ronaq-mobile-whatsapp-attempted';

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Windows Phone|Mobile/i.test(navigator.userAgent);
}

export default function MobileCallRedirect() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!isMobileDevice()) return;

    let attempted = false;
    try {
      attempted = sessionStorage.getItem(REDIRECT_KEY) === '1';
      if (!attempted) sessionStorage.setItem(REDIRECT_KEY, '1');
    } catch {
      // Continue without session storage if the browser blocks it.
    }

    if (attempted) return;

    const fallbackTimer = window.setTimeout(() => {
      setShowFallback(true);
    }, 900);

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`;

    return () => window.clearTimeout(fallbackTimer);
  }, []);

  if (!showFallback) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5">
      <div
        dir="rtl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-whatsapp-title"
        className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
      >
        <p className="mb-2 text-sm font-semibold text-[#b08d28]">رونق للديكور</p>
        <h2 id="mobile-whatsapp-title" className="mb-3 text-2xl font-bold text-slate-900">
          تواصل معنا الآن
        </h2>
        <p className="mb-6 leading-7 text-slate-600">
          إذا لم يفتح واتساب تلقائياً، اضغط الزر أدناه للتواصل معنا عبر واتساب.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#b08d28] px-5 py-3 font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            التواصل عبر واتساب: {DISPLAY_WHATSAPP_NUMBER}
          </a>
          <button
            type="button"
            onClick={() => setShowFallback(false)}
            className="py-2 text-sm text-slate-500 underline underline-offset-4"
          >
            متابعة تصفح الموقع
          </button>
        </div>
      </div>
    </div>
  );
}
