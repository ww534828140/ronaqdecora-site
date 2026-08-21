/*
 * رونق للديكور — تذكير أسلوب الملف:
 * توجه الفخامة المينيمالية: نافذة اتصال هادئة، بيضاء، RTL، ولمسة ذهبية محدودة.
 * السلوك: محاولة فتح تطبيق الاتصال على الجوال فقط، مع إبقاء الكمبيوتر طبيعياً.
 */

import { useEffect, useState } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';

const CALL_NUMBER = '0540450417';
const WHATSAPP_NUMBER = '966539740564';
const SESSION_KEY = 'ronaq-mobile-call-attempted';

function isMobileDevice() {
  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent || navigator.vendor || '';
  const mobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(userAgent);
  const narrowViewport = window.matchMedia?.('(max-width: 767px)').matches ?? false;

  return mobileUserAgent || narrowViewport;
}

export default function MobileCallRedirect() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!isMobileDevice()) return;

    let alreadyAttempted = false;
    try {
      alreadyAttempted = window.sessionStorage.getItem(SESSION_KEY) === 'true';
      if (!alreadyAttempted) {
        window.sessionStorage.setItem(SESSION_KEY, 'true');
      }
    } catch {
      // إذا منع المتصفح sessionStorage، نكمل بمحاولة واحدة لهذه الزيارة.
    }

    if (alreadyAttempted) {
      const retryTimer = window.setTimeout(() => {
        if (!document.hidden) {
          setShowFallback(true);
        }
      }, 250);
      return () => window.clearTimeout(retryTimer);
    }

    const fallbackTimer = window.setTimeout(() => {
      if (!document.hidden) {
        setShowFallback(true);
      }
    }, 1200);

    // محاولة فتح تطبيق الاتصال تلقائياً. قد يمنع المتصفح ذلك حتى يضغط المستخدم.
    window.location.href = `tel:${CALL_NUMBER}`;

    return () => window.clearTimeout(fallbackTimer);
  }, []);

  if (!showFallback) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm md:hidden">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-call-title"
        className="relative w-full max-w-sm rounded-2xl border border-border bg-white p-7 text-center shadow-2xl"
        dir="rtl"
      >
        <button
          type="button"
          aria-label="إغلاق"
          onClick={() => setShowFallback(false)}
          className="absolute left-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X size={20} />
        </button>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <Phone className="text-accent" size={32} />
        </div>
        <p className="mb-2 text-sm font-semibold text-accent">رونق للديكور</p>
        <h2 id="mobile-call-title" className="mb-3 text-2xl font-bold text-foreground">
          تواصل معنا الآن
        </h2>
        <p className="mb-6 text-sm leading-7 text-muted-foreground">
          اضغط على زر الاتصال لفتح تطبيق الهاتف والتواصل معنا مباشرة.
        </p>

        <a
          href={`tel:${CALL_NUMBER}`}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground transition-transform duration-200 hover:bg-opacity-90 active:scale-95"
        >
          <Phone size={19} />
          اتصال {CALL_NUMBER}
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 font-semibold text-foreground transition-colors duration-200 hover:bg-muted"
        >
          <MessageCircle size={19} />
          التواصل عبر واتس أب
        </a>
      </div>
    </div>
  );
}

export { isMobileDevice };

/* Style reminder: the overlay intentionally uses restrained gold, ample whitespace, and no visual noise. */
