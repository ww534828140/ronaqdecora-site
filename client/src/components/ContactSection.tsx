import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `اسم العميل: ${formData.name}%0Aالبريد الإلكتروني: ${formData.email}%0Araqm alhatif: ${formData.phone}%0Alrrsala: ${formData.message}`;
    window.open(`https://wa.me/966539740564?text=${message}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'الاتصال',
      value: '0540450417',
      href: 'tel:0540450417'
    },
    {
      icon: MessageCircle,
      label: 'واتس أب',
      value: '0539740564',
      href: 'https://wa.me/966539740564'
    },
    {
      icon: MapPin,
      label: 'الموقع',
      value: 'الرياض، السعودية',
      href: '#'
    },
    {
      icon: Clock,
      label: 'ساعات العمل',
      value: 'السبت - الخميس: 8:00 - 18:00',
      href: '#'
    },
  ];

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <p className="text-accent font-semibold text-lg mb-4">تواصل معنا</p>
          <h2 className="text-foreground mb-6">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            تواصل معنا للاستفسار أو للحصول على عرض أسعار خاص لمشروعك
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-6 bg-secondary rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <Icon size={28} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                <p className="text-lg font-semibold text-foreground">{info.value}</p>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-16"></div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            أرسل لنا رسالة
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-foreground transition-all"
                  placeholder="اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-foreground transition-all"
                  placeholder="بريدك الإلكتروني"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                رقم الجوال
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-foreground transition-all"
                placeholder="رقم جوالك"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                الرسالة
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-foreground resize-none transition-all"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              إرسال الرسالة عبر واتس أب
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            سيتم إرسال رسالتك مباشرة إلى فريقنا عبر واتس أب
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
