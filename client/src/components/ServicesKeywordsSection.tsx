/*
 * رونق للديكور — تذكير أسلوب الملف:
 * توجه الفخامة المينيمالية: قسم الكلمات المفتاحية الكبيرة والواضحة للعملاء ومحركات البحث.
 * الأحرف واضحة، كبيرة، ومنسقة بعناية لضمان قراءة ممتازة وتجربة بصرية راقية.
 */

import { CheckCircle2, Sparkles } from 'lucide-react';

const keywordsList = [
  'تركيب بديل رخام الرياض',
  'محلات ورق جدران الرياض',
  'مقاول ترميم شقق بالرياض',
  'تركيب شيبورد وتكسيات خشبية',
  'تصميم خلفيات شاشة TV ديكور',
  'أعمال عوازل صوتية بالرياض',
  'بناء غرف سندويش بنل',
  'ديكورات بالرياض',
  'شركة تشطيبات في الرياض',
  'مقاول ديكور داخلي',
  'دهانات خارجية وداخلية الرياض',
  'فني جبس بورد بالرياض',
  'معلم ديكورات الرياض'
];

export default function ServicesKeywordsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-white border-y border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">خدماتنا التخصصية في الرياض</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            أبرز خدمات الديكور والتشطيب في الرياض
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نقدم نخبة من أعمال الديكورات، الدهانات، والترميم بأعلى معايير الحرفية والالتزام
          </p>
        </div>

        {/* Keywords grid with large, clear typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {keywordsList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-accent transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <CheckCircle2 size={22} />
              </div>
              <span className="text-lg md:text-xl font-bold text-foreground leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Style reminder: the typography is large, bold, and readable, perfectly matching the luxury minimalist ethos. */
