"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  const scrollToAudit = () => {
    const el = document.getElementById("audit");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white text-center border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to Hit<br />
            <span className="text-brand-400">1000x?</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            Ambitious people, founders, and operators who are serious about their
            next level — start here. Your breakthrough is one conversation away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold px-10 py-4 text-lg rounded-xl group"
              onClick={scrollToAudit}
            >
              Start My Growth Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Prefer to reach out directly?{" "}
            <a
              href="mailto:hi@skyler1000x.com"
              className="text-brand-400 hover:text-brand-300 underline underline-offset-2 font-medium"
            >
              hi@skyler1000x.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
