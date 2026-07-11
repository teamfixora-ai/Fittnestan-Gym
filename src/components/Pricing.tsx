import { motion } from "motion/react";
import { Check, Flame, Award, Dumbbell } from "lucide-react";
import { PRICING_DATA, PricingPlan } from "../types";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-brand-charcoal overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Membership Plans
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            AFFORDABLE MEMBERSHIP TIERS
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            No registration fees. Invest in your physical wellness with our highly competitive, transparent price tiers that offer unmatched local training value.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_DATA.map((plan: PricingPlan, idx) => {
            const isBasic = plan.id === "plan-basic";
            const isPremium = plan.id === "plan-premium";
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative rounded-sm flex flex-col justify-between p-8 shadow-2xl transition-all duration-300 ${
                  plan.isPopular 
                    ? "bg-brand-black border-2 border-brand-red scale-102 lg:scale-105 z-10 shadow-[0_15px_40px_-10px_rgba(255,45,45,0.25)]" 
                    : "bg-brand-black/65 border border-white/5"
                }`}
              >
                {/* Popular Highlight Ribbon */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-brand-text text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-brand-text" />
                    Most Popular
                  </div>
                )}

                {/* Card Top Details */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      {isBasic && <Dumbbell className="w-6 h-6 text-brand-muted mb-2" />}
                      {plan.isPopular && <Flame className="w-6 h-6 text-brand-red mb-2" />}
                      {isPremium && <Award className="w-6 h-6 text-yellow-500 mb-2" />}
                      <h3 className="text-2xl font-bebas tracking-wider text-brand-text">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  {/* Pricing Number display */}
                  <div className="flex items-baseline mb-6 border-b border-white/5 pb-6">
                    <span className="text-4xl md:text-5xl font-bebas tracking-wide text-brand-text">
                      {plan.price}
                    </span>
                    <span className="text-sm font-mono text-brand-muted ml-2">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-brand-red" />
                        </div>
                        <span className="text-sm text-brand-muted leading-tight">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Join CTA Button */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className={`block w-full text-center py-3.5 rounded-sm text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                      plan.isPopular
                        ? "bg-brand-red hover:bg-brand-red-hover text-brand-text red-glow red-glow-hover"
                        : "bg-brand-charcoal hover:bg-white/5 border border-white/10 hover:border-brand-red/30 text-brand-text"
                    }`}
                  >
                    Join Today
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* transparent note */}
        <div className="text-center mt-12">
          <p className="text-xs font-mono text-brand-muted tracking-wide max-w-md mx-auto leading-relaxed">
            * No long-term contracts. Payments can be settled monthly. Standard floor guidelines apply. Call us to book a dynamic tour.
          </p>
        </div>

      </div>
    </section>
  );
}
