import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Growth Starter",
    price: "$3,500",
    period: "/month",
    description: "Perfect for early-stage businesses ready to accelerate.",
    features: [
      "Growth strategy & roadmap",
      "Paid media management (1 channel)",
      "Monthly performance reports",
      "Bi-weekly strategy calls",
      "Landing page optimization",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Scale Pro",
    price: "$7,500",
    period: "/month",
    description: "For businesses serious about achieving 10x growth.",
    features: [
      "Everything in Growth Starter",
      "Multi-channel paid media (up to 3)",
      "Full funnel optimization",
      "Weekly strategy calls",
      "A/B testing & CRO",
      "Email & retention marketing",
      "Dedicated growth manager",
    ],
    highlight: true,
    cta: "Most Popular",
  },
  {
    name: "1000x Elite",
    price: "Custom",
    period: "",
    description: "Full-service growth partnership for high-growth companies.",
    features: [
      "Everything in Scale Pro",
      "Unlimited channels",
      "Executive growth advisory",
      "Brand strategy & positioning",
      "PR & thought leadership",
      "Priority support 24/7",
      "Equity-aligned performance bonuses",
    ],
    highlight: false,
    cta: "Let's Talk",
  },
];

export function Offer() {
  return (
    <section id="offer" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-5">
            Invest in Your Growth
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our packages are designed to deliver 10-100x returns. This isn&apos;t a cost — it&apos;s your best investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map(({ name, price, period, description, features, highlight, cta }) => (
            <div
              key={name}
              className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                highlight
                  ? "border-sky-500 bg-sky-950 text-white shadow-2xl shadow-sky-500/20 scale-105"
                  : "border-slate-200 bg-white"
              }`}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-bold text-xl mb-2 ${highlight ? "text-white" : "text-slate-900"}`}>
                  {name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-4xl font-black ${highlight ? "text-sky-300" : "text-slate-900"}`}>
                    {price}
                  </span>
                  <span className={`text-sm ${highlight ? "text-sky-300" : "text-slate-500"}`}>{period}</span>
                </div>
                <p className={`text-sm ${highlight ? "text-sky-200" : "text-slate-600"}`}>{description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${highlight ? "text-sky-400" : "text-sky-600"}`} />
                    <span className={`text-sm ${highlight ? "text-sky-100" : "text-slate-700"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  highlight
                    ? "bg-sky-500 hover:bg-sky-400 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                <Link href="#audit">{cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
