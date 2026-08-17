import { motion } from "framer-motion";

interface StatItem {
  number: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    number: "500+",
    label: "Happy Guests",
    description: "Tailored journeys completed for international travelers."
  },
  {
    number: "50+",
    label: "Bespoke Experiences",
    description: "Curated encounters beyond typical tourist itineraries."
  },
  {
    number: "4.9 / 5",
    label: "Guest Rating",
    description: "Excellent reviews on travel satisfaction and safety."
  },
  {
    number: "10+ Years",
    label: "Local Expertise",
    description: "Deep roots and networks across the island."
  }
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-sand py-12 md:py-20 border-b border-sand-dark"
      aria-label="Key Statistics"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center flex flex-col items-center border-r last:border-r-0 border-sand-dark/60 last:border-none px-4"
            >
              {/* Stat number */}
              <span className="font-serif text-3xl md:text-5xl font-semibold text-forest mb-2">
                {stat.number}
              </span>
              
              {/* Stat label */}
              <h3 className="font-sans text-xs md:text-sm font-semibold uppercase tracking-wider text-terracotta mb-2">
                {stat.label}
              </h3>
              
              {/* Stat description */}
              <p className="font-sans text-xs text-charcoal-light leading-relaxed max-w-[200px] hidden md:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
