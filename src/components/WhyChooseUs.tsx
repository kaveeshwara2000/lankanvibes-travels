import { motion } from "framer-motion";
import { Users, UserKey, Car, CalendarClock } from "lucide-react";

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Users,
    title: "Local Experts",
    description: "Travel with people who know Sri Lanka beyond the guidebooks. Our guides offer authentic insights, local shortcuts, and hidden entry points."
  },
  {
    icon: UserKey,
    title: "Private Experiences",
    description: "Your journey, your pace, your way. Tour in premium air-conditioned privacy with your own chauffeur-guide dedicated entirely to your family."
  },
  {
    icon: Car,
    title: "Tailored Journeys",
    description: "Every itinerary is designed around your interests. We tweak schedules on the fly to match weather, energy levels, and sudden curiosities."
  },
  {
    icon: CalendarClock,
    title: "Always Here",
    description: "From airport arrival to your final sunset, we're with you. Enjoy peace of mind with 24/7 dedicated local concierge support."
  }
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-32 bg-forest text-sand relative overflow-hidden"
      aria-label="Why Choose LankanVibes"
    >
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand-dark/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
            Why Travel With Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sand leading-tight font-normal">
            Why Travel With <span className="italic text-terracotta">LankanVibes?</span>
          </h2>
          <div className="w-16 h-[2px] bg-terracotta mt-6" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col border border-sand/10 hover:border-sand/35 bg-forest-light/30 p-8 transition-all duration-300 relative group"
              >
                {/* Decorative terracotta corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-transparent border-r-transparent group-hover:border-t-terracotta group-hover:border-r-terracotta transition-all duration-300" />
                
                {/* Icon box */}
                <div className="p-3 bg-forest-light border border-sand/10 text-terracotta w-fit mb-6 transition-colors duration-300 group-hover:bg-terracotta group-hover:text-sand">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-sand mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs md:text-sm text-sand/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
