import { ReactNode } from "react";
import { motion } from "motion/react";
import { Dumbbell, Flame, TrendingDown, Zap, Activity, HeartPulse, Award, User, ArrowRight } from "lucide-react";
import { PROGRAMS_DATA, Program } from "../types";

const iconMap: Record<string, ReactNode> = {
  Dumbbell: <Dumbbell className="w-6 h-6 text-brand-red" />,
  Flame: <Flame className="w-6 h-6 text-brand-red" />,
  TrendingDown: <TrendingDown className="w-6 h-6 text-brand-red" />,
  Zap: <Zap className="w-6 h-6 text-brand-red" />,
  Activity: <Activity className="w-6 h-6 text-brand-red" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-brand-red" />,
  Award: <Award className="w-6 h-6 text-brand-red" />,
  User: <User className="w-6 h-6 text-brand-red" />
};

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Our Offerings
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            CHOOSE YOUR FITNESS ROUTE
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            Explore our specialized programs designed in Shah Faisal Colony to optimize performance, build mental fortitude, and maximize body transformations.
          </p>
        </div>

        {/* Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS_DATA.map((program: Program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="relative rounded-sm overflow-hidden aspect-[4/5] group cursor-pointer border border-white/5 shadow-xl bg-brand-charcoal flex flex-col justify-end p-6"
            >
              {/* Background Cinematic Image with Scale Hover Effect */}
              <div className="absolute inset-0 z-0">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Visual dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/20" />
                {/* Red glow border overlay on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-red/30 transition-all duration-300 rounded-sm" />
              </div>

              {/* Dynamic Icon */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-brand-black/90 border border-brand-red/30 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red">
                <div className="group-hover:text-white transition-colors duration-300">
                  {iconMap[program.iconName] || <Dumbbell className="w-6 h-6 text-brand-red" />}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="relative z-10 text-2xl font-bebas tracking-wider text-brand-text mb-2 group-hover:text-brand-red transition-colors duration-300">
                {program.title}
              </h3>

              {/* Card Description */}
              <p className="relative z-10 text-xs text-brand-muted leading-relaxed font-light mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                {program.description}
              </p>

              {/* Inline Callout */}
              <div className="relative z-10 flex items-center gap-1.5 text-xs font-mono font-bold text-brand-red uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Explore Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
