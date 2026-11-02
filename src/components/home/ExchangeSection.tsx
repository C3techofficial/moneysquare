import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { exchangeServices } from "@/data/exchangeServices";
import { FinanceBackdrop } from "@/components/common/FinanceBackdrop";
export function ExchangeSection() {
  return (
    <section id="exchange" className="section exchange-section">
      <FinanceBackdrop variant={1} />
      <div className="container">
        <SectionHeading
          eyebrow="Exchange services"
          title="Understand your exchange options"
          text="An exchange service facilitates the conversion or transfer of one asset or currency into another, depending on the service offered."
        />
        <div className="exchange-grid">
          {exchangeServices.map((service) => {
            const Icon = service.icon;
            return (
              <a
                className="exchange-card"
                href={service.href}
                key={service.title}
              >
                <div className="exchange-icon">
                  <Icon size={23} strokeWidth={1.5} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="learn">
                  Read more <ArrowUpRight size={14} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
