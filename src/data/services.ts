import {
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  Clock3,
  Gem,
  Globe2,
  Landmark,
  LineChart,
  PieChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { ProcessStep, Service } from "@/types";

export const tradingServices: Service[] = [
  {
    title: "Equity or Stocks",
    description:
      "Buy and follow shares of publicly listed companies with a clearer view of the market.",
    icon: LineChart,
    href: "#service-equity",
    category: "01",
  },
  {
    title: "Futures & Options",
    description:
      "Understand derivative contracts and the role they can play in a broader strategy.",
    icon: TrendingUp,
    href: "#service-derivatives",
    category: "02",
  },
  {
    title: "US Stocks",
    description:
      "Explore companies listed on United States exchanges, subject to local rules.",
    icon: Globe2,
    href: "#service-us-stocks",
    category: "03",
  },
  {
    title: "Alternative Funds",
    description:
      "Learn how pooled vehicles may invest beyond traditional stocks and bonds.",
    icon: BriefcaseBusiness,
    href: "#service-funds",
    category: "04",
  },
  {
    title: "Strategy Portfolios",
    description:
      "Discover model portfolios built around a defined, rules-based approach.",
    icon: PieChart,
    href: "#service-strategies",
    category: "05",
  },
  {
    title: "Mutual Funds",
    description:
      "Professionally managed funds investing across a range of asset classes.",
    icon: Landmark,
    href: "#service-mutual-funds",
    category: "06",
  },
  {
    title: "Commodities",
    description:
      "Explore exposure to gold, silver, energy, and agricultural products.",
    icon: Gem,
    href: "#service-commodities",
    category: "07",
  },
  {
    title: "Portfolio Management",
    description:
      "Understand discretionary management for a dedicated investment portfolio.",
    icon: BarChart3,
    href: "#service-pms",
    category: "08",
  },
  {
    title: "Public Offerings",
    description:
      "Learn how initial public offerings can introduce companies to public markets.",
    icon: Sparkles,
    href: "#service-ipo",
    category: "09",
  },
  {
    title: "Advisory Portfolios",
    description:
      "Research-led model portfolios curated around defined selection rules.",
    icon: ShieldCheck,
    href: "#service-advisory",
    category: "10",
  },
  {
    title: "Fixed Deposits",
    description: "Term deposits with a fixed rate for a fixed period of time.",
    icon: Clock3,
    href: "#service-deposits",
    category: "11",
  },
  {
    title: "Bonds",
    description:
      "Fixed-income instruments designed to pay interest and return principal at maturity.",
    icon: Banknote,
    href: "#service-bonds",
    category: "12",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Explore",
    text: "Discover the financial services and platforms available to you.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Review how investments, loans, and exchanges work in plain language.",
  },
  {
    number: "03",
    title: "Evaluate",
    text: "Consider eligibility, costs, risks, and suitability for your situation.",
  },
  {
    number: "04",
    title: "Connect",
    text: "Speak with our team when you are ready to discuss next steps.",
  },
];
