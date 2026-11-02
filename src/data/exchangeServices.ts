import { ArrowDownRight, Bitcoin, CircleDollarSign } from "lucide-react";
import type { ExchangeService } from "@/types";

export const exchangeServices: ExchangeService[] = [
  {
    title: "Currency exchange",
    text: "Compare conversion rates, spreads, and transaction fees before moving between currencies.",
    icon: CircleDollarSign,
    href: "#currency",
  },
  {
    title: "Digital asset exchange",
    text: "Understand custody, volatility, and the regulatory considerations around digital assets.",
    icon: Bitcoin,
    href: "#digital-assets",
  },
  {
    title: "Investment transfers",
    text: "Explore moving assets between accounts, institutions, or forms, subject to eligibility.",
    icon: ArrowDownRight,
    href: "#asset-transfers",
  },
];
