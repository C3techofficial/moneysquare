import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label>
        Your name
        <input required placeholder="Enter your name" />
      </label>
      <label>
        Email address
        <input required type="email" placeholder="you@example.com" />
      </label>
      <label>
        What can we help with?
        <textarea
          required
          placeholder="Tell us what you'd like to explore"
          rows={4}
        />
      </label>
      <button className="button primary" type="submit">
        {submitted ? "Message noted" : "Send enquiry"} <ArrowRight size={16} />
      </button>
      {submitted && (
        <p className="form-success">
          <Check size={15} /> Demonstration complete — connect a verified inbox
          to receive enquiries.
        </p>
      )}
    </form>
  );
}
