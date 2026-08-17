import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye } from "lucide-react";

interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
  colSpan: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "Wildlife",
    title: "Leopard in Yala National Park",
    image: "https://images.unsplash.com/photo-1677298294740-9dce87a49ba3?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-1 lg:row-span-1 aspect-square lg:aspect-auto"
  },
  {
    id: "2",
    category: "Tea Country",
    title: "Emerald Estate Tea Hills, Nuwara Eliya",
    image: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-1 lg:row-span-2 aspect-[3/4] lg:aspect-auto"
  },
  {
    id: "3",
    category: "Train Journey",
    title: "Scenic Highlands Blue Train Crossing",
    image: "https://images.unsplash.com/photo-1566976273017-6e6df9bbdbee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-2 lg:row-span-1 aspect-[16/9] lg:aspect-auto"
  },
  {
    id: "4",
    category: "Beaches",
    title: "Palm Coves & Sunsets in Mirissa",
    image: "https://images.unsplash.com/photo-1522310193626-604c5ef8be43?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-1 lg:row-span-1 aspect-square lg:aspect-auto"
  },
  {
    id: "5",
    category: "Ancient Architecture",
    title: "Sigiriya Lion Rock Citadel",
    image: "https://images.unsplash.com/photo-1711100358818-bd901363d56a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-1 lg:row-span-1 aspect-square lg:aspect-auto"
  },
  {
    id: "6",
    category: "Local Culture",
    title: "Sacred Ceremonial Monk Walking",
    image: "https://images.unsplash.com/photo-1624963145721-277432579507?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-1 lg:row-span-2 aspect-[3/4] lg:aspect-auto"
  },
  {
    id: "7",
    category: "Sri Lankan Cuisine",
    title: "Traditional Riceand Curry with Fresh Ingredients",
    image: "https://images.unsplash.com/photo-1742281095650-dd3c50c08772?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-2 lg:row-span-1 aspect-[16/9] lg:aspect-auto"
  },
  {
    id: "8",
    category: "Mountains",
    title: "Little Adam's Peak",
    image: "https://images.unsplash.com/photo-1517586220462-f5712b9ec531?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    colSpan: "lg:col-span-1 lg:row-span-1 aspect-square lg:aspect-auto"
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Handle escape key listener for closing lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-offwhite"
      aria-label="Image Gallery"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
            Visual Inspirations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-tight font-normal">
            Moments From The <span className="italic">Road.</span>
          </h2>
          <div className="w-16 h-[2px] bg-terracotta mt-6" />
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`relative overflow-hidden group border border-sand-dark shadow-sm cursor-pointer ${item.colSpan}`}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 select-none"
                loading="lazy"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-forest/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                <div className="flex justify-end">
                  <span className="p-2 bg-sand/80 text-forest backdrop-blur-sm rounded-full">
                    <Eye size={16} />
                  </span>
                </div>
                <div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-sand mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-sand leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 p-2 text-sand/80 hover:text-sand hover:bg-white/10 rounded-full focus:outline-none transition-colors duration-300"
                aria-label="Close image preview"
              >
                <X size={24} />
              </button>

              {/* Image Preview */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden border border-sand/10 shadow-2xl">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[75vh] object-contain select-none"
                />
              </div>

              {/* Metadata Footer */}
              <div className="text-center mt-4 text-sand max-w-xl">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-terracotta">
                  {selectedItem.category}
                </span>
                <h4 className="font-serif text-lg md:text-xl font-normal text-sand mt-1">
                  {selectedItem.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
