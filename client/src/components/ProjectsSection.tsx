import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'خلفية شاشة بتكسيات مع رفوف',
      category: 'تكسيات وديكور شاشة',
      description: 'تنفيذ خلفية شاشة بتكسيات جدارية وإضاءة مخفية ورفوف ووحدة تلفزيون معلقة داخل الرياض.',
      image: '/manus-storage/1000262663_dff76e4e.jpg'
    },
    {
      title: 'بديل رخام مع رسم بليزر بالرياض',
      category: 'بديل رخام وديكور جداري',
      description: 'تنفيذ جدار ديكوري من بديل الرخام مع رسم بليزر وتكسيات خشبية وإضاءة مخفية لمظهر فاخر في الرياض.',
      image: '/manus-storage/1000262665_cf1454d1.jpg'
    },
    {
      title: 'خلفية مرايات مع بديل الشيبورد بالرياض',
      category: 'مرايات وبديل شيبورد',
      description: 'تصميم خلفية جدارية تجمع بين بديل الشيبورد والمرايات والإضاءة الجانبية بتنفيذ أنيق داخل الرياض.',
      image: '/manus-storage/1000262677_483bf186.jpg'
    },
    {
      title: 'خلفية مرآة مع تكسيات خشبية بالرياض',
      category: 'تكسيات خشبية ومرايات',
      description: 'تنفيذ تكسيات خشبية رأسية مع مرآة دائرية وإضاءة مخفية لإضافة لمسة فخمة وعصرية للمكان في الرياض.',
      image: '/manus-storage/1000262647_60aa16e5.jpg'
    },
    {
      title: 'سقف جبس بورد بإضاءة مخفية لغرفة معيشة بالرياض',
      category: 'جبس بورد وإضاءة مخفية',
      description: 'تنفيذ سقف جبس بورد عصري بخطوط إضاءة مخفية وتنسيق متكامل لغرفة معيشة داخل أحد منازل الرياض.',
      image: '/manus-storage/1000237161_ed70a3d6.jpg'
    },
    {
      title: 'ديكور داخلي مودرن مع خلفية شاشة بالرياض',
      category: 'ديكور داخلي وخلفيات شاشات',
      description: 'تنفيذ ديكور داخلي مودرن يجمع بين خلفية الشاشة والتكسيات والإضاءة الهادئة ضمن تصميم سكني في الرياض.',
      image: '/manus-storage/1000237165_11c95689.jpg'
    },
    {
      title: 'خلفية شاشة وتكسيات بإضاءة مخفية بالرياض',
      category: 'خلفيات شاشات وتكسيات',
      description: 'تنفيذ خلفية شاشة متناسقة مع تكسيات جدارية وإضاءة مخفية لإبراز منطقة الجلوس في منزل بالرياض.',
      image: '/manus-storage/1000237153_fb33ec87.jpg'
    },
    {
      title: 'ديكور مجلس مع سقف دائري وخلفية شاشة بالرياض',
      category: 'مجالس وديكورات داخلية',
      description: 'تنفيذ ديكور مجلس دافئ مع سقف بإضاءة دائرية وخلفية شاشة ووحدات عرض بتفاصيل أنيقة في الرياض.',
      image: '/manus-storage/1000237175_7f4a9ea6.jpg'
    },
    {
      title: 'تكسيات جدارية وبديل خشب بإضاءة مخفية بالرياض',
      category: 'تكسيات وبديل خشب',
      description: 'تنفيذ تكسيات جدارية أنيقة تجمع بين الألواح الهادئة والشرائح الطولية مع إضاءة سقفية مخفية داخل منزل بالرياض.',
      image: '/manus-storage/1000242145_46d4e5c3.jpg'
    },
    {
      title: 'تكسيات خشبية بشرائح طولية وإضاءة مخفية بالرياض',
      category: 'تكسيات خشبية',
      description: 'تفاصيل تنفيذ تكسيات خشبية بشرائح طولية وإضاءة دافئة لإبراز الجدار وإضافة عمق فخم للمساحة الداخلية في الرياض.',
      image: '/manus-storage/1000242142_b0d10ffa.jpg'
    },
    {
      title: 'تجهيز خلفية شاشة وتكسيات خشبية بالرياض',
      category: 'خلفيات شاشات وتكسيات',
      description: 'مرحلة تنفيذ خلفية شاشة مع ألواح تكسيات خشبية وتجهيزات جدارية داخل مساحة سكنية في الرياض.',
      image: '/manus-storage/1000242131_16cb8e11.jpg'
    },
    {
      title: 'ديكور غرفة نوم بتكسيات خشبية وإضاءة مخفية بالرياض',
      category: 'غرف نوم وديكور داخلي',
      description: 'تنفيذ ديكور غرفة نوم هادئ مع تكسيات جدارية وإضاءة مخفية وتنسيق عصري داخل منزل بالرياض.',
      image: '/manus-storage/1000237141_cf4c7a7b.jpg'
    },
  ];

  return (
    <section id="projects" className="py-32 bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <p className="text-accent font-semibold text-lg mb-4">أعمالنا</p>
          <h2 className="text-foreground mb-6">
            مشاريع منجزة بتميز
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            استكشف مجموعة من المشاريع الناجحة التي تعكس احترافيتنا وجودة عملنا
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-80 bg-muted">
                <img
                  src={project.image}
                  alt={`${project.title} | أعمال رونق للديكور في الرياض`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold group/link hover:gap-3 transition-all duration-200"
                >
                  تفاصيل المشروع
                  <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg p-16 border border-border text-center">
          <p className="text-accent font-semibold text-lg mb-4">استشارة مجانية</p>
          <h3 className="text-3xl font-bold text-foreground mb-6">
            هل تريد تحويل مساحتك؟
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا اليوم واحصل على استشارة مجانية وعرض أسعار خاص لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0540450417"
              className="px-8 py-3 bg-foreground text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              اتصل بنا
            </a>
            <a
              href="https://wa.me/966539740564"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              واتس أب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
