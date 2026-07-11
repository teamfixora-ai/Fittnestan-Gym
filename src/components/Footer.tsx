import { Flame, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    "Strength Training",
    "Bodybuilding",
    "Weight Loss",
    "Muscle Gain",
    "Functional Training",
    "Cardio Training",
    "Personal Training",
    "Women's Fitness"
  ];

  return (
    <footer id="footer" className="bg-brand-charcoal pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle bottom visual border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Logo & Info column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center transition-colors group-hover:bg-brand-red/20">
                <Flame className="w-5 h-5 text-brand-red fill-brand-red/10" />
              </div>
              <span className="text-2xl font-bebas tracking-wider text-brand-text">
                FITNESS<span className="text-brand-red">TAAN</span>
              </span>
            </a>
            <p className="text-xs text-brand-muted leading-relaxed font-light">
              Fitnesstaan Gym provides premium strength equipment, certified coaching, and a highly motivational environment in Shah Faisal Colony, Karachi, to help athletes sculpt their physical forms and mental resilience.
            </p>
            {/* Direct contact line callout */}
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-red font-bold block mb-1">Coach Support Hotline</span>
              <a href="tel:+923333156396" className="text-xl font-bebas tracking-wide text-brand-text hover:text-brand-red transition-colors">
                +92 333 3156396
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-lg font-bebas tracking-wider text-brand-text border-b border-white/5 pb-2">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-brand-muted hover:text-brand-red transition-colors tracking-wide font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bebas tracking-wider text-brand-text border-b border-white/5 pb-2">
              TRAINING PROGRAMS
            </h4>
            <ul className="space-y-2.5">
              {programs.map((prog) => (
                <li key={prog}>
                  <a
                    href="#programs"
                    className="text-xs text-brand-muted hover:text-brand-red transition-colors tracking-wide font-medium"
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bebas tracking-wider text-brand-text border-b border-white/5 pb-2">
              CONTACT INFORMATION
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span className="text-xs text-brand-muted leading-relaxed font-light">
                  Al-Badar Road, Shamsi Society, Rafah-e-Aam Society, Shah Faisal Colony, Karachi, Pakistan
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href="tel:+923333156396" className="text-xs text-brand-muted hover:text-brand-red transition-colors font-medium">
                  +92 333 3156396
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href="mailto:info@fitnesstaangym.com" className="text-xs text-brand-muted hover:text-brand-red transition-colors font-medium">
                  info@fitnesstaangym.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-center sm:text-left gap-4">
          <p className="text-xs text-brand-muted font-mono">
            &copy; {currentYear} Fitnesstaan Gym. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/923333156396"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-brand-muted hover:text-brand-red transition-colors flex items-center gap-1 font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5 text-brand-red fill-brand-red/15" />
              WhatsApp Help
            </a>
            <span className="text-brand-muted/20">|</span>
            <span className="text-[10px] font-mono text-brand-muted">
              Built with Cinematic Premium Standard
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
