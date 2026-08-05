import { PaintBucket, Home, Wrench, Zap, Layers, Palette } from 'lucide-react';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: PaintBucket,
      title: 'دهانات',
      description: 'دهانات عالية الجودة بألوان متعددة وتشطيبات احترافية'
    },
    {
      icon: Home,
      title: 'ديكورات',
      description: 'تصاميم فريدة تعكس ذوقك وشخصيتك'
    },
    {
      icon: Layers,
      title: 'تشطيب وترميم',
      description: 'تشطيب شامل مع خدمات الترميم المتخصصة'
    },
  ];

  const additionalServices = [
    'شيبورد',
    'باركيه',
    'صفايح حجري',
    'جبس بورد',
    'سمنت بورد',
    'ورق جدران',
    'تكسيات',
    'بديل رخام',
    'رفوف',
    'خلفية شاشة',
    'عوازل صوتية',
    'سندويش بنل',
    'بلاط',
    'كهرباء',
    'تليس',
    'بناء'
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <p className="text-accent font-semibold text-lg mb-4">خدماتنا</p>
          <h2 className="text-foreground mb-6">
            حلول ديكور شاملة
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات المتخصصة في مجال الديكور والتشطيبات بأعلى معايير الجودة
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                {/* Icon with gold accent line */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <Icon size={40} className="text-accent" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-24"></div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-accent font-semibold text-lg mb-8">خدمات إضافية</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="p-4 text-center hover:bg-secondary rounded-lg transition-colors duration-200 group cursor-default"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
                <p className="text-foreground font-medium text-sm">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
