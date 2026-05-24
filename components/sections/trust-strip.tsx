import { Shield, Layers, Target } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Identity-Led Growth",
    description:
      "Growth starts with who you decide to become, not what you do.",
  },
  {
    icon: Layers,
    title: "Life And Business Systems",
    description:
      "Replace scattered effort with structured systems that compound.",
  },
  {
    icon: Target,
    title: "Execution With Direction",
    description:
      "Clarity without action is a daydream. Action without clarity is chaos.",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Core principles" className="bg-bone">
      <div className="section-padding container-wide">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sandstone/40">
                <pillar.icon
                  className="h-5 w-5 text-earth"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-2 text-lg font-display font-semibold text-espresso">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-earth">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
