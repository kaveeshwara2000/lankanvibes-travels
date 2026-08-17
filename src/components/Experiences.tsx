import { motion } from "framer-motion";
import { experiences } from "../data/tours";
import { ArrowRight } from "lucide-react";

export default function Experiences() {
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
      id="experiences"
      className="py-20 md:py-32 bg-sand/40 border-t border-b border-sand-dark"
      aria-label="Experiences Offered"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
            Bespoke Travel Styles
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-tight font-normal">
            Journeys Worth <span className="italic">Remembering.</span>
          </h2>
          <div className="w-16 h-[2px] bg-terracotta mt-6" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-sand-dark flex flex-col justify-between group overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative overflow-hidden aspect-4/3 w-full">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-forest/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Category */}
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-terracotta mb-2 block">
                    {exp.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-forest mb-3">
                    {exp.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-sans text-xs md:text-sm text-charcoal-light leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                {/* Highlights Summary (hidden on very small screens, fits nicely in layout) */}
                <div className="border-t border-sand pt-4 mb-6">
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="text-[10px] text-charcoal-light flex items-center gap-1 font-sans">
                        <span className="w-1 h-1 bg-terracotta rounded-full shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-terracotta transition-colors duration-300 focus:outline-none w-fit"
                >
                  {exp.ctaText}
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
