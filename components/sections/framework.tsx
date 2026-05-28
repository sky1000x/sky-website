"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Fingerprint, Brain, Settings, Compass, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Fingerprint,
    number: "01",
    title: "Identity",
    description:
      "Clarify who you are becoming. Align your environment, language, and daily decisions with the version of yourself that already has what you want.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Mindset",
    description:
      "Rebuild your internal operating system. Replace limiting patterns with clarity, confidence, and calm under pressure.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Systems",
    description:
      "Design the daily structures â habits, routines, and decision frameworks â that make consistent progress automatic, not optional.",
  },
  {
    icon: Compass,
    number: "04",
    title: "Strategy",
    description:
      "Align your money, business model, and growth plan into a coherent direction that compounds instead of scattering.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Execution",
    description:
      "Close the gap between knowing and doing. Build the discipline, accountability, and momentum to move every single day.",
  },
];

export function Framework() {
  return (
    <section aria-labelledby="framework-heading" className="bg-bone">
      <div className="section-padding container-wide">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-body font-medium uppercase tracking-[0.15em] text-clay">
            The framework
          </p>
          <h2
            id="framework-heading"
            className="mb-4 text-3xl font-display font-semibold text-espresso sm:text-4xl lg:text-5xl"
          >
            The 5 Pillars of 1000x Growth
          </h2>
          <p className="text-base leading-relaxed text-earth">
            Every area of your life and business is connected. Growth in one
            pillar accelerates all the others.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
            >
              <Card variant="ivory" className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sandstone/40">
                    <pillar.icon
                      className="h-5 w-5 text-earth"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-xs font-body font-semibold uppercase tracking-widest text-clay">
                    Pillar {pillar.number}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-display font-semibold text-espresso">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-earth">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
