"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const audiences = [
  "Entrepreneurs building or scaling a business",
  "Creators who want more structure behind their output",
  "Professionals looking to level up their career and income",
  "Operators who execute well but lack a personal growth system",
  "High performers who feel successful on paper but unfulfilled underneath",
  "People in transition â career shifts, rebuilds, fresh starts",
];

export function Audience() {
  return (
    <section aria-labelledby="audience-heading" className="bg-bone">
      <div className="section-padding container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-body font-medium uppercase tracking-[0.15em] text-clay">
            Who this is for
          </p>
          <h2
            id="audience-heading"
            className="mb-6 max-w-xl text-3xl font-display font-semibold text-espresso sm:text-4xl"
          >
            Built for people who are ready to stop dabbling and start building.
          </h2>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-earth">
            1000x Growth Systems is for people who have the ambition but need the
            architecture. If you are tired of scattered progress and ready for
            structured growth, this is your system.
          </p>
        </motion.div>

        <ul className="grid gap-4 sm:grid-cols-2" role="list">
          {audiences.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-lg bg-ivory p-4"
            >
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sage/20">
                <Check className="h-3 w-3 text-charcoal" aria-hidden="true" />
              </div>
              <span className="text-sm leading-relaxed text-earth">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
