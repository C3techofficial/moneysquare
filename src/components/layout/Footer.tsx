import { Logo } from "@/components/common/Logo";

export function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            An education-first destination for understanding financial
            possibilities with more clarity and less noise.
          </p>
        </div>
        <div>
  <span className="footer-label">Explore</span>
  <a href="/#platforms">Trading platforms</a>
  <a href="/investment">Investment</a>
  <a href="/loan">Loan</a>
  <a href="/#exchange">Exchange services</a>
</div>
        <div>
          <span className="footer-label">Company</span>
          <a href="#about">How it works</a>
          <a href="#contact">Contact us</a>
          <a href="#home">Privacy & terms</a>
        </div>
        <div>
          <span className="footer-label">Important</span>
          <p className="footer-small">
            General financial education only. Nothing here is investment, legal,
            tax, or lending advice.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Money Square. All rights reserved.</span>
        <p className="footer-small">
          Designed & Developed by C3Tech Contact: c3tech.official@gmail.com
        </p>
        <span>Illustrative sample data — not live market prices.</span>
      </div>
    </footer>
  );
}
