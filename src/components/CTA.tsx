import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const handleScrollToContact = () => {
    const targetElement = document.querySelector("#contact");
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
      id="cta"
      className="relative py-24 md:py-36 bg-forest overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80"
          alt="Golden coastal sunset in Sri Lanka"
          className="w-full h-full object-cover object-center opacity-40 select-none"
          loading="lazy"
        />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/50" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12"
      >
        <div className="max-w-2xl">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
            Begin Your Story
          </span>
          
          <h2 className="font-serif text-4xl md:text-6xl text-sand font-normal leading-tight mb-6">
            Your Sri Lankan Adventure Starts <span className="italic block md:inline text-terracotta">Here.</span>
          </h2>
          
          <p className="font-sans text-base md:text-lg text-sand/80 font-light leading-relaxed mb-10 max-w-xl">
            Tell us what inspires you, and we'll help shape a journey around it. Get in touch with our local travel experts today.
          </p>

          <button
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta hover:bg-terracotta-hover text-sand font-medium uppercase tracking-widest text-xs transition-colors duration-300 shadow-lg shadow-terracotta/20 focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            Plan Your Journey
            <ArrowRight size={14} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
