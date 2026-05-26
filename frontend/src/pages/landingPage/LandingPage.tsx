import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import AboutSection from "./sections/AboutSection";
import BeersSection from "./sections/BeersSection";
import BreweryTourSection from "./sections/BreweryTourSection";
import ContactSection from "./sections/ContactSection";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Admin Button */}
      {/* <a
        href="/admin"
        className="fixed bottom-4 right-4 z-50 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors text-sm"
      >
        Área Admin
      </a> */}

      {/* Header */}
      <Header></Header>

      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* Stats Section */}
      <StatsSection></StatsSection>

      {/* About Section */}
      <AboutSection></AboutSection>

      {/* Beers Section */}
      <BeersSection></BeersSection>

      {/* Brewery Tour Section */}
      <BreweryTourSection></BreweryTourSection>

      {/* Contact Section */}
      <ContactSection></ContactSection>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
