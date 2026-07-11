import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "../types";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Workout Area",
    "Machines",
    "Free Weights",
    "Members Training",
    "Personal Training",
    "Gym Interior"
  ];

  // Filter items based on category selected
  const filteredItems = selectedCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex]);

  const handleNext = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  };

  return (
    <section id="gallery" className="relative py-24 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-red font-mono">
            Our Floor
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wide text-brand-text">
            FITNESSTAAN IN ACTION
          </h2>
          <div className="h-1 w-16 bg-brand-red mx-auto" />
          <p className="text-brand-muted text-lg font-light">
            Take a visual tour through our gym, displaying our high-end lifting equipment, cardio assets, and energetic atmosphere.
          </p>
        </div>

        {/* Category Filters Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wider rounded-sm uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-brand-red text-brand-text shadow-[0_3px_10px_rgba(255,45,45,0.3)]"
                  : "bg-brand-black/50 text-brand-muted border border-white/5 hover:border-brand-red/30 hover:text-brand-text"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="relative rounded-sm overflow-hidden aspect-[4/3] group cursor-pointer border border-white/5 bg-brand-black shadow-lg"
              >
                {/* Images */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Cinematic Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-red uppercase font-semibold">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-bebas tracking-wide text-brand-text">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-brand-text scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Photo Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/95 backdrop-blur-md p-4"
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-text hover:bg-brand-red hover:border-brand-red transition-all duration-300 z-50"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-text hover:bg-brand-red hover:border-brand-red transition-all duration-300 z-40"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-text hover:bg-brand-red hover:border-brand-red transition-all duration-300 z-40"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Centered Image display */}
              <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center z-30">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] rounded-sm object-contain border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Sub-text information */}
                <div className="text-center mt-4 space-y-1">
                  <span className="text-[11px] font-mono tracking-widest text-brand-red uppercase font-bold">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bebas tracking-wide text-brand-text">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-brand-muted font-mono">
                    Image {lightboxIndex + 1} of {filteredItems.length}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
