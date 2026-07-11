import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Floating Call Button */}
      <motion.a
        href="tel:+923333156396"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="w-12 h-12 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-text hover:bg-brand-red hover:border-brand-red shadow-xl transition-all duration-300 group hover:-translate-y-1"
        title="Call Fitnesstaan Gym"
      >
        <Phone className="w-5 h-5 text-brand-red group-hover:text-brand-text transition-colors" />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/923333156396?text=Hi%20Fitnesstaan%20Gym!%20I'd%20like%20to%20know%20more%20about%20your%20membership%20plans%20and%20timings."
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:bg-[#20ba5a] hover:-translate-y-1 relative"
        title="Chat on WhatsApp"
      >
        {/* Radar Ring pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 fill-white" />
      </motion.a>

      {/* Back-to-Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-12 h-12 rounded-full bg-brand-red text-brand-text flex items-center justify-center shadow-xl hover:bg-brand-red-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer red-glow"
            title="Scroll to top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
