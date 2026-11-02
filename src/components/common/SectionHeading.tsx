import type { SectionAlign } from "@/types";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  align?: SectionAlign;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
