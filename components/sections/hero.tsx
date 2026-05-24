"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      <Image
        src="/hero.jpg"
        alt="Warm mountain landscape at golden hour representing growth and clarity"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/60 to-espresso/20" />

      <div className="relative z-10 section-padding container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-body font-medium uppercase tracking-[0.2em] text-sandstone">
            1000x Growth Systems
          </p>
          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-display font-semibold leading-tight text-ivory sm:text-5xl lg:text-6xl"
          >
            Build the systems behind your next level.
          </h1>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-sandstone sm:text-lg">
            1000x Growth Systems helps men and women optimize mindset, habits,
            money, execution, and business so they can create more clarity,
            discipline, income, fulfillment, and freedom.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="primary" className="bg-ivory text-espresso hover:bg-bone">
              Apply for 1000x
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="border-sandstone text-sandstone hover:bg-ivory/10"
            >
              See How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
