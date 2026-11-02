import { Button } from "@/components/common/Button";
import type { NavigationItem } from "@/types";

interface MobileMenuProps {
  items: NavigationItem[];
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ items, open, onClose }: MobileMenuProps) {
  return (
    <nav className={open ? "open" : ""}>
      {items.map((item) => (
        <a key={item.label} href={item.href} onClick={onClose}>
          {item.label}
        </a>
      ))}
      <Button href="#contact">Explore services</Button>
    </nav>
  );
}
