export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  duration: string;
  bestTime: string;
}

export const destinations: Destination[] = [
  {
    id: "ella",
    name: "Ella",
    location: "Central Highlands",
    description: "A misty mountain town nestled among lush tea plantations, home to the iconic Nine Arch Bridge and Ella Rock.",
    image: "https://images.unsplash.com/photo-1598955943740-6e1bfd440144?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    duration: "2-3 Days",
    bestTime: "January - April"
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    location: "Cultural Triangle",
    description: "The ancient fortress city built atop a massive 200-meter column of rock, showcasing brilliant architectural engineering.",
    image: "https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    duration: "1-2 Days",
    bestTime: "January - March"
  },
  {
    id: "galle",
    name: "Galle",
    location: "Southern Coast",
    description: "An atmospheric 16th-century Dutch colonial fort city, filled with historic boutiques, cafes, and ocean views.",
    image: "https://images.unsplash.com/photo-1746931734801-15a463b2b7c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    duration: "2 Days",
    bestTime: "November - April"
  },
  {
    id: "yala",
    name: "Yala",
    location: "Southeastern Coast",
    description: "The premier national park home to one of the highest leopard densities in the world, along with elephants and sloth bears.",
    image: "https://images.unsplash.com/photo-1566650576880-6740b03eaad1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    duration: "2 Days",
    bestTime: "February - June"
  },
  {
    id: "kandy",
    name: "Kandy",
    location: "Hill Capital",
    description: "The sacred city surrounding a tranquil lake, housing the Temple of the Sacred Tooth Relic and rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    duration: "2 Days",
    bestTime: "January - April"
  },
  {
    id: "mirissa",
    name: "Mirissa",
    location: "Southern Coast",
    description: "A crescent-shaped golden beach famous for whale watching, coconut tree hills, and vibrant seaside dining.",
    image: "https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=80",
    duration: "2-3 Days",
    bestTime: "November - April"
  }
];
