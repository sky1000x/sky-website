"use client";

import { motion } from "framer-motion";

const symptoms = [
  "Consuming more content than you apply",
  "Setting goals but losing momentum within weeks",
  "Earning more but feeling no closer to freedom",
  "Knowing what to do but struggling to execute consistently",
  "Building a business without building yourself first",
];

export function Problem() {
  return (
    <section aria-labelledby="problem-heading" className="bg-ivory">
      <div className="section-padding container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-body font-medium uppercase tracking-[0.15em] text-clay">
            The real problem
          </p>
          <h2
            id="problem-heading"
            className="mb-6 max-w-2xl text-3xl font-display font-semibold text-espresso sm:text-4xl lg:text-5xl"
          >
            Most people do not need more motivation. They need a better system.
          </h2>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-earth">
            You are not lazy. You are not behind. You are operating without the
            structure that turns effort into outcomes. Without a system, even the
            best intentions collapse under the weight of daily life.
          </p>
        </motion.div>

        <ul className="space-y-4" role="list">
          {symptoms.map((s, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 text-base text-earth"
            >
              <span
                className="mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full bg-clay"
                aria-hidden="true"
              />
              {s}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
