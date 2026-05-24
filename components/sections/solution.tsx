"use client";

import { motion } from "framer-motion";

export function Solution() {
  return (
    <section aria-labelledby="solution-heading" className="bg-charcoal">
      <div className="section-padding container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-body font-medium uppercase tracking-[0.15em] text-sage">
            The solution
          </p>
          <h2
            id="solution-heading"
            className="mx-auto mb-6 max-w-3xl text-3xl font-display font-semibold text-ivory sm:text-4xl lg:text-5xl"
          >
            A framework that connects mindset, habits, money, business strategy,
            and execution into one system.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-sandstone sm:text-lg">
            1000x Growth Systems is not another course, community, or coaching
            call. It is a structured optimization experience designed to rebuild
            the way you think, decide, operate, and grow â from the inside out.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
