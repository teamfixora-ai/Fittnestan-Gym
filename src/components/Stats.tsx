import { useEffect, useState, useRef } from "react";
import { Users, Star, Award, Calendar } from "lucide-react";

interface CounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
}

function AnimatedCounter({ end, decimals = 0, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const duration = 1500; // 1.5 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * end;
      
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end]);

  return (
    <div ref={elementRef} className="text-4xl sm:text-5xl md:text-6xl font-bebas tracking-wider text-brand-text">
      {count.toFixed(decimals)}
      {suffix}
    </div>
  );
}

export default function Stats() {
  const statsList = [
    {
      label: "Satisfied Members",
      endValue: 101,
      decimals: 0,
      suffix: "+",
      icon: <Users className="w-6 h-6 text-brand-red" />,
      description: "Highly dedicated active lifters"
    },
    {
      label: "Google Rating",
      endValue: 4.8,
      decimals: 1,
      suffix: "★",
      icon: <Star className="w-6 h-6 text-brand-red fill-brand-red" />,
      description: "101+ verified local reviews"
    },
    {
      label: "Modern Machines",
      endValue: 20,
      decimals: 0,
      suffix: "+",
      icon: <Award className="w-6 h-6 text-brand-red" />,
      description: "Biomechanically engineered gears"
    },
    {
      label: "Open Weekly",
      endValue: 7,
      decimals: 0,
      suffix: " Days",
      icon: <Calendar className="w-6 h-6 text-brand-red" />,
      description: "Until 12:00 AM Midnight daily"
    }
  ];

  return (
    <section id="stats" className="relative py-16 bg-brand-black border-y border-white/5 overflow-hidden">
      {/* Absolute Decorative Glow lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => (
            <div
              key={stat.label}
              id={`stat-card-${idx}`}
              className="flex flex-col items-center text-center p-6 rounded-sm bg-brand-charcoal/30 border border-white/5 hover:border-brand-red/15 hover:bg-brand-charcoal/50 transition-all duration-300"
            >
              {/* Stat Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-4">
                {stat.icon}
              </div>

              {/* Animated Value */}
              <AnimatedCounter
                end={stat.endValue}
                decimals={stat.decimals}
                suffix={stat.suffix}
              />

              {/* Stat Label */}
              <span className="text-sm font-bebas tracking-widest text-brand-red uppercase mt-2">
                {stat.label}
              </span>

              {/* Stat Description */}
              <span className="text-xs font-mono text-brand-muted tracking-wide mt-1.5">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
