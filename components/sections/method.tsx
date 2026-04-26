const steps = [
  {
    number: "01",
    title: "Deep Dive Audit",
    description:
      "We analyze your business, market, competitors, and current performance. No stones unturned.",
  },
  {
    number: "02",
    title: "Growth Blueprint",
    description:
      "We craft a customized 90-day growth roadmap with clear milestones and KPIs.",
  },
  {
    number: "03",
    title: "Rapid Execution",
    description:
      "Our team executes the plan with speed and precision. We move fast and iterate faster.",
  },
  {
    number: "04",
    title: "Scale & Compound",
    description:
      "We double down on what works and build systems that compound your growth over time.",
  },
];

export function Method() {
  return (
    <section id="method" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-5">
            The 1000x Method
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A proven four-step process that has taken companies from plateau to explosive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="relative">
              <div className="text-8xl font-black text-sky-100 absolute -top-4 -left-2 select-none">
                {number}
              </div>
              <div className="relative pt-12">
                <h3 className="font-bold text-slate-900 text-xl mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
