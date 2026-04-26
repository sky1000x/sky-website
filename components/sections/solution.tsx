import { CheckCircle2, Zap, Target, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "We identify your ideal customers with laser precision. No more wasted spend on the wrong audience.",
  },
  {
    icon: Zap,
    title: "Growth Systems",
    description:
      "We build scalable, repeatable systems that compound over time — not one-off campaigns.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Every decision is backed by data. We track what matters and optimize relentlessly.",
  },
  {
    icon: CheckCircle2,
    title: "Full-Stack Execution",
    description:
      "From strategy to creative to media buying — we handle everything so you can focus on the business.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-sky-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            A Growth Partner, Not Just an Agency
          </h2>
          <p className="text-xl text-sky-200 max-w-2xl mx-auto">
            We embed into your business as a fractional growth team. We think like founders,
            move like operators, and deliver like world-class marketers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                <Icon className="h-7 w-7 text-sky-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">{title}</h3>
                <p className="text-sky-200 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
