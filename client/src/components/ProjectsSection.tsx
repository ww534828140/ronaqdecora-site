import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'فيلا فاخرة',
      category: 'ديكور داخلي',
      description: 'تصميم وتشطيب فيلا حديثة بديكورات فاخرة وتشطيبات عالية الجودة',
      image: '/manus-storage/projects-showcase_f3110c0a.png'
    },
    {
      title: 'مكتب تنفيذي',
      category: 'ديكور مكتبي',
      description: 'مكتب احترافي بتصميم عصري يعكس الاحترافية والجودة',
      image: '/manus-storage/projects-showcase_f3110c0a.png'
    },
    {
      title: 'شقة سكنية',
      category: 'ترميم وتشطيب',
      description: 'ترميم شامل مع تشطيبات احترافية وديكورات عصرية',
      image: '/manus-storage/projects-showcase_f3110c0a.png'
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
                  alt={project.title}
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
