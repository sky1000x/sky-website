"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-espresso">
      <div className="section-padding container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            id="final-cta-heading"
            className="mb-6 text-3xl font-display font-semibold text-ivory sm:text-4xl lg:text-5xl"
          >
            Your next level needs structure, not chaos.
          </h2>
          <p className="mb-10 text-base leading-relaxed text-sandstone sm:text-lg">
            Stop consuming. Start building. The system you need already exists â
            you just need to step into it.
          </p>
          <Button size="lg" variant="primary" className="bg-ivory text-espresso hover:bg-bone">
            Apply for 1000x
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
