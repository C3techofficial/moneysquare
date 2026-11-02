import { useMemo, useState } from "react";

export function LoanCalculator() {
  const [value, setValue] = useState(2000000);
  const [ltv, setLtv] = useState(50);
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(3);
  const results = useMemo(() => {
    const loan = (value * ltv) / 100;
    const interest = ((loan * rate) / 100) * tenure;
    return { loan, interest, total: loan + interest };
  }, [value, ltv, rate, tenure]);
  const format = (amount: number) =>
    `₹${Math.round(amount).toLocaleString("en-IN")}`;
  return (
    <div className="calculator-card">
      <div className="calc-heading">
        <span className="eyebrow">Educational estimate</span>
        <h3>See what your numbers could look like.</h3>
        <p>
          Adjust the inputs to explore a simple illustration. This is not a loan
          offer or approval.
        </p>
      </div>
      <div className="calc-fields">
        <label>
          Eligible investment value <strong>{format(value)}</strong>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="100000"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
        </label>
        <label>
          Illustrative loan-to-value <strong>{ltv}%</strong>
          <input
            type="range"
            min="20"
            max="70"
            step="5"
            value={ltv}
            onChange={(event) => setLtv(Number(event.target.value))}
          />
        </label>
        <label>
          Annual interest rate <strong>{rate}%</strong>
          <input
            type="range"
            min="6"
            max="18"
            step="0.5"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
        </label>
        <label>
          Loan tenure <strong>{tenure} years</strong>
          <input
            type="range"
            min="1"
            max="7"
            step="1"
            value={tenure}
            onChange={(event) => setTenure(Number(event.target.value))}
          />
        </label>
      </div>
      <div className="calc-results">
        <div>
          <span>Illustrative maximum loan</span>
          <strong>{format(results.loan)}</strong>
        </div>
        <div>
          <span>Estimated interest cost</span>
          <strong>{format(results.interest)}</strong>
        </div>
        <div className="total">
          <span>Estimated total repayment</span>
          <strong>{format(results.total)}</strong>
        </div>
      </div>
      <p className="calc-footnote">
        Loan = eligible value × LTV. Interest uses simple interest and excludes
        fees, compounding, and lender-specific terms.
      </p>
    </div>
  );
}
