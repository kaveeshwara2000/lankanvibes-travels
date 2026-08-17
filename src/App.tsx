import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedTour from "./components/FeaturedTour";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-offwhite text-charcoal font-sans antialiased selection:bg-terracotta selection:text-sand">
      {/* Sticky Top Header */}
      <Navbar />
      
      {/* Main Page Layout Sections */}
      <main>
        <Hero />
        <Stats />
        <About />
        <Experiences />
        <Destinations />
        <WhyChooseUs />
        <FeaturedTour />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      
      {/* Brand Footer */}
      <Footer />
    </div>
  );
}

export default App;
