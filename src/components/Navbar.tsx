import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experiences", href: "#experiences" },
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80; // approximate height of navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-sand/90 backdrop-blur-md border-b border-sand-dark py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="LankanVibes Travels Home"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-500 group-hover:rotate-12"
            >
              <path
                d="M20 80C20 80 35 45 65 35C85 28 80 60 50 65C30 68 20 80 20 80Z"
                fill="#C15C3D"
              />
              <path
                d="M35 70C35 70 45 40 75 35C90 32 85 55 60 58C45 60 35 70 35 70Z"
                fill="#122C1A"
                opacity="0.8"
              />
            </svg>
            <span
              className={`font-serif text-xl md:text-2xl font-bold tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-forest" : "text-white"
              }`}
            >
              Lankan<span className="text-terracotta">Vibes</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 focus:outline-none border-b-2 border-transparent hover:border-terracotta ${
                      isScrolled ? "text-charcoal hover:text-terracotta" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`inline-flex items-center gap-2 px-6 py-3 border text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta ${
                isScrolled
                  ? "bg-forest border-forest text-sand hover:bg-terracotta hover:border-terracotta"
                  : "bg-white/10 border-white/30 text-white hover:bg-white hover:text-forest"
              }`}
            >
              Plan Your Trip
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md focus:outline-none transition-colors duration-300 ${
              isScrolled ? "text-forest hover:bg-sand-dark" : "text-white hover:bg-white/10"
            }`}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-5">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="font-serif text-3xl text-sand hover:text-terracotta transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6 border-t border-sand/10 pt-8"
            >
              <p className="text-xs text-sand/60 uppercase tracking-widest font-sans">
                Ready to explore?
              </p>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full text-center py-4 bg-terracotta hover:bg-terracotta-hover text-sand text-sm font-semibold uppercase tracking-widest transition-colors duration-300"
              >
                Plan Your Journey
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
