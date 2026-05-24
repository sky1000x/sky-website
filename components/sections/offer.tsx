"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  ClipboardCheck,
  RefreshCw,
  LayoutGrid,
  DollarSign,
  TrendingUp,
  Route,
} from "lucide-react";

const modules = [
  {
    icon: ClipboardCheck,
    title: "Personal Growth Audit",
    description:
      "A comprehensive assessment of where you stand across all five pillars â identity, mindset, systems, strategy, and execution.",
  },
  {
    icon: RefreshCw,
    title: "Mindset & Identity Reset",
    description:
      "Dismantle the internal patterns holding you back and install a new operating system built for growth.",
  },
  {
    icon: LayoutGrid,
    title: "Life Systems Restructure",
    description:
      "Redesign your daily habits, routines, and environment so consistent progress becomes your default.",
  },
  {
    icon: DollarSign,
    title: "Money & Decision Work",
    description:
      "Align your financial strategy, spending, and earning with the life you are building â not the life you are leaving.",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy Support",
    description:
      "Clarify your business model, revenue targets, and growth levers so every move compounds.",
  },
  {
    icon: Route,
    title: "Execution Roadmap",
    description:
      "A concrete 90-day plan that breaks your vision into weekly milestones and daily actions.",
  },
];

export function Offer() {
  return (
    <section aria-labelledby="offer-heading" className="bg-ivory">
      <div className="section-padding container-wide">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-body font-medium uppercase tracking-[0.15em] text-clay">
            The offer
          </p>
          <h2
            id="offer-heading"
            className="mb-4 text-3xl font-display font-semibold text-espresso sm:text-4xl lg:text-5xl"
          >
            The 1000x Growth Systems experience
          </h2>
          <p className="text-base leading-relaxed text-earth">
            This is not a course you watch. It is a structured optimization
            experience designed to rebuild every layer of how you operate and
            grow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card variant="bone" className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sandstone/30">
                  <mod.icon
                    className="h-5 w-5 text-earth"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 text-lg font-display font-semibold text-espresso">
                  {mod.title}
                </h3>
                <p className="text-sm leading-relaxed text-earth">
                  {mod.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
