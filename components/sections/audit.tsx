"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";

export function Audit() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    revenue: "",
    goal: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="audit" className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-black mb-4">Application received!</h2>
            <p className="text-zinc-300 text-lg">
              Skyler will review your application and reach out within 24 hours.
              In the meantime — feel free to email directly at{" "}
              <a
                href="mailto:hi@skyler1000x.com"
                className="text-brand-400 hover:text-brand-300 underline"
              >
                hi@skyler1000x.com
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="audit" className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">
              Free Growth Audit
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
              Start Your 1000x Journey
            </h2>
            <p className="text-xl text-zinc-400">
              Whether you&apos;re an ambitious person building better systems for your life,
              a founder scaling a business, or an operator optimizing both —
              this is where it starts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-brand-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                required
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-brand-500"
              />
            </div>

            {/* Business/Context */}
            <div className="space-y-2">
              <Label htmlFor="business" className="text-white">
                What are you building or working on?
              </Label>
              <Input
                id="business"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                placeholder="Business, project, or life area you want to transform"
                required
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-brand-500"
              />
            </div>

            {/* Revenue / Stage */}
            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-white">
                Current Revenue / Stage (optional)
              </Label>
              <Select
                value={form.revenue}
                onValueChange={(val) => setForm({ ...form, revenue: val })}
              >
                <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                  <SelectValue placeholder="Select your stage" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700">
                  <SelectItem value="pre-revenue">Pre-revenue / Starting out</SelectItem>
                  <SelectItem value="under-10k">Under $10k/mo</SelectItem>
                  <SelectItem value="10k-50k">$10k–$50k/mo</SelectItem>
                  <SelectItem value="50k-100k">$50k–$100k/mo</SelectItem>
                  <SelectItem value="100k-plus">$100k+/mo</SelectItem>
                  <SelectItem value="not-applicable">Not applicable</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Primary Goal */}
            <div className="space-y-2">
              <Label htmlFor="goal" className="text-white">
                What&apos;s your primary goal right now?
              </Label>
              <Textarea
                id="goal"
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                placeholder="Describe what you want to achieve in the next 90 days..."
                rows={4}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-brand-500 resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or email{" "}
                <a href="mailto:hi@skyler1000x.com" className="underline">
                  hi@skyler1000x.com
                </a>{" "}
                directly.
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold py-4 text-lg rounded-xl"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit My Application"
              )}
            </Button>

            <p className="text-center text-sm text-zinc-500">
              Or reach out directly:{" "}
              <a
                href="mailto:hi@skyler1000x.com"
                className="text-brand-400 hover:text-brand-300 underline underline-offset-2"
              >
                hi@skyler1000x.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
