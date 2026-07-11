import { motion } from "motion/react";
import { Star, Trophy, ShieldCheck, Dumbbell, ArrowDown } from "lucide-react";

export default function Hero() {
  // Generate random particles coordinates for background floating effect
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brand-black overflow-hidden pt-20"
    >
      {/* Background Image with Slow Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920')`,
          }}
        />
        {/* Dark Cinematic Vignette and Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(10,10,10,0.95)_100%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-brand-red/30"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: ["0px", "-120px", "0px"],
              x: ["0px", "30px", "0px"],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Badge Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-charcoal/80 border border-brand-red/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
          </span>
          <span className="text-xs uppercase font-semibold tracking-widest text-brand-text">
            Karachi's Premier Fitness Zone
          </span>
        </motion.div>

        {/* Cinematic Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bebas tracking-wide text-brand-text leading-none mb-6 max-w-5xl"
        >
          TRANSFORM YOUR BODY.<br />
          <span className="red-gradient-text">TRANSFORM YOUR LIFE.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-brand-muted text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10"
        >
          Build strength, lose fat, improve confidence, and achieve your fitness goals with expert coaching and world-class equipment at Fitnesstaan Gym.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
        >
          <a
            href="#pricing"
            className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-brand-text rounded-sm text-base font-bold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,45,45,0.5)] red-glow text-center"
          >
            Join Now
          </a>
          <a
            href="tel:+923333156396"
            className="px-8 py-4 bg-transparent hover:bg-white/5 text-brand-text border border-white/20 hover:border-brand-red/50 rounded-sm text-base font-bold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Call Now
          </a>
        </motion.div>

        {/* Brand Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl border-t border-b border-white/5 py-8 backdrop-blur-[2px]"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-brand-red mb-1">
              <Star className="w-5 h-5 fill-brand-red" />
              <span className="text-xl font-bold font-bebas tracking-wide text-brand-text">4.8 Rating</span>
            </div>
            <span className="text-xs text-brand-muted uppercase tracking-wider font-mono">101+ Google Reviews</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-brand-red mb-1">
              <Trophy className="w-5 h-5" />
              <span className="text-xl font-bold font-bebas tracking-wide text-brand-text">101+ Happy Members</span>
            </div>
            <span className="text-xs text-brand-muted uppercase tracking-wider font-mono">Active Community</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-brand-red mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xl font-bold font-bebas tracking-wide text-brand-text">Expert Team</span>
            </div>
            <span className="text-xs text-brand-muted uppercase tracking-wider font-mono">Certified Coaches</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-brand-red mb-1">
              <Dumbbell className="w-5 h-5" />
              <span className="text-xl font-bold font-bebas tracking-wide text-brand-text">Top Equipment</span>
            </div>
            <span className="text-xs text-brand-muted uppercase tracking-wider font-mono">Premium Machines</span>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <motion.a
          href="#about"
          className="flex flex-col items-center text-brand-muted hover:text-brand-red transition-colors duration-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase font-mono tracking-widest mb-1.5">Discover More</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
