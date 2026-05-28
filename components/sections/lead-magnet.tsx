"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, CheckCircle, Loader2 } from "lucide-react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section aria-labelledby="lead-magnet-heading" className="bg-charcoal">
      <div className="section-padding container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sage/20">
            <Download className="h-6 w-6 text-sage" aria-hidden="true" />
          </div>
          <h2
            id="lead-magnet-heading"
            className="mb-4 text-3xl font-display font-semibold text-ivory sm:text-4xl"
          >
            Get Your Free Growth Framework
          </h2>
          <p className="mb-8 text-base leading-relaxed text-sandstone">
            Download the foundational framework behind 1000x Growth Systems.
            Learn the five pillars, the core principles, and the first steps you
            can take today â free.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 rounded-lg bg-sage/10 p-6">
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-sage" aria-hidden="true" />
              <p className="text-sm text-ivory">
                Thank you! Your download link will be sent to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="lead-email" className="sr-only">
                Email address
              </label>
              <Input
                id="lead-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-charcoal bg-espresso text-ivory placeholder:text-clay focus-visible:ring-sage"
                disabled={status === "loading"}
              />
              <Button
                type="submit"
                variant="primary"
                className="bg-ivory text-espresso hover:bg-bone whitespace-nowrap"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  "Get the Framework"
                )}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-clay" role="alert">
              {errorMessage}
            </p>
          )}

          <p className="mt-4 text-xs text-clay">
            No spam. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
