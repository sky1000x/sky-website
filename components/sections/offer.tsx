"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const includes = [
  "Personalized growth strategy & systems roadmap",
  "Mindset architecture for sustained peak performance",
  "Money & wealth-building frameworks",
  "Business scaling systems (multi-channel, full-funnel)",
  "Life design: energy, relationships, fulfillment",
  "Weekly 1:1 accountability sessions",
  "Ongoing Slack access between sessions",
  "Performance tracking & quarterly recalibration",
];

export function Offer() {
  const scrollToAudit = () => {
    const el = document.getElementById("audit");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="offer"
      className="py-24 bg-zinc-950 border-t border-zinc-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
            The Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Skyler1000x Growth System
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A fully personalized, end-to-end system built for ambitious people,
            founders, and operators who are done with incremental progress and
            ready for a quantum leap — in their life, their business, or both.
          </p>
        </div>

        {/* Includes checklist */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">
            What&apos;s Included
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-brand-400" />
                </span>
                <span className="text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-zinc-400 mb-6">
            This is not a course. Not a community. It&apos;s a direct engagement
            with Skyler — built around your specific goals, your specific blocks,
            your specific next level.
          </p>
          <Button
            size="lg"
            className="bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold px-10 py-4 text-lg rounded-xl group"
            onClick={scrollToAudit}
          >
            Apply To Work With Skyler
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-sm text-zinc-500">
            Or email directly:{" "}
            <a
              href="mailto:hi@skyler1000x.com"
              className="text-brand-400 hover:text-brand-300 underline underline-offset-2"
            >
              hi@skyler1000x.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
