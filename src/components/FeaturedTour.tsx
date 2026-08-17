import { motion } from "framer-motion";
import { featuredTour } from "../data/tours";
import { Clock, Users, Shield, Car, CheckCircle } from "lucide-react";

export default function FeaturedTour() {
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
      id="featured-tour"
      className="py-20 md:py-32 bg-sand/20 border-t border-b border-sand-dark"
      aria-label="Featured Journey"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="max-w-2xl mb-16">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
            Featured Tour
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-tight font-normal">
            Our Signature <span className="italic">Curated Journey.</span>
          </h2>
          <div className="w-16 h-[2px] bg-terracotta mt-6" />
        </div>

        {/* Feature Layout Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Route & Image Column (Left - 6 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Image */}
            <div className="overflow-hidden border border-sand-dark shadow-lg relative aspect-[16/10] md:aspect-[4/3] w-full">
              <img
                src={featuredTour.image}
                alt="Beautiful Nine Arch Bridge Train scenic view"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest/20" />
            </div>

            {/* Route Timeline Overlay Card */}
            <div className="bg-forest text-sand p-6 border border-forest-light shadow-2xl relative lg:absolute lg:-bottom-12 lg:-right-6 mt-6 lg:mt-0 max-w-md w-full z-10">
              <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-terracotta mb-4">
                Designed Route Itinerary
              </h4>
              <div className="flex items-center justify-between relative">
                {/* Horizontal Connector Line */}
                <div className="absolute top-1/2 left-2 right-2 h-[1px] bg-sand/20 -translate-y-1/2 z-0 hidden sm:block" />
                
                {featuredTour.route.map((city, idx) => (
                  <div key={city} className="flex flex-col items-center z-10">
                    <span className="w-5 h-5 rounded-full bg-terracotta text-sand text-[10px] font-bold flex items-center justify-center border border-forest">
                      {idx + 1}
                    </span>
                    <span className="font-serif text-[11px] font-medium tracking-wide mt-2 text-sand/90">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tour Details Copy Column (Right - 6 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center mt-6 lg:mt-0"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-forest mb-4 font-normal">
              {featuredTour.title}
            </h3>
            
            <p className="font-sans text-xs md:text-sm text-terracotta uppercase tracking-wider font-semibold mb-6">
              {featuredTour.subtitle}
            </p>
            
            <p className="font-sans text-xs md:text-sm text-charcoal-light leading-relaxed mb-8">
              {featuredTour.description}
            </p>

            {/* Tour Parameters Icon Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8 border-t border-b border-sand-dark py-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-terracotta shrink-0" />
                <div>
                  <p className="text-[10px] text-charcoal-light/60 uppercase tracking-widest font-sans font-bold">Duration</p>
                  <p className="text-xs md:text-sm text-forest font-semibold font-sans">{featuredTour.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-terracotta shrink-0" />
                <div>
                  <p className="text-[10px] text-charcoal-light/60 uppercase tracking-widest font-sans font-bold">Tour Type</p>
                  <p className="text-xs md:text-sm text-forest font-semibold font-sans">{featuredTour.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-terracotta shrink-0" />
                <div>
                  <p className="text-[10px] text-charcoal-light/60 uppercase tracking-widest font-sans font-bold">Flexibility</p>
                  <p className="text-xs md:text-sm text-forest font-semibold font-sans">{featuredTour.flexibility}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-terracotta shrink-0" />
                <div>
                  <p className="text-[10px] text-charcoal-light/60 uppercase tracking-widest font-sans font-bold">Transport</p>
                  <p className="text-xs md:text-sm text-forest font-semibold font-sans">{featuredTour.transport}</p>
                </div>
              </div>
            </div>

            {/* Highlights List */}
            <div className="mb-10">
              <h4 className="font-serif text-sm font-semibold text-forest mb-4">Journey Highlights Include:</h4>
              <ul className="space-y-2">
                {featuredTour.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-xs md:text-sm text-charcoal-light font-sans">
                    <CheckCircle className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA button */}
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest hover:bg-terracotta text-sand font-medium uppercase tracking-widest text-xs transition-colors duration-300 w-full sm:w-fit focus:outline-none focus:ring-2 focus:ring-forest"
            >
              Explore This Journey
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
