import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
    <footer className="bg-forest text-sand pt-16 pb-8 border-t border-forest-light" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding & Philosophy */}
          <div className="flex flex-col gap-6">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group w-fit focus:outline-none"
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
                  fill="#EAE3D8"
                  opacity="0.8"
                />
              </svg>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-sand">
                Lankan<span className="text-terracotta">Vibes</span>
              </span>
            </a>
            
            <p className="font-sans text-xs md:text-sm text-sand/70 leading-relaxed max-w-sm">
              Discover the Soul of Sri Lanka with our premium bespoke itineraries. We design personalized private journeys led by local experts to reveal the island's authentic culture, wildlife, and coastlines.
            </p>

            {/* Social media icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-sand/10 hover:border-terracotta hover:bg-terracotta text-sand/80 hover:text-sand transition-all duration-300"
                aria-label="Instagram Page"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-sand/10 hover:border-terracotta hover:bg-terracotta text-sand/80 hover:text-sand transition-all duration-300"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-sand/10 hover:border-terracotta hover:bg-terracotta text-sand/80 hover:text-sand transition-all duration-300"
                aria-label="Twitter Page"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-base text-sand font-medium uppercase tracking-wider mb-6 border-b border-sand/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Experiences", href: "#experiences" },
                { label: "Destinations", href: "#destinations" },
                { label: "About", href: "#about" },
                { label: "Why Us", href: "#why-choose-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-xs md:text-sm text-sand/75 hover:text-terracotta transition-colors duration-300 focus:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Travel Styles */}
          <div>
            <h4 className="font-serif text-base text-sand font-medium uppercase tracking-wider mb-6 border-b border-sand/10 pb-2">
              Our Journeys
            </h4>
            <ul className="space-y-3">
              {[
                "Wildlife Safari Adventures",
                "Cultural Heritage Tours",
                "Hill Country Escapes",
                "Coastal Sunset Retreats",
                "Bespoke Couples Honeymoons",
                "Private Family Excursions",
              ].map((style) => (
                <li key={style}>
                  <a
                    href="#experiences"
                    onClick={(e) => handleNavClick(e, "#experiences")}
                    className="font-sans text-xs md:text-sm text-sand/75 hover:text-terracotta transition-colors duration-300 focus:outline-none"
                  >
                    {style}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-serif text-base text-sand font-medium uppercase tracking-wider mb-6 border-b border-sand/10 pb-2">
              Colombo Office
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-terracotta shrink-0 mt-0.5" />
                <span className="font-sans text-xs md:text-sm text-sand/75">
                  72 Galle Face Green, Colombo 03, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-terracotta shrink-0" />
                <a
                  href="tel:+94112345678"
                  className="font-sans text-xs md:text-sm text-sand/75 hover:text-terracotta transition-colors duration-300 focus:outline-none"
                >
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-terracotta shrink-0" />
                <a
                  href="mailto:curator@lankanvibes.com"
                  className="font-sans text-xs md:text-sm text-sand/75 hover:text-terracotta transition-colors duration-300 focus:outline-none"
                >
                  curator@lankanvibes.com
                </a>
              </li>
            </ul>
            
            {/* Accreditation badge */}
            <div className="mt-6 pt-4 border-t border-sand/10 flex items-center gap-2 text-sand/50 text-[10px] uppercase tracking-widest font-sans font-bold">
              <ShieldCheck size={14} className="text-terracotta" />
              <span>SLTDA Approved Agent (Lic No: #10948)</span>
            </div>
          </div>

        </div>

        {/* Lower Row */}
        <div className="border-t border-sand/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-sand/55">
            &copy; 2026 LankanVibes Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-sans text-sand/55">
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-terracotta transition-colors duration-300">Privacy Policy</a>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-terracotta transition-colors duration-300">Terms of Service</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-terracotta transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
