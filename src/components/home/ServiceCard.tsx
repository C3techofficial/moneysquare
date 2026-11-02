import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <a className="service-card" href={service.href}>
      <div className="card-number">{service.category}</div>
      <div className="service-icon">
        <Icon size={21} strokeWidth={1.5} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="learn">
        Learn more <ArrowUpRight size={14} />
      </span>
    </a>
  );
}
