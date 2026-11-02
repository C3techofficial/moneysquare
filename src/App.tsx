import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/home/CallToAction";
import { ContactSection } from "@/components/home/ContactSection";
import { ExchangeSection } from "@/components/home/ExchangeSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LoansSection } from "@/components/home/LoansSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TradingPlatforms } from "@/components/home/TradingPlatforms";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <TradingPlatforms />
        <ProcessSection />
        <LoansSection />
        <ExchangeSection />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
