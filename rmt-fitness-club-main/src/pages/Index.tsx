import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Machinary  from "@/components/Machinery";
import PricingSection from "@/components/PricingSection";
import GymShowcase from "@/components/GymShowcase";
import FeedbackForm from "@/components/FeedbackForm";
import ScrollToHash from "@/components/ScrollToHash";



const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <ScrollToHash />
    <HeroSection />
    <AboutSection />
    <GymShowcase />
    <ServicesSection />
    <GallerySection />
    <Machinary />
    <PricingSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
