import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1920&q=80",
    alt: "Nine Arch Bridge Ella, Sri Lanka covered in mist",
  },
  {
    url: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1920&q=80",
    alt: "sigiriya rock fortress in sri lanka",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1920&q=80",
    alt: "beautiful beach in sri lanka",
  },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 6 seconds slide interval
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-forest overflow-hidden"
      aria-label="Welcome"
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIdx}
            src={heroImages[currentIdx].url}
            alt={heroImages[currentIdx].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.7, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          />
        </AnimatePresence>
        {/* Editorial gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-forest via-forest/40 to-forest/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1.3, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-sand font-normal tracking-tight leading-tight mb-6"
        >
          Discover the Soul of  {/*<span className="italic block md:inline text-terracotta">Sri Lanka</span> */}
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-sand font-normal tracking-tight leading-tight mb-6"
        >
         Sri Lanka 
        </motion.h1>


        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-base md:text-xl text-sand/80 font-light leading-relaxed tracking-wide mb-10"
        >
          From misty mountain peaks to golden beaches and ancient kingdoms, experience Sri Lanka through journeys designed around you.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none"
        >
          <button
            onClick={() => handleScrollTo("#experiences")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-terracotta hover:bg-terracotta-hover text-sand font-medium uppercase tracking-widest text-xs transition-colors duration-300 shadow-lg shadow-terracotta/20 focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            Explore Experiences
            <ArrowRight size={14} />
          </button>
          
          <button
            onClick={() => handleScrollTo("#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-sand border border-sand/40 hover:border-sand font-medium uppercase tracking-widest text-xs transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sand"
          >
            Plan Your Journey
          </button>
        </motion.div>
      </div>

      {/* Slide Navigation Dots (Desktop only) */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-500 focus:outline-none ${
              idx === currentIdx ? "bg-terracotta w-6" : "bg-sand/30 hover:bg-sand/65"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] text-sand/50 uppercase tracking-widest font-sans font-medium">
          Scroll
        </span>
        <motion.button
          onClick={() => handleScrollTo("#stats")}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-1 rounded-full border border-sand/20 text-sand/60 hover:text-sand hover:border-sand/40 focus:outline-none transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <ChevronDown size={18} />
        </motion.button>
      </div>
    </section>
  );
}
