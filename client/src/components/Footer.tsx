import { Phone, MessageCircle, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/manus-storage/ronaq-logo_759e255b.png" 
                alt="رونق للديكور" 
                className="h-10 w-10"
              />
              <h3 className="text-lg font-bold">رونق للديكور</h3>
            </div>
            <p className="text-white/70 text-sm">
              متخصصون في الديكورات والتشطيبات الداخلية والخارجية بأعلى معايير الجودة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">الروابط السريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-white/70 hover:text-accent transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-accent transition-colors">
                  المشاريع
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-accent transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-accent transition-colors">
                  التواصل
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">دهانات داخلية وخارجية</li>
              <li className="text-white/70">ديكورات داخلية وخارجية</li>
              <li className="text-white/70">جبس بورد وسمنت بورد</li>
              <li className="text-white/70">ورق جدران وتكسيات</li>
              <li className="text-white/70">ترميم وتشطيب</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a 
                href="tel:0540450417"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">0540450417</span>
              </a>
              <a 
                href="https://wa.me/966539740564"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors"
              >
                <MessageCircle size={18} />
                <span className="text-sm">0539740564</span>
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={18} />
                <span className="text-sm">الرياض، السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            جميع الحقوق محفوظة © {currentYear} رونق للديكور
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="#"
              className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:text-foreground transition-all duration-200"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#"
              className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:text-foreground transition-all duration-200"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#"
              className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:text-foreground transition-all duration-200"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-white/50 text-xs text-center">
            ديكور الرياض | دهانات | تشطيب | ديكورات داخلية | ديكورات خارجية | باركيه | جبس بورد | ترميم | تكسيات | بديل رخام | 
            شيبورد | ورق جدران | رفوف | خلفية شاشة | غرف نوم | سمنت بورد | عوازل صوتية | غرفة سندويش بنل | بلاط | كهرباء | بناء | تليس
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
