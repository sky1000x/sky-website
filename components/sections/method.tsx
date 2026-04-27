const steps = [
  {
    number: "01",
    title: "Deep Dive Audit",
    description:
      "A full assessment of where you are across mindset, money, business, and life systems. No stones unturned — clarity on the gaps and the opportunities.",
  },
  {
    number: "02",
    title: "Growth Blueprint",
    description:
      "A personalized 90-day roadmap with clear milestones and priorities — built around your specific goals, not a generic template.",
  },
  {
    number: "03",
    title: "Rapid Execution",
    description:
      "The plan becomes reality. Fast iteration, direct accountability, and consistent action on the systems that actually move the needle.",
  },
  {
    number: "04",
    title: "Scale & Compound",
    description:
      "Double down on what works. Build systems that create compounding returns — in income, performance, energy, and impact.",
  },
];

export function Method() {
  return (
    <section id="method" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            The 1000x Method
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A proven four-step process that has taken ambitious people, founders, and
            operators from plateau to quantum leap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="relative">
              <div className="text-8xl font-black text-zinc-800 absolute -top-4 -left-2 select-none">
                {number}
              </div>
              <div className="relative pt-12">
                <h3 className="font-bold text-white text-xl mb-3">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
