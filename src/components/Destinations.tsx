import { motion } from "framer-motion";
import { destinations } from "../data/destinations";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Destinations() {
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

  // Assign column classes for large screens to create a stunning asymmetrical layout
  // 6 destinations fit perfectly:
  // Row 1: Ella (2 cols) + Sigiriya (1 col)
  // Row 2: Galle (1 col) + Yala (2 cols)
  // Row 3: Kandy (2 cols) + Mirissa (1 col)
  const getColSpanClass = (index: number) => {
    switch (index) {
      case 0: // Ella
        return "lg:col-span-2 aspect-[4/3] sm:aspect-[16/10]";
      case 1: // Sigiriya
        return "lg:col-span-1 aspect-square lg:aspect-auto";
      case 2: // Galle
        return "lg:col-span-1 aspect-square lg:aspect-auto";
      case 3: // Yala
        return "lg:col-span-2 aspect-[4/3] sm:aspect-[16/10]";
      case 4: // Kandy
        return "lg:col-span-2 aspect-[4/3] sm:aspect-[16/10]";
      case 5: // Mirissa
        return "lg:col-span-1 aspect-square lg:aspect-auto";
      default:
        return "lg:col-span-1 aspect-square";
    }
  };

  return (
    <section
      id="destinations"
      className="py-20 md:py-32 bg-offwhite"
      aria-label="Destinations to explore"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-xl">
            <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
              Curated Travel Guide
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-tight font-normal">
              Places That Stay With You.
            </h2>
            <div className="w-16 h-[2px] bg-terracotta mt-6" />
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className={`relative group overflow-hidden border border-sand-dark cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end min-h-[350px] ${getColSpanClass(
                idx
              )}`}
              onClick={handleScrollToContact}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={dest.image}
                  alt={`${dest.name} landscape photo`}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 select-none"
                  loading="lazy"
                />
                {/* Visual dark gradient cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Destination Metadata & Copy */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end text-sand transition-transform duration-500">
                {/* Location Pin */}
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-sand font-semibold mb-2">
                  <MapPin size={12} className="text-sand" />
                  <span>{dest.location}</span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3 text-sand">
                  {dest.name}
                </h3>

                {/* Description - reveals and matches editorial style */}
                <p className="font-sans text-xs md:text-sm text-sand/80 leading-relaxed mb-6 max-w-xl line-clamp-2 md:line-clamp-none">
                  {dest.description}
                </p>

                {/* Small Metadata row */}
                <div className="flex items-center gap-6 border-t border-sand/20 pt-4 text-[11px] font-sans font-medium text-sand/65">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-sand" />
                    <span>{dest.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-sand" />
                    <span>{dest.bestTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
