import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Skyler1000x — Build The System. Become The 1000x Version."
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-900/40 to-zinc-950/90" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 py-24 text-center text-white">
        {/* Headline — LOCKED */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Build The System.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
            Become The 1000x Version.
          </span>
        </h1>

        {/* Sub-headline — LOCKED */}
        <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          For ambitious people, founders, and operators ready to build the systems
          that unlock their next level — in life, in business, and beyond.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="#audit">
            <Button
              size="lg"
              className="bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold px-10 py-4 text-lg rounded-xl group"
            >
              Start My Growth Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#offer">
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-800 px-10 py-4 text-lg rounded-xl"
            >
              See The System
            </Button>
          </Link>
        </div>

        {/* Social proof — no pricing/agency */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
          {[
            { icon: TrendingUp, value: "50+", label: "People Transformed" },
            { value: "4 Pillars", label: "Mindset · Money · Business · Life" },
            { value: "24hr", label: "Response Guarantee" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2">
              {Icon && <Icon className="h-4 w-4 text-brand-400" />}
              <span className="font-bold text-white">{value}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
