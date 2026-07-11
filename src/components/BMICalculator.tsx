import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calculator, Activity, Heart, ShieldCheck } from "lucide-react";

export default function BMICalculator() {
  const [height, setHeight] = useState<number>(170); // in cm
  const [weight, setWeight] = useState<number>(70);  // in kg
  const [bmi, setBmi] = useState<number>(24.2);
  const [category, setCategory] = useState<string>("Normal Weight");
  const [advice, setAdvice] = useState<string>("");
  const [accentColor, setAccentColor] = useState<string>("text-green-500");
  const [barWidthPercent, setBarWidthPercent] = useState<number>(50);

  // Recalculate BMI in real-time when sliders change
  useEffect(() => {
    const heightInMeters = height / 100;
    if (heightInMeters <= 0) return;
    const computedBmi = weight / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(computedBmi.toFixed(1));
    setBmi(roundedBmi);

    // Categories and specific suggestions
    if (roundedBmi < 18.5) {
      setCategory("Underweight");
      setAccentColor("text-sky-400");
      setAdvice("You are in the underweight range. Focus on progressive strength training and a structured caloric surplus with dense, wholesome macronutrients to build solid lean muscle.");
      // Map BMI to width percent (min 10, max 40 range)
      const pct = Math.max(5, Math.min(25, ((roundedBmi - 10) / 8.5) * 20 + 5));
      setBarWidthPercent(pct);
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      setCategory("Healthy Weight");
      setAccentColor("text-emerald-500");
      setAdvice("Superb physical standing! You are in the healthy BMI range. Maintain your composition with continuous athletic progressive overload, cardio stamina training, and clean eating.");
      const pct = 25 + ((roundedBmi - 18.5) / 6.5) * 25;
      setBarWidthPercent(pct);
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      setCategory("Overweight");
      setAccentColor("text-amber-500");
      setAdvice("You are in the overweight range. We suggest a moderate caloric deficit matched with high-volume compound lifts and metabolic conditioning to reduce excess body fat safely.");
      const pct = 50 + ((roundedBmi - 25) / 5) * 25;
      setBarWidthPercent(pct);
    } else {
      setCategory("Obese Range");
      setAccentColor("text-brand-red");
      setAdvice("You are in the obese range. We strongly recommend working with a personal coach for supervised low-impact resistance programs, cardiovascular health, and sustainable nutrition habits.");
      const pct = Math.min(95, 75 + ((roundedBmi - 30) / 10) * 20);
      setBarWidthPercent(pct);
    }
  }, [height, weight]);

  return (
    <section id="bmi-calculator" className="relative py-24 bg-brand-black overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Health Utilities
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            BMI FITNESS CALCULATOR
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            Assess your body mass index instantly to choose the correct calorie target and program alignment.
          </p>
        </div>

        {/* Calculator Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Panel: Sliders Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-sm bg-brand-charcoal border border-white/5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Calculator className="w-5 h-5 text-brand-red" />
                <h3 className="text-xl font-bebas tracking-wider text-brand-text">Input Your Metrics</h3>
              </div>

              {/* Height Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-brand-text">Height</span>
                  <span className="text-sm font-mono font-bold bg-brand-black px-3 py-1 rounded-sm border border-white/5 text-brand-red">
                    {height} cm
                  </span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-1 bg-brand-black rounded-lg appearance-none cursor-pointer accent-brand-red"
                />
                <div className="flex justify-between text-[10px] font-mono text-brand-muted">
                  <span>120 cm</span>
                  <span>170 cm</span>
                  <span>220 cm</span>
                </div>
              </div>

              {/* Weight Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-brand-text">Weight</span>
                  <span className="text-sm font-mono font-bold bg-brand-black px-3 py-1 rounded-sm border border-white/5 text-brand-red">
                    {weight} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="180"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-1 bg-brand-black rounded-lg appearance-none cursor-pointer accent-brand-red"
                />
                <div className="flex justify-between text-[10px] font-mono text-brand-muted">
                  <span>30 kg</span>
                  <span>105 kg</span>
                  <span>180 kg</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-8 flex gap-4 items-start">
              <div className="p-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                Please note that while BMI is a highly useful reference parameter, it does not directly isolate muscle mass percentage. Bodybuilders may display a higher BMI despite having low body fat levels.
              </p>
            </div>
          </motion.div>

          {/* Right Panel: Results & Animated Gauge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-sm bg-brand-charcoal border border-white/5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Activity className="w-5 h-5 text-brand-red" />
                <h3 className="text-xl font-bebas tracking-wider text-brand-text">Your Assessment</h3>
              </div>

              {/* BMI Big Number Display */}
              <div className="flex items-center justify-between p-6 rounded-sm bg-brand-black/40 border border-white/5">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-brand-muted">Your BMI Score</span>
                  <p className="text-5xl font-bebas tracking-wider text-brand-text mt-1">{bmi}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase font-mono tracking-widest text-brand-muted">Classification</span>
                  <p className={`text-2xl font-bebas tracking-wider uppercase mt-1 ${accentColor}`}>{category}</p>
                </div>
              </div>

              {/* Dynamic Animated Gauge Scale Bar */}
              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono font-bold text-brand-muted uppercase tracking-widest">Gauge Spectrum</span>
                
                {/* Horizontal scale segments */}
                <div className="relative h-3 rounded-full overflow-hidden bg-brand-black flex">
                  <div className="h-full w-[25%] bg-sky-400" />
                  <div className="h-full w-[25%] bg-emerald-500" />
                  <div className="h-full w-[25%] bg-amber-500" />
                  <div className="h-full w-[25%] bg-brand-red" />
                  
                  {/* Glowing Marker Pointer */}
                  <motion.div
                    className="absolute -top-1 w-5 h-5 rounded-full bg-white border-2 border-brand-black shadow-lg"
                    style={{ left: `${barWidthPercent}%`, transform: "translateX(-50%)" }}
                    animate={{ left: `${barWidthPercent}%` }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  />
                </div>

                {/* Scale Indicators */}
                <div className="flex justify-between text-[9px] font-mono font-bold text-brand-muted tracking-widest uppercase pt-1">
                  <span className="text-sky-400">Under 18.5</span>
                  <span className="text-emerald-500">18.5 - 24.9</span>
                  <span className="text-amber-500">25.0 - 29.9</span>
                  <span className="text-brand-red">30.0+ Obese</span>
                </div>
              </div>
            </div>

            {/* Custom Health suggestions */}
            <div className="p-5 rounded-sm bg-brand-black/50 border border-white/5 mt-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-red uppercase tracking-wider">
                <Heart className="w-4 h-4 fill-brand-red" />
                <span>Coach Recommendation</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                {advice}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
