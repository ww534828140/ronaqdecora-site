import SectionPage from '@/pages/SectionPage';

type ServiceDetailPageProps = {
  title: string;
  description: string;
  intro: string;
  services: string[];
};

export default function ServiceDetailPage({ title, description, intro, services }: ServiceDetailPageProps) {
  return (
    <SectionPage title={title} description={description}>
      <section className="container max-w-5xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading--loose text-muted-foreground">{intro}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <h2 className="text-xl font-bold leading-relaxed text-foreground">{service}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                تنفيذ احترافي داخل مدينة الرياض مع معاينة وتنسيق يناسب احتياج مشروعك.
              </p>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-2xl bg-secondary/60 p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">اطلب عرض سعر لخدمتك</h2>
          <p className="mt-3 text-muted-foreground">تواصل مع رونق للديكور عبر الاتصال أو واتساب لمناقشة تفاصيل العمل.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:0540450417" className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground">اتصل الآن</a>
            <a href="https://wa.me/966539740564" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground">واتساب</a>
          </div>
        </div>
      </section>
    </SectionPage>
  );
}
