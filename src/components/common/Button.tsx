import { ArrowRight } from "lucide-react";
import type { ButtonProps } from "@/types";

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const className = `button ${variant}`;
  if (href)
    return (
      <a className={className} href={href}>
        {children}
        <ArrowRight size={16} />
      </a>
    );
  return (
    <button className={className} onClick={onClick}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
}
