import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-700 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Sky Growth Agency Hero"
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/60 via-sky-900/40 to-sky-950/80" />

      <div className="relative container mx-auto px-4 py-24 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-2 mb-8 text-sky-200 text-sm font-medium">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          Trusted by 50+ fast-growing companies
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          Scale Your Business<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200">
            To 1000x
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-sky-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          We help ambitious founders and businesses achieve explosive growth through
          data-driven marketing, brand positioning, and performance optimization.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-6 text-lg rounded-xl">
            <Link href="#audit">
              Get Your Free Growth Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
            <Link href="#solution">See How It Works</Link>
          </Button>
        </div>

        {/* Social proof numbers */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "50+", label: "Clients Scaled" },
            { value: "10x", label: "Avg. ROI" },
            { value: "$50M+", label: "Revenue Generated" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-sky-300">{value}</div>
              <div className="text-sm text-sky-200/80 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1200 80L1200 40C900 80 300 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
