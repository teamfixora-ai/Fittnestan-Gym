import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA, FAQItem } from "../types";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 bg-brand-charcoal overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Support Desk
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            Everything you need to know about starting your fitness transformation at Fitnesstaan Gym.
          </p>
        </div>

        {/* Accordions List container */}
        <div className="space-y-4">
          {FAQ_DATA.map((item: FAQItem, idx) => {
            const isOpen = activeId === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className={`rounded-sm border overflow-hidden transition-colors duration-300 ${
                  isOpen 
                    ? "bg-brand-black border-brand-red/40 shadow-xl" 
                    : "bg-brand-black/40 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Header Toggle Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isOpen ? "text-brand-red" : "text-brand-muted"}`} />
                    <span className="text-base sm:text-lg font-bebas tracking-wide text-brand-text">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-brand-red" : ""
                    }`}
                  />
                </button>

                {/* Answer collapsing panel with Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-brand-muted font-light leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
