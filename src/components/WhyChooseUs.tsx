import { ReactNode } from "react";
import { motion } from "motion/react";
import { GraduationCap, Sparkles, Coins, Users, Wrench, Volume2, UserCheck, Smile } from "lucide-react";
import { WHY_CHOOSE_US_DATA, WhyChooseUsReason } from "../types";

const iconMap: Record<string, ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-brand-red" />,
  Sparkles: <Sparkles className="w-5 h-5 text-brand-red" />,
  Coins: <Coins className="w-5 h-5 text-brand-red" />,
  Users: <Users className="w-5 h-5 text-brand-red" />,
  Wrench: <Wrench className="w-5 h-5 text-brand-red" />,
  Volume2: <Volume2 className="w-5 h-5 text-brand-red" />,
  UserCheck: <UserCheck className="w-5 h-5 text-brand-red" />,
  Smile: <Smile className="w-5 h-5 text-brand-red" />
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Absolute background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Our Edge
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            WHY CHOOSE FITNESSTAAN
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            We deliver the highest caliber of fitness culture in Shah Faisal Colony, prioritizing your mental growth, physical safety, and results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((reason: WhyChooseUsReason, idx) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              className="p-6 rounded-sm bg-brand-charcoal/40 border border-white/5 hover:border-brand-red/20 hover:bg-brand-charcoal/70 transition-all duration-300 flex gap-4"
            >
              {/* Icon container */}
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-black/80 border border-white/5 flex items-center justify-center">
                {iconMap[reason.iconName] || <Sparkles className="w-5 h-5 text-brand-red" />}
              </div>

              {/* Text content */}
              <div className="space-y-1.5">
                <h3 className="text-lg font-bebas tracking-wider text-brand-text">
                  {reason.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
