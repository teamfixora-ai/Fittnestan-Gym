import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-black"
        >
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.08)_0%,transparent_70%)]" />

          {/* Logo container */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex items-center justify-center w-20 h-20 rounded-full bg-brand-charcoal border border-brand-red/30 mb-4"
            >
              {/* Spinning / Pulsing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-red border-r-brand-red/20"
              />
              <Flame className="w-10 h-10 text-brand-red fill-brand-red/10" />
            </motion.div>

            {/* Gym Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bebas tracking-wider text-brand-text mb-1"
            >
              FITNESS<span className="text-brand-red">TAAN</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="text-xs tracking-widest font-mono text-brand-muted uppercase mb-8"
            >
              SHAH FAISAL COLONY • KARACHI
            </motion.p>

            {/* Custom Progress Bar */}
            <div className="relative w-48 h-1 bg-brand-charcoal rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-brand-red"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <motion.span 
              className="text-[10px] font-mono text-brand-muted mt-2 tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              PREPARING ZONE {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
