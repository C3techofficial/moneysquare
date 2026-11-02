import { Menu, X } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Logo } from "@/components/common/Logo";
import { navigationItems } from "@/data/navigation";
import { useScroll } from "@/hooks/useScroll";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import ThemeToggle from "../common/ThemeToggle";
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScroll();
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Logo />
        <div className="desktop-nav">
          <nav>
            {navigationItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <ThemeToggle />
            <Button href="#platforms">Explore services</Button>
          </nav>
        </div>
        <div className="mobile-nav">
          <MobileMenu
            items={navigationItems}
            open={menuOpen}
            onClose={closeMenu}
          />
        </div>
        <div className="mobile-theme">
  <ThemeToggle />
</div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
