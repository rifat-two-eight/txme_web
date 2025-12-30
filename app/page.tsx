import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import FAQSection from "./components/sections/FAQSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import HeroSection from "./components/sections/HeroSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import ProvidersSection from "./components/sections/ProvidersSection";
import TrustSection from "./components/sections/TrustSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection/>
      <FeaturesSection/>
      <ProvidersSection/>
      <HowItWorksSection/>
      <TrustSection/>
      <FAQSection/>
      <Footer />
    </main>
  );
}