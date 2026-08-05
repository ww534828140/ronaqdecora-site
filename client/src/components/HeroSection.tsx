import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/manus-storage/hero-banner_c005b48c.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center py-20">
        <div className="max-w-3xl mx-auto">
          {/* Gold accent line */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            نحول أحلامك إلى واقع جميل
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed">
            متخصصون في الديكورات والتشطيبات الداخلية والخارجية بأعلى معايير الجودة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/966539740564"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              تواصل معنا الآن
            </a>
            
            <a
              href="#services"
              className="px-10 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30 transform hover:scale-105 active:scale-95"
            >
              استكشف الخدمات
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="flex flex-col items-center gap-2 text-white">
            <span className="text-sm font-medium">اكتشف المزيد</span>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
