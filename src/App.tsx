import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Programs from "./components/Programs";
import Facilities from "./components/Facilities";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import BMICalculator from "./components/BMICalculator";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div id="fitnesstaan-app" className="min-h-screen bg-brand-black text-brand-text antialiased selection:bg-brand-red selection:text-brand-text">
      {/* Premium Startup Preloading sequence */}
      <LoadingScreen />

      {/* Persistent Navigation Header */}
      <Navbar />

      {/* Main Sections Body Layout */}
      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Programs />
        <Facilities />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Pricing />
        <BMICalculator />
        <FAQ />
        <Contact />
      </main>

      {/* Complete Branded Footer */}
      <Footer />

      {/* Call, WhatsApp, Scroll triggers */}
      <FloatingActions />
    </div>
  );
}
