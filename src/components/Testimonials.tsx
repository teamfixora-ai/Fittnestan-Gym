import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS_DATA, Testimonial } from "../types";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
      }, 5000);
    }

    return () => resetTimeout();
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            WHAT OUR MEMBERS SAY
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            Real feedback from our family of athletes and lifters in Rafah-e-Aam & Shamsi Society, Karachi.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative px-4 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Slider Display Card */}
          <div className="relative overflow-hidden min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-card p-8 md:p-12 rounded-sm relative max-w-3xl w-full border border-white/5 shadow-2xl"
              >
                {/* Visual quote icon ornament */}
                <div className="absolute top-6 right-8 text-brand-red/10">
                  <Quote className="w-16 h-16 transform rotate-180" />
                </div>

                {/* Stars container */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: TESTIMONIALS_DATA[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-red fill-brand-red" />
                  ))}
                </div>

                {/* Testimonial feedback quote */}
                <blockquote className="text-lg md:text-xl text-brand-text leading-relaxed font-light italic mb-8 relative z-10">
                  "{TESTIMONIALS_DATA[currentIndex].text}"
                </blockquote>

                {/* Sub-details (Name & Membership role) */}
                <div className="flex items-center gap-4">
                  {/* Custom initials avatar */}
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center font-bebas text-lg font-semibold text-brand-red">
                    {TESTIMONIALS_DATA[currentIndex].name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <cite className="not-italic text-lg font-bebas tracking-wide text-brand-text block">
                      {TESTIMONIALS_DATA[currentIndex].name}
                    </cite>
                    <span className="text-xs font-mono text-brand-muted tracking-wide block">
                      {TESTIMONIALS_DATA[currentIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Slider control buttons */}
          <div className="flex justify-between items-center mt-8 max-w-xs mx-auto">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-brand-charcoal border border-white/5 text-brand-text flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination indicator dots */}
            <div className="flex gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? "bg-brand-red w-6" 
                      : "bg-brand-charcoal border border-white/10"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-brand-charcoal border border-white/5 text-brand-text flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-300"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
