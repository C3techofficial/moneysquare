
import {
  ShieldCheck,
  Layers3,
  Gem,
  Users,
  Target,
  Eye,
  TrendingUp,
  Coins,
  ArrowLeftRight,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/common/Button";
import { FinanceBackdrop } from "@/components/common/FinanceBackdrop";

const values = [
  {
    icon: ShieldCheck,
    title: "Client-first approach",
    description: "Your goals and needs come first.",
  },
  {
    icon: Layers3,
    title: "Diverse financial services",
    description: "Investment, loans and exchange services in one place.",
  },
  {
    icon: Gem,
    title: "Transparency",
    description: "Clear information and thoughtful guidance.",
  },
  {
    icon: Users,
    title: "Personal assistance",
    description: "Get help understanding available services.",
  },
];

const services = [
  {
    icon: TrendingUp,
    title: "Investment",
    description: "Explore investment options and opportunities.",
  },
  {
    icon: Coins,
    title: "Loan",
    description: "Understand investment-backed lending options.",
  },
  {
    icon: ArrowLeftRight,
    title: "Exchange Services",
    description: "Explore currency exchange services.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <FinanceBackdrop variant={0} />

      <div className="container about-container">

        {/* About Hero */}
        <div className="about-hero">

          <div className="about-hero-copy">
            <span className="eyebrow">About Money Square</span>

            <h2>
              A clearer approach to your{" "}
              <em>financial journey.</em>
            </h2>

            <p>
              Money Square brings investment opportunities,
              investment-backed lending and exchange services
              together in one place, helping individuals and
              businesses understand their financial options
              with greater clarity.
            </p>

            <div className="about-actions">
              <Button href="#contact">
                Get in touch
                <ArrowRight size={16} />
              </Button>

              <Button href="#platforms" variant="outline">
                Explore services
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-visual-content">
              <div className="about-visual-logo">
                <Gem size={42} />
              </div>

              <span>FINANCIAL CLARITY</span>

              <h3>
                Your financial journey,
                <em> understood better.</em>
              </h3>

              <div className="about-visual-line" />

              <p>Money Square</p>
            </div>
          </div>

        </div>

        {/* Company Values */}
        <div className="about-values">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div className="about-value" key={item.title}>
                <Icon size={29} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission and Vision */}
        <div className="about-purpose">

          <div className="about-purpose-visual">
            <TrendingUp size={75} strokeWidth={1} />
            <span>CLARITY IN EVERY STEP</span>
          </div>

          <div className="about-purpose-content">
            <span className="eyebrow">Our purpose</span>

            <h2>Our mission & vision</h2>

            <div className="about-purpose-grid">

              <div className="about-purpose-item">
                <Target size={29} />

                <div>
                  <h3>Our Mission</h3>
                  <p>
                    To make financial services easier to
                    understand through clear information,
                    transparency and accessible assistance.
                  </p>
                </div>
              </div>

              <div className="about-purpose-item">
                <Eye size={29} />

                <div>
                  <h3>Our Vision</h3>
                  <p>
                    To build a financial services experience
                    where people can explore their options
                    and make informed decisions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="about-services">

          <div className="about-services-heading">
            <span className="eyebrow">What we do</span>
            <h2>Our services</h2>
          </div>

          <div className="about-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div className="about-service" key={service.title}>
                  <Icon size={28} />

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Contact CTA */}
        <div className="about-bottom-cta">
          <div>
            <span className="eyebrow">Let's connect</span>

            <h2>
              Let's explore your financial
              <em> possibilities together.</em>
            </h2>
          </div>

          <Button href="#contact">
            Contact our team
            <ArrowRight size={17} />
          </Button>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
