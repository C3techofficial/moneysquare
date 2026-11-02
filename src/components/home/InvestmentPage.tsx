
import {
  Target,
  PieChart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/common/Button";
import { FinanceBackdrop } from "@/components/common/FinanceBackdrop";

const features = [
  {
    icon: Target,
    title: "Investment Planning",
    description:
      "Understand your financial goals and explore suitable investment approaches.",
  },
  {
    icon: PieChart,
    title: "Diversification",
    description:
      "Explore different asset classes and understand portfolio diversification.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Awareness",
    description:
      "Understand market risks and make informed financial decisions.",
  },
];

export function InvestmentPage() {
  return (
    <section id="investment" className="section investment-page">
      <FinanceBackdrop variant={0} />

      <div className="container">
        <div className="section-topline">
          <div>
            <span className="eyebrow">Investment opportunities</span>
            <h2>
              Make informed choices.
              <br />
              <em>Plan your financial future.</em>
            </h2>
          </div>

          <p>
            Explore investment possibilities with greater clarity,
            understand your options, and make decisions aligned
            with your financial goals.
          </p>
        </div>

        <div className="investment-features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="investment-feature-card"
                key={feature.title}
              >
                <div className="investment-feature-icon">
                  <Icon size={23} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="investment-section-cta">
          <Button href="#contact">
            Enquire about investments
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default InvestmentPage;
