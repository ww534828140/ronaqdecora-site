/*
 * رونق للديكور — عبارات خدمات عامة ومحلية بصياغة مرئية وواضحة.
 */

import { CheckCircle2, MapPin, Sparkles } from 'lucide-react';

const generalKeywords = [
  'معلم ديكورات',
  'معلم دهان',
  'معلم دهانات',
  'معلم شيبورد',
  'معلم ورق جدران',
  'بديل الشيبورد',
  'بديل الرخام',
  'تركيب شيبورد وتكسيات خشبية',
  'تصميم خلفيات شاشة TV ديكور',
  'دهانات داخلية وخارجية',
  'ديكورات داخلية وخارجية',
  'معلم خشب',
  'ديكورات خشبية',
];

const serviceLinks = [
  { label: 'صفحة معلم الديكورات', href: '/decorations' },
  { label: 'صفحة معلم الدهانات', href: '/painting' },
  { label: 'صفحة الشيبورد والتكسيات الخشبية', href: '/shiboard' },
  { label: 'صفحة معلم ورق الجدران', href: '/wallpaper' },
  { label: 'صفحة بديل الرخام', href: '/marble-alternative' },
];

const riyadhKeywords = [
  'معلم ديكورات بالرياض',
  'معلم دهان بالرياض',
  'متجر دهانات بالرياض (للبحث عن خيارات الدهان)',
  'معلم شيبورد بالرياض',
  'معلم ورق جدران بالرياض',
  'بديل الشيبورد بالرياض',
  'بديل الرخام بالرياض',
  'تركيب بديل رخام الرياض',
  'محلات ورق جدران الرياض',
  'شركة تشطيبات في الرياض',
  'فني جبس بورد بالرياض',
  'ديكورات بالرياض',
  'معلم خشب بالرياض',
];

function KeywordGroup({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: 'general' | 'riyadh';
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
          {icon === 'riyadh' ? <MapPin size={21} /> : <Sparkles size={21} />}
        </div>
        <h3 className="text-2xl font-extrabold text-foreground md:text-3xl">{title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map(item => (
          <div
            key={item}
            className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md"
          >
            <CheckCircle2 className="shrink-0 text-accent" size={21} />
            <span className="text-lg font-bold leading-snug text-foreground md:text-xl">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesKeywordsSection() {
  return (
    <section className="border-y border-border bg-gradient-to-b from-secondary to-white py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">خدمات الديكور والدهانات</span>
          </div>
          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
            خدمات عامة وخدمات متخصصة في الرياض
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            نقدم خدمات الديكور والدهانات وبدائل الرخام والشيبورد وورق الجدران، وينفذها فريق رونق داخل مدينة الرياض وأحيائها.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-10">
          <KeywordGroup title="خدمات الديكور والدهانات" items={generalKeywords} icon="general" />
          <KeywordGroup title="خدماتنا في الرياض" items={riyadhKeywords} icon="riyadh" />
        </div>

        <div className="mx-auto mt-14 max-w-6xl rounded-2xl border border-accent/20 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-center text-2xl font-extrabold text-foreground md:text-3xl">تصفح صفحات خدماتنا</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {serviceLinks.map(link => (
              <a key={link.href} href={link.href} className="rounded-full border border-border px-4 py-3 text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
