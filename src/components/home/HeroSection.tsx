import { ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";
import { DashboardPreview } from "./DashboardPreview";

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="kicker">
            <span className="kicker-line" />
            Financial clarity, beautifully considered
          </div>
          <h1>
            Your investments.
            <br />
            <em>Your financial</em>
            <br />
            possibilities.
          </h1>
          <p>
            Explore trading platforms, understand investment opportunities, and
            discover financial services designed to help you make more informed
            decisions.
          </p>
          <div className="hero-actions">
            <Button href="#platforms">Explore services</Button>
            <Button href="#contact" variant="outline">
              Contact our team
            </Button>
          </div>
          <div className="hero-trust">
            <ShieldCheck size={16} />
            <span>Education-first. Transparent. No pressure.</span>
          </div>
        </div>
        <DashboardPreview />
      </div>
      <div className="scroll-cue">
        <span>Scroll to explore</span>
        <ChevronDown size={15} />
      </div>
    </section>
  );
}
