import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/testimonials";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-sand relative overflow-hidden border-t border-b border-sand-dark"
      aria-label="Guest Testimonials"
    >
      {/* Decorative quotes background watermark */}
      <div className="absolute top-12 left-12 text-forest/5 pointer-events-none hidden lg:block">
        <Quote size={200} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
          Guest Journal
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-tight font-normal mb-16">
          Stories From The <span className="italic">Road.</span>
        </h2>

        {/* Carousel Container */}
        <div className="min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-terracotta mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#C15C3D" className="stroke-none" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg md:text-2xl text-forest leading-relaxed font-normal mb-8 max-w-3xl italic">
                "{current.review}"
              </blockquote>

              {/* Trip Metadata Badge */}
              <span className="inline-block px-4 py-1.5 bg-forest-light/10 text-forest text-[11px] font-sans font-bold uppercase tracking-wider mb-6">
                {current.tripType}
              </span>

              {/* Author details */}
              <div className="font-sans">
                <cite className="not-italic text-sm font-bold uppercase tracking-wider text-charcoal">
                  {current.name}
                </cite>
                <span className="text-xs text-charcoal-light/70 ml-2 border-l border-sand-dark pl-2">
                  {current.country}
                </span>
                <p className="text-[10px] text-charcoal-light/50 mt-1 uppercase tracking-widest">
                  {current.date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="p-3 border border-sand-dark text-forest hover:bg-forest hover:text-sand hover:border-forest transition-colors duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} />
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-terracotta w-6" : "bg-sand-dark"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="p-3 border border-sand-dark text-forest hover:bg-forest hover:text-sand hover:border-forest transition-colors duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
