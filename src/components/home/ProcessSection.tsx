import { SectionHeading } from "@/components/common/SectionHeading";
import { processSteps } from "@/data/services";
import { FinanceBackdrop } from "@/components/common/FinanceBackdrop";
export function ProcessSection() {
  return (
    <section id="about" className="section process-section">
      <FinanceBackdrop variant={1} />
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="From curiosity to clarity in four steps"
          text="A simple path: explore what exists, understand how it works, evaluate whether it fits, and connect when you are ready."
          align="center"
        />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-step" key={step.title}>
              <div className="step-top">
                <span>{step.number}</span>
                {index < processSteps.length - 1 && <i />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
