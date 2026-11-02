import { Sparkles } from "lucide-react";
import { Button } from "@/components/common/Button";

export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-ring ring-one" />
      <div className="cta-ring ring-two" />
      <div className="container cta-inner">
        <Sparkles size={22} className="cta-spark" />
        <span className="eyebrow">Start with a conversation</span>
        <h2>
          Ready to explore
          <br />
          <em>your options?</em>
        </h2>
        <p>
          Discover financial services, understand your choices, and connect with
          our team when you&apos;re ready.
        </p>
        <div className="hero-actions">
          <Button href="#contact">Contact our team</Button>
          <Button href="#platforms" variant="outline">
            Explore services
          </Button>
        </div>
      </div>
    </section>
  );
}
