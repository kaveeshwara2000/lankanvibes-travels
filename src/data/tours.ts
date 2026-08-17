export interface Experience {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  highlights: string[];
}

export interface FeaturedTour {
  title: string;
  subtitle: string;
  description: string;
  route: string[];
  duration: string;
  type: string;
  flexibility: string;
  transport: string;
  image: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "wildlife-safari",
    category: "Wildlife & Nature",
    title: "Wildlife Safari",
    description: "Meet Sri Lanka's wild side on unforgettable safari adventures through Yala and Wilpattu.",
    image: "https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Explore Safari",
    highlights: ["Leopard Tracking", "Elephant Encounters", "National Park Glamping", "Expert Local Trackers"]
  },
  {
    id: "cultural-heritage",
    category: "History & Culture",
    title: "Cultural Heritage",
    description: "Walk through ancient kingdoms, sacred temples, and living traditions dating back over 2,500 years.",
    image: "https://images.unsplash.com/photo-1593377685064-720da51f3634?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Discover Heritage",
    highlights: ["Sigiriya Citadel", "Kandy Tooth Relic Temple", "Polonnaruwa Ruins", "Traditional Dance Rituals"]
  },
  {
    id: "hill-country-escape",
    category: "Mountains & Mist",
    title: "Hill Country Escape",
    description: "Slow down among emerald tea plantations, misty mountains, and charming historic hill towns.",
    image: "https://images.unsplash.com/photo-1715525873402-a1f939144ce3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Escape to the Hills",
    highlights: ["Scenic Train Ride", "Tea Estate Bungalows", "Nine Arch Bridge Walk", "Ella Rock Hike"]
  },
  {
    id: "coastal-escape",
    category: "Beaches & Ocean",
    title: "Coastal Escape",
    description: "Discover golden beaches, hidden coves, surf breaks, and unforgettable Indian Ocean sunsets.",
    image: "https://images.unsplash.com/photo-1748491829292-859b8ba52481?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Discover Coastlines",
    highlights: ["Whale Watching", "Stilt Fishing Heritage", "Dutch Galle Fort", "Surfing in Weligama"]
  }
];

export const featuredTour: FeaturedTour = {
  title: "Island in 7 Days",
  subtitle: "Our Most Celebrated Curated Journey",
  description: "A masterfully designed itinerary capturing the absolute essence of Sri Lanka. From the chaotic charm of Colombo, you'll venture into Kandy's spiritual heartland, ascend the misty heights of Ella, seek out the elusive leopards of Yala, and conclude in the timeless colonial fortified city of Galle.",
  route: ["Colombo", "Kandy", "Ella", "Yala", "Galle"],
  duration: "7 Days / 6 Nights",
  type: "Private Guided Tour",
  flexibility: "100% Flexible Itinerary",
  transport: "Premium Private AC Sedan/SUV",
  image: "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1600&q=80",
  highlights: [
    "Vip chauffeur guide throughout the journey",
    "Handpicked 5-star boutique accommodation",
    "Private safari jeep in Yala National Park",
    "Scenic First-Class Observation Train ride to Ella",
    "Private sunset walking tour of Galle Fort"
  ]
};
