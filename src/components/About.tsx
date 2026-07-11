import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const features = [
    "Certified Trainers",
    "Hygienic Environment",
    "Premium Equipment",
    "Friendly Atmosphere",
    "Personalized Guidance",
    "Affordable Membership"
  ];

  return (
    <section id="about" className="relative py-24 bg-brand-charcoal overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Cinematic Split Image with Styled Overlays */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            {/* Visual Frame Background */}
            <div className="absolute -inset-2 rounded-sm bg-gradient-to-tr from-brand-red to-transparent opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Main Image */}
            <a
              href="https://maps.app.goo.gl/vgyCtEaKe3zgokBv5"
              target="_blank"
              rel="noreferrer"
              className="relative rounded-sm overflow-hidden aspect-[4/5] shadow-2xl block group/image cursor-pointer"
              title="View Fitnesstaan Gym on Google Maps"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlfyxHGELa_akpaGNlb5YlSyFlxQnQQ6l9qjRYbbxYutWQ9037CVo4Dbx8bNlGdUCuGk9FRYF8HMS08Y4uUseDuBIEGx3Ky1RHuTef-d8MBTFJSnaY_51UcKvYPv7oMapmHgOu6aQ=s800"
                alt="Fitnesstaan Gym Entrance and Location"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Inner dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent group-hover/image:opacity-90 transition-opacity duration-300" />
              
              {/* Overlay Stat Counter Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm glass-card border border-brand-red/20 flex items-center justify-between group-hover/image:border-brand-red/40 transition-colors duration-300">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-brand-muted group-hover/image:text-brand-red transition-colors duration-300">Click to View on Google Maps</span>
                  <p className="text-xl font-bebas font-bold text-brand-text tracking-wide">Shah Faisal Colony, Karachi</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center border border-brand-red/20 group-hover/image:bg-brand-red/20 transition-all duration-300">
                  <span className="text-brand-red font-bebas font-bold text-lg">PK</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Right Side: Deep Story and Key Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
                About Fitnesstaan Gym
              </h2>
              <div className="h-1 w-16 bg-brand-red" />
            </div>

            <p className="text-brand-muted text-lg leading-relaxed font-light">
              Fitnesstaan Gym provides a clean, motivating, and professional environment for people of all fitness levels in Shah Faisal Colony, Karachi. Whether your goal is weight loss, bodybuilding, strength training, or general fitness, our experienced trainers are committed to helping you achieve lasting results.
            </p>

            {/* Feature Cards Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3.5 p-4 rounded-sm bg-brand-black/40 border border-white/5 hover:border-brand-red/20 hover:bg-brand-black/60 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-red" />
                  </div>
                  <span className="text-base font-semibold tracking-wide text-brand-text">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Premium Callout Block */}
            <div className="p-6 rounded-sm bg-gradient-to-r from-brand-red/10 to-transparent border-l-4 border-brand-red">
              <p className="text-sm italic font-medium text-brand-text">
                "Our training ecosystem doesn't just promise results; we mold a discipline-first mindset that helps you become the absolute strongest version of yourself."
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-brand-red font-bold mt-2.5">
                — Coach, Fitnesstaan Gym
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
