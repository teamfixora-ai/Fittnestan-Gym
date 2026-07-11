import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Flame, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll handler to track scroll depth and activate blur/background
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
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

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-brand-charcoal z-50">
        <div 
          className="h-full bg-brand-red transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        id="navbar-header"
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-brand-black/85 backdrop-blur-md border-b border-white/5 py-3 shadow-lg" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center transition-colors group-hover:bg-brand-red/20">
                <Flame className="w-5 h-5 text-brand-red fill-brand-red/10" />
              </div>
              <span className="text-2xl font-bebas tracking-wider text-brand-text">
                FITNESS<span className="text-brand-red">TAAN</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-brand-muted hover:text-brand-text transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:+923333156396"
                className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                +92 333 3156396
              </a>
              <a
                href="#pricing"
                className="bg-brand-red hover:bg-brand-red-hover text-brand-text px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(255,45,45,0.4)]"
              >
                Join Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-sm text-brand-text hover:bg-brand-charcoal/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-brand-black border-b border-white/5 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-sm text-base font-medium text-brand-muted hover:text-brand-text hover:bg-brand-charcoal/30 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile Call CTA */}
                <div className="pt-4 border-t border-white/5 flex flex-col gap-3 px-3">
                  <a 
                    href="tel:+923333156396"
                    className="flex items-center justify-center gap-2 text-brand-muted hover:text-brand-text py-2 text-sm font-medium"
                  >
                    <Phone className="w-4 h-4 text-brand-red" />
                    +92 333 3156396
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setIsOpen(false)}
                    className="bg-brand-red hover:bg-brand-red-hover text-brand-text py-3 rounded-sm text-center text-sm font-semibold tracking-wider uppercase transition-colors"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
