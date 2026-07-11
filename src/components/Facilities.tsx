import { ReactNode } from "react";
import { motion } from "motion/react";
import { Cpu, Dumbbell, HeartPulse, Grid, Lock, Sparkles, Wind, Award } from "lucide-react";
import { FACILITIES_DATA, Facility } from "../types";

const iconMap: Record<string, ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-brand-red" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-brand-red" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-brand-red" />,
  Grid: <Grid className="w-5 h-5 text-brand-red" />,
  Lock: <Lock className="w-5 h-5 text-brand-red" />,
  Sparkles: <Sparkles className="w-5 h-5 text-brand-red" />,
  Wind: <Wind className="w-5 h-5 text-brand-red" />,
  Award: <Award className="w-5 h-5 text-brand-red" />
};

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 bg-brand-charcoal overflow-hidden">
      {/* Absolute background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Our Facilities
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            WORLD-CLASS ENVIRONMENT
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            We provide a premium, hygienic, fully air-conditioned facility with designated zones designed to keep you motivated and training at your absolute peak.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((facility: Facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="glass-card glass-card-hover p-6 rounded-sm flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper with Glow */}
                <div className="w-10 h-10 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-6">
                  {iconMap[facility.iconName] || <Dumbbell className="w-5 h-5 text-brand-red" />}
                </div>

                {/* Facility Title */}
                <h3 className="text-xl font-bebas tracking-wider text-brand-text mb-2.5">
                  {facility.title}
                </h3>

                {/* Facility Description */}
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  {facility.description}
                </p>
              </div>

              {/* Subtle accent corner element */}
              <div className="flex justify-end mt-4">
                <span className="text-[10px] font-mono text-brand-red/30 tracking-widest font-semibold">
                  ZONE_0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
