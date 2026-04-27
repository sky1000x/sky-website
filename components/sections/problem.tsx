import { AlertTriangle, TrendingDown, Clock, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: TrendingDown,
    title: "Stuck in Incremental Progress",
    description:
      "You're working hard but not seeing the quantum leap you know is possible — whether that's in your life, your income, or your business.",
  },
  {
    icon: Compass,
    title: "No Clear System",
    description:
      "You have ambition but the strategy is scattered. Generic advice, conflicting frameworks, and no cohesive system for your specific situation.",
  },
  {
    icon: Clock,
    title: "Time Without Traction",
    description:
      "You're putting in the hours but not building the compounding systems that actually create leverage — in business or in life.",
  },
  {
    icon: AlertTriangle,
    title: "Wrong Priorities",
    description:
      "You're optimizing the wrong things. Without the right map, it's easy to be busy, exhausted, and still not moving toward your actual goals.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">
            Sound Familiar?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Growth Feels Impossible
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ambitious people, founders, and operators hit the same ceiling — not
            because they lack capability, but because they&apos;re missing the right system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="bg-zinc-900 border-zinc-800 hover:border-brand-500/40 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
