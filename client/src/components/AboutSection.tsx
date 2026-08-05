import { CheckCircle, Users, Award, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, label: 'سنوات الخبرة', value: '10+' },
    { icon: Users, label: 'عملاء راضون', value: '500+' },
    { icon: Zap, label: 'مشاريع منجزة', value: '1000+' },
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'الجودة العالية',
      description: 'نستخدم أفضل المواد والتقنيات الحديثة'
    },
    {
      icon: CheckCircle,
      title: 'الاحترافية',
      description: 'فريق متخصص ذو خبرة عالية'
    },
    {
      icon: CheckCircle,
      title: 'الالتزام',
      description: 'تسليم المشاريع في الوقت المحدد'
    },
    {
      icon: CheckCircle,
      title: 'الأسعار العادلة',
      description: 'أفضل الأسعار مع الحفاظ على الجودة'
    },
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <p className="text-accent font-semibold text-lg mb-4">من نحن</p>
          <h2 className="text-foreground mb-6">
            شركة رونق للديكور
          </h2>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/manus-storage/team-placeholder_37d9b575.png"
              alt="فريق رونق للديكور"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              نحول الأحلام إلى واقع جميل
            </h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              شركة رونق للديكور متخصصة في تقديم حلول ديكور وتشطيب عالية الجودة بأسعار عادلة. 
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              فريقنا يتكون من متخصصين ذوي خبرة عالية في مجال الديكور والتشطيبات والترميم، 
              ونؤمن بأن كل مشروع فريد ويستحق اهتماماً خاصاً.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon size={32} className="text-accent mx-auto mb-3" />
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-24"></div>

        {/* Values */}
        <div>
          <p className="text-accent font-semibold text-lg mb-4 text-center">قيمنا</p>
          <h3 className="text-3xl font-bold text-foreground mb-16 text-center">
            ما يميزنا
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 pt-1">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
