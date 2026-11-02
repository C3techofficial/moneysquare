import {
  DollarSign,
  TrendingUp,
  Coins,
  IndianRupee,
  PiggyBank,
  BarChart3,
  Landmark,
  Wallet,
  Percent,
  LineChart,
} from "lucide-react";

const layouts = [
  [
    { Icon: DollarSign, top: "6%", left: "3%", size: 70, d: 0, r: -12 },
    { Icon: TrendingUp, top: "14%", left: "90%", size: 84, d: 1.5, r: 8 },
    { Icon: Coins, top: "58%", left: "1%", size: 64, d: 3, r: 10 },
    { Icon: BarChart3, top: "72%", left: "92%", size: 72, d: 2, r: -6 },
    { Icon: IndianRupee, top: "88%", left: "46%", size: 56, d: 4, r: 14 },
  ],
  [
    { Icon: PiggyBank, top: "10%", left: "92%", size: 76, d: 0, r: 8 },
    { Icon: Landmark, top: "8%", left: "2%", size: 70, d: 2, r: -8 },
    { Icon: LineChart, top: "62%", left: "3%", size: 80, d: 1, r: 6 },
    { Icon: Percent, top: "66%", left: "93%", size: 60, d: 3, r: -14 },
    { Icon: Wallet, top: "90%", left: "50%", size: 58, d: 4, r: 10 },
  ],
];

export function FinanceBackdrop({ variant = 0 }: { variant?: 0 | 1 }) {
  return (
    <div className="finance-backdrop" aria-hidden="true">
      {layouts[variant].map(({ Icon, top, left, size, d, r }, i) => (
        <span
          key={i}
          className="fb-icon"
          style={
            {
              top,
              left,
              "--d": `${d}s`,
              "--r": `${r}deg`,
            } as React.CSSProperties
          }
        >
          <Icon size={size} strokeWidth={1.2} />
        </span>
      ))}
    </div>
  );
}