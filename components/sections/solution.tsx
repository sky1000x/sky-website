import { CheckCircle2, Zap, Target, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Precision Targeting",
    description:
      "Whether it's your ideal clients, the right market, or the habits that move the needle — we get precise about what actually matters for your specific goals.",
  },
  {
    icon: Zap,
    title: "Growth Systems",
    description:
      "Scalable, repeatable systems that compound over time — across business, money, mindset, and life design. Not one-off tactics.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Every decision is backed by evidence. We track what moves the needle and optimize relentlessly — in business and in life.",
  },
  {
    icon: CheckCircle2,
    title: "Full-Stack Execution",
    description:
      "From strategy to implementation — we map the full picture so ambitious people, founders, and operators can focus on becoming their 1000x version.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
            A Growth System Built Around You
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Whether you&apos;re an ambitious person building better systems for your life,
            a founder scaling a business, or an operator optimizing both — the Skyler1000x
            framework meets you where you are and accelerates what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-brand-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
