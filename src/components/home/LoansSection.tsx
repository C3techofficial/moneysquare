import { Check } from "lucide-react";
import { Button } from "@/components/common/Button";
import { LoanCalculator } from "./LoanCalculator";
import { FinanceBackdrop } from "@/components/common/FinanceBackdrop";

export function LoansSection() {
  return (
    <section id="loans" className="section loans-section">
      <FinanceBackdrop variant={0} />
      <div className="container loan-grid">
        <div className="loan-copy">
          <span className="eyebrow">Investment-backed loans</span>
          <h2>
            Access liquidity without automatically selling your investments.
          </h2>
          <p>
            Investment-backed lending may allow eligible investors to borrow
            against qualifying financial assets, subject to lender approval,
            collateral requirements, and applicable regulations.
          </p>
          <div className="loan-points">
            <div>
              <Check size={15} />
              <span>
                <b>Keep perspective</b>
                <small>Pledged assets can still rise or fall in value.</small>
              </span>
            </div>
            <div>
              <Check size={15} />
              <span>
                <b>Know the terms</b>
                <small>
                  Interest, fees, and repayment conditions vary by lender.
                </small>
              </span>
            </div>
            <div>
              <Check size={15} />
              <span>
                <b>Make it personal</b>
                <small>
                  Suitability depends on your circumstances and goals.
                </small>
              </span>
            </div>
          </div>
          <Button href="#contact" variant="outline">
            Enquire about loan services
          </Button>
        </div>
        <LoanCalculator />
      </div>
    </section>
  );
}