export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  review: string;
  date: string;
  tripType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah",
    country: "United States",
    rating: 5,
    review: "Our journey with LankanVibes was absolutely flawless. The attention to detail in our private itinerary, the incredible boutique hotels, and our chauffeur guide who felt like family by the end, made this a trip of a lifetime. The Nine Arch Bridge train ride and Yala safari were breathtaking.",
    date: "March 2026",
    tripType: "Bespoke Couple's Honeymoon"
  },
  {
    id: "2",
    name: "Alistair",
    country: "United Kingdom",
    rating: 5,
    review: " LankanVibes Travels truly understands premium, authentic travel. We did the Cultural Triangle and Hill Country. The local expert insights, avoiding tourist traps, and the sheer comfort of the private transport made traveling with children an absolute breeze. Highly recommend their tailored itineraries.",
    date: "July 2026",
    tripType: "Custom Family Heritage Journey"
  },
  {
    id: "3",
    name: "Charlotte",
    country: "Australia",
    rating: 5,
    review: "I wanted a balance of wellness, surf, and high-end comfort. LankanVibes curated a coastal and hillside retreat that exceeded all my expectations. Sunrise hikes in Ella, surfing in Weligama, and dining at Galle Fort. The local guides were fantastic, providing access to hidden local gems.",
    date: "May 2026",
    tripType: "Solo Luxury & Wellness Retreat"
  }
];
