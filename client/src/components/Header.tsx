import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الديكورات', href: '/decorations' },
    { label: 'الدهانات', href: '/painting' },
    { label: 'شيبورد وخشب', href: '/shiboard' },
    { label: 'تكسيات خشبية', href: '/wood' },
    { label: 'ورق جدران', href: '/wallpaper' },
    { label: 'بديل الرخام', href: '/marble' },
    { label: 'التواصل', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/manus-storage/ronaq-logo_759e255b.png" 
              alt="رونق للديكور – معلم ديكورات الرياض" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">رونق للديكور</h1>
              <p className="text-[10px] font-semibold text-accent">معلم ديكورات الرياض</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0540450417"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors duration-200 font-medium text-sm"
            >
              <Phone size={18} />
              اتصل
            </a>
            <a
              href="https://wa.me/966539740564"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-opacity-90 transition-colors duration-200 font-medium text-sm"
            >
              <MessageCircle size={18} />
              واتس
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="tel:0540450417"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm font-medium">اتصل</span>
                </a>
                <a
                  href="https://wa.me/966539740564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-opacity-90 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm font-medium">واتس</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
