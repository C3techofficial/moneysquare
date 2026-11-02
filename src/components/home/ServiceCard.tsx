
import { useState } from "react";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types";
import { useEffect } from "react";
export function ServiceCard({ service }: { service: Service }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  if (!isOpen) return;

  document.body.style.overflow = "hidden";

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  window.addEventListener("keydown", handleEscape);

  return () => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", handleEscape);
  };
}, [isOpen]);
  const Icon = service.icon;

  return (
    <>
      <button
        type="button"
        className="service-card"
        onClick={() => setIsOpen(true)}
      >
        <div className="card-number">{service.category}</div>

        <div className="service-icon">
          <Icon size={21} strokeWidth={1.5} />
        </div>

        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <span className="learn">
          Learn more <ArrowUpRight size={14} />
        </span>
      </button>

      {isOpen && (
        <div
          className="service-modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="service-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            <div className="service-modal-icon">
              <Icon size={28} strokeWidth={1.5} />
            </div>

            <span className="eyebrow">MONEY SQUARE SERVICES</span>

            <h2 id="service-modal-title">{service.title}</h2>

            <p className="service-modal-description">
              {service.description}
            </p>

            <div className="service-modal-details">
              <h3>How we can help</h3>

              <div className="service-detail-point">
                <CheckCircle2 size={17} />
                <span>
                  Understand the available options and how this service works.
                </span>
              </div>

              <div className="service-detail-point">
                <CheckCircle2 size={17} />
                <span>
                  Get information about the process, requirements and terms.
                </span>
              </div>

              <div className="service-detail-point">
                <CheckCircle2 size={17} />
                <span>
                  Discuss your requirements with the Money Square team.
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="service-modal-enquire"
              onClick={() => setIsOpen(false)}
            >
              Enquire Now <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
