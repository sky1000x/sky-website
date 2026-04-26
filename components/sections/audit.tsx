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
      <section id="audit" className="py-24 bg-sky-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-black mb-4">You&apos;re on the list!</h2>
            <p className="text-sky-200 text-lg">
              We&apos;ve received your audit request and will reach out within 24 hours to
              schedule your free growth audit.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="audit" className="py-24 bg-sky-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">
              Free Audit
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-5">
              Get Your Free Growth Audit
            </h2>
            <p className="text-xl text-sky-200">
              In 45 minutes, we&apos;ll uncover your biggest growth opportunities and show you
              exactly how to capture them. No pitch, no pressure.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sky-100">Full Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-sky-300/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sky-100">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-sky-300/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business" className="text-sky-100">Business Name & What You Do</Label>
              <Input
                id="business"
                required
                placeholder="Acme Corp — SaaS for marketing teams"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-sky-300/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-sky-100">Current Monthly Revenue</Label>
              <Select onValueChange={(val) => setForm({ ...form, revenue: val })}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select revenue range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-10k">Under $10k/mo</SelectItem>
                  <SelectItem value="10k-50k">$10k – $50k/mo</SelectItem>
                  <SelectItem value="50k-200k">$50k – $200k/mo</SelectItem>
                  <SelectItem value="200k-1m">$200k – $1M/mo</SelectItem>
                  <SelectItem value="over-1m">Over $1M/mo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal" className="text-sky-100">What&apos;s your #1 growth goal?</Label>
              <Textarea
                id="goal"
                placeholder="e.g. Double our MRR in 6 months, break into the US market, scale our paid ads..."
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-sky-300/50 min-h-[100px]"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-6 text-lg rounded-xl"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Claim My Free Growth Audit →"
              )}
            </Button>

            <p className="text-center text-sky-400/70 text-sm">
              100% free, no obligation. We only work with clients we know we can help.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
