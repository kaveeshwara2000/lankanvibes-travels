import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  travelDate: string;
  travelersCount: string;
  experienceType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  travelersCount?: string;
  experienceType?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    travelDate: "",
    travelersCount: "1",
    experienceType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Please enter your full name";
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    
    const count = parseInt(formData.travelersCount);
    if (!formData.travelersCount || isNaN(count) || count < 1) {
      tempErrors.travelersCount = "Must have at least 1 traveler";
    }
    
    if (!formData.experienceType) {
      tempErrors.experienceType = "Please select an experience style";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        travelDate: "",
        travelersCount: "1",
        experienceType: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-offwhite border-b border-sand-dark"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Contact Details & Info Card (Left - 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-terracotta mb-4 block">
                Bespoke Planning
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight font-normal mb-8">
                Let’s Shape Your <span className="italic">Journey.</span>
              </h2>
              <p className="font-sans text-xs md:text-sm text-charcoal-light leading-relaxed mb-10">
                Whether you know exactly where you want to go or are looking for expert advice, our travel curators are here to plan your perfect Sri Lankan getaway.
              </p>

              {/* Informative Items */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sand text-terracotta border border-sand-dark">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-forest">Email Us</h4>
                    <a href="mailto:curator@lankanvibes.com" className="font-sans text-xs md:text-sm text-charcoal-light hover:text-terracotta transition-colors duration-300">
                      curator@lankanvibes.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sand text-terracotta border border-sand-dark">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-forest">Call Travel Specialist</h4>
                    <a href="tel:+94112345678" className="font-sans text-xs md:text-sm text-charcoal-light hover:text-terracotta transition-colors duration-300">
                      +94 11 234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sand text-terracotta border border-sand-dark">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-forest">Headquarters</h4>
                    <p className="font-sans text-xs md:text-sm text-charcoal-light">
                      72 Galle Face Green, Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="mt-12 p-6 bg-sand border border-sand-dark flex items-center gap-4">
              <Clock className="w-8 h-8 text-terracotta shrink-0" />
              <div>
                <h5 className="font-serif text-sm font-semibold text-forest">Response Guarantee</h5>
                <p className="font-sans text-[11px] text-charcoal-light/80 leading-relaxed">
                  Our Colombo office operates 24/7. You will receive your initial customized draft itinerary within 12 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form Card (Right - 7 columns) */}
          <div className="lg:col-span-7 bg-white border border-sand-dark p-8 md:p-12 shadow-sm relative min-h-[500px] flex items-center justify-center">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="w-full space-y-6" noValidate>
                {/* Form Heading */}
                <h3 className="font-serif text-2xl font-medium text-forest border-b border-sand pb-4 mb-4">
                  Custom Travel Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-sand/30 border text-sm font-sans focus:bg-white focus:outline-none focus:ring-1 transition-all ${
                          errors.fullName ? "border-terracotta focus:ring-terracotta" : "border-sand-dark focus:ring-forest"
                        }`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      {errors.fullName && (
                        <div className="absolute right-3 top-3 text-terracotta" title={errors.fullName}>
                          <AlertCircle size={16} />
                        </div>
                      )}
                    </div>
                    {errors.fullName && (
                      <p id="fullName-error" className="text-[10px] text-terracotta font-sans mt-1.5 flex items-center gap-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-sand/30 border text-sm font-sans focus:bg-white focus:outline-none focus:ring-1 transition-all ${
                          errors.email ? "border-terracotta focus:ring-terracotta" : "border-sand-dark focus:ring-forest"
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <div className="absolute right-3 top-3 text-terracotta" title={errors.email}>
                          <AlertCircle size={16} />
                        </div>
                      )}
                    </div>
                    {errors.email && (
                      <p id="email-error" className="text-[10px] text-terracotta font-sans mt-1.5 flex items-center gap-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Travel Date */}
                  <div>
                    <label htmlFor="travelDate" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-2">
                      Target Travel Date
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-sand/30 border border-sand-dark text-sm font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-forest transition-all"
                    />
                  </div>

                  {/* Number of travelers */}
                  <div>
                    <label htmlFor="travelersCount" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-2">
                      Number of Travelers *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="travelersCount"
                        name="travelersCount"
                        min="1"
                        value={formData.travelersCount}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-sand/30 border text-sm font-sans focus:bg-white focus:outline-none focus:ring-1 transition-all ${
                          errors.travelersCount ? "border-terracotta focus:ring-terracotta" : "border-sand-dark focus:ring-forest"
                        }`}
                        aria-invalid={!!errors.travelersCount}
                        aria-describedby={errors.travelersCount ? "travelersCount-error" : undefined}
                      />
                    </div>
                    {errors.travelersCount && (
                      <p id="travelersCount-error" className="text-[10px] text-terracotta font-sans mt-1.5 flex items-center gap-1">
                        {errors.travelersCount}
                      </p>
                    )}
                  </div>
                </div>

                {/* Experience selector */}
                <div>
                  <label htmlFor="experienceType" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-2">
                    Interested Experience Style *
                  </label>
                  <select
                    id="experienceType"
                    name="experienceType"
                    value={formData.experienceType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-sand/30 border text-sm font-sans focus:bg-white focus:outline-none focus:ring-1 transition-all ${
                      errors.experienceType ? "border-terracotta focus:ring-terracotta" : "border-sand-dark focus:ring-forest"
                    }`}
                    aria-invalid={!!errors.experienceType}
                    aria-describedby={errors.experienceType ? "experienceType-error" : undefined}
                  >
                    <option value="" disabled>Select experience...</option>
                    <option value="Wildlife Safari">Wildlife Safari Experience</option>
                    <option value="Cultural Heritage">Cultural Heritage Journey</option>
                    <option value="Hill Country Escape">Hill Country Highlands Escape</option>
                    <option value="Coastal Escape">Coastal Beach & Sunset Retreat</option>
                    <option value="Bespoke Signature Tour">7-Day Signature Island Tour</option>
                    <option value="Custom Dream Journey">Tailor-Made Custom Experience</option>
                  </select>
                  {errors.experienceType && (
                    <p id="experienceType-error" className="text-[10px] text-terracotta font-sans mt-1.5 flex items-center gap-1">
                      {errors.experienceType}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-2">
                    Tell us about your interests & requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="E.g. accommodation style preference, physical pacing, specific dietary wishes..."
                    className="w-full px-4 py-3 bg-sand/30 border border-sand-dark text-sm font-sans focus:bg-white focus:outline-none focus:ring-1 focus:ring-forest transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-forest hover:bg-terracotta text-sand font-medium uppercase tracking-widest text-xs transition-colors duration-300 focus:outline-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-sand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying Details...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </form>
            ) : (
              // Success Screen with animations
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center flex flex-col items-center py-12 max-w-md"
              >
                <div className="p-4 bg-sand border border-sand-dark text-terracotta rounded-full mb-6">
                  <CheckCircle2 size={48} className="animate-pulse" />
                </div>
                
                <h3 className="font-serif text-3xl text-forest mb-4">
                  Thank You.
                </h3>
                
                <p className="font-sans text-xs md:text-sm text-charcoal-light leading-relaxed mb-6">
                  We have received your request. A travel curator is reviewing your request for <strong className="text-forest">{formData.experienceType || "Sri Lankan Journey"}</strong>.
                </p>

                <div className="bg-sand p-5 border border-sand-dark text-left space-y-2 text-xs font-sans text-charcoal-light w-full mb-6">
                  <p><strong>Traveler Contact:</strong> {formData.fullName}</p>
                  <p><strong>Proposed Date:</strong> {formData.travelDate || "Flexible"}</p>
                  <p><strong>Party Size:</strong> {formData.travelersCount} guest(s)</p>
                </div>

                <p className="font-sans text-[11px] text-charcoal-light/60">
                  A personalized itinerary outline and costing has been queued for delivery to <strong className="text-forest">{formData.email}</strong>.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2.5 border border-sand-dark text-forest hover:bg-forest hover:text-sand hover:border-forest transition-colors text-xs font-semibold uppercase tracking-wider font-sans focus:outline-none"
                >
                  Send another inquiry
                </button>
              </motion.div>
            )}
            
          </div>

        </div>
      </div>
    </section>
  );
}
