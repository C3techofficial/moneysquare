import { ContactForm } from "@/components/forms/ContactForm";
import { FinanceBackdrop } from "@/components/common/FinanceBackdrop";
export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <FinanceBackdrop variant={0} />
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Contact us</span>
          <h2>Let&apos;s make the complex feel clear.</h2>
          <p>
            Tell us what you&apos;d like to understand better. This
            demonstration form collects no information and does not send a
            message.
          </p>
          <div className="contact-meta">
            <span>
              <span className="meta-label">Response window</span>Within 2
              business days
            </span>
            <span>
              <span className="meta-label">Your privacy</span>No data is stored
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
