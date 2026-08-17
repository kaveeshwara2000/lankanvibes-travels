import { motion } from "framer-motion";
import { Compass, Shield, UserCheck, Map } from "lucide-react";

interface ValueProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const values: ValueProps[] = [
  {
    icon: Compass,
    title: "Deep Local Knowledge",
    description: "Our guides are born and raised in Sri Lanka, unlocking access to hidden temples and local spots unknown to agencies."
  },
  {
    icon: Shield,
    title: "Comfortable Private Travel",
    description: "Relax in premium, climate-controlled SUVs and sedans driven by professional Chauffeur-Guides throughout your holiday."
  },
  {
    icon: Map,
    title: "Tailored Itineraries",
    description: "No cookie-cutter trips. We shape your tour around your physical pace, interests, and culinary desires."
  },
  {
    icon: UserCheck,
    title: "Authentic Connections",
    description: "Share a meal with a village family, harvest tea with estate workers, and connect deeply with the Sri Lankan community."
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-offwhite overflow-hidden"
      aria-label="About Us"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Asymmetric Image Collage (Left) - Taking 5 columns on large screens */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Background sand accent box */}
            <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 bg-sand border border-sand-dark -z-10 hidden sm:block" />
            
            {/* Primary Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full relative shadow-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1674498260932-6f7d8eed6d9f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80"
                alt="Beautiful tea estate in Sri Lanka with lush greenery and misty mountains"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
            
            {/* Floating Editorial Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -right-4 top-12 bg-forest text-sand p-6 max-w-[200px] border border-forest-light hidden md:block"
            >
              <span className="font-serif text-3xl font-semibold italic text-terracotta">100%</span>
              <p className="font-sans text-[11px] uppercase tracking-widest text-sand/80 mt-2 font-medium">
                Tailor-made itineraries for discerning travelers
              </p>
            </motion.div>
          </div>

          {/* Copywriting & Grid Core (Right) - Taking 6 columns */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
              The LankanVibes Philosophy
            </span>
            
            {/* Heading */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-tight font-normal mb-8">
              Travel Sri Lanka <span className="italic">Differently.</span>
            </h2>
            
            {/* Narrative copy */}
            <p className="font-sans text-sm md:text-base text-charcoal-light leading-relaxed mb-12 max-w-xl">
              We believe a journey should be more than visiting checkpoints. It should change how you see the world. LankanVibes creates highly personalized private tours, blending luxury, local insight, and raw Sri Lankan adventure.
            </p>

            {/* Core Values Sub-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <div className="p-3 bg-sand border border-sand-dark text-terracotta mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-forest mb-2">
                      {val.title}
                    </h3>
                    <p className="font-sans text-xs text-charcoal-light leading-relaxed">
                      {val.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
