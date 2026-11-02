import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { tradingServices } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { FinanceBackdrop } from "@/components/common/FinanceBackdrop";
export function TradingPlatforms() {
  return (
    <section id="platforms" className="section platforms">
      <FinanceBackdrop variant={0} />
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            eyebrow="Trading platforms"
            title="Explore the world of trading"
            text="Understand the markets, products, and platforms that can help you explore different financial opportunities."
          />
          <span className="section-index">
            01 <i /> 14
          </span>
        </div>
        <div className="services-grid">
          {tradingServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <p className="disclaimer">
          <ShieldCheck size={15} /> General financial education — not investment
          advice. Money Square does not operate or endorse third-party trading
          platforms.
        </p>
      </div>
    </section>
  );
}
