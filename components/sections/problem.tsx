import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: TrendingDown,
    title: "Stagnant Growth",
    description:
      "Your revenue has plateaued despite your best efforts. The market is moving faster than your current strategy.",
  },
  {
    icon: DollarSign,
    title: "Wasted Ad Spend",
    description:
      "You're pouring money into ads that don't convert. Every campaign feels like a gamble with no clear ROI.",
  },
  {
    icon: Clock,
    title: "No Time to Scale",
    description:
      "You're busy running the business. Building a proper growth system takes time you simply don't have.",
  },
  {
    icon: AlertTriangle,
    title: "Wrong Strategy",
    description:
      "Generic marketing advice doesn't work for your specific business. You need a tailored approach that fits your market.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
            Sound Familiar?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-5">
            Growth Feels Impossible
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Most businesses struggle with the same problems. You know you need to grow —
            you just don&apos;t know how to break through the ceiling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="border-red-100 hover:border-red-200 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                    <p className="text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
