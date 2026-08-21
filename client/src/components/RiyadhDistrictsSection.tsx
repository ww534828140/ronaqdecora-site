/*
 * رونق للديكور — تذكير أسلوب الملف:
 * توجه الفخامة المينيمالية: قسم مناطق وأحياء الرياض للتركيز على الخدمة المحلية (Local SEO).
 * الأحرف واضحة، كبيرة، ومنسقة بخطوط عربية عريضة.
 */

import { MapPin, ShieldCheck } from 'lucide-react';

const riyadhAreas = [
  'شمال الرياض (الملقا، الياسمين، النرجس، حطين، العقيق)',
  'شرق الرياض (الروضة، الرمال، الخليج، النسيم، الحمراء)',
  'غرب الرياض (العريجاء، السفارات، لبن، الهدا، البديعة)',
  'جنوب الرياض (العزيزية، الشفا، الدار البيضاء، المصانع)',
  'وسط الرياض (الملز، المربع، البطحاء، الورود، العليا)'
];

export default function RiyadhDistrictsSection() {
  return (
    <section className="py-24 bg-white border-y border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <MapPin size={18} />
            <span className="text-sm font-semibold">تغطية شاملة لجميع مناطق وأحياء مدينة الرياض</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            نقدم خدمات الديكور والتشطيب في كافة أحياء الرياض
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            فريقنا الفني جاهز للوصول إليك في أي مكان داخل مدينة الرياض لتنفيذ أعمال الديكور، الدهانات، وبديل الرخام بأعلى دقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {riyadhAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-secondary border border-border hover:border-accent shadow-sm transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mt-1">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {area.split('(')[0]}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.includes('(') ? `(${area.split('(')[1]}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Style reminder: Large, clear Riyadh district coverage for robust Local SEO. */
