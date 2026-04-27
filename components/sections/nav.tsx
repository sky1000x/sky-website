"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = ["Problem", "Solution", "Method", "Offer", "About"];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-black text-xl text-white tracking-tight">
            SKY<span className="text-brand-500">1000X</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((section) => (
              <Link
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors capitalize"
              >
                {section}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#audit">
              <Button
                size="sm"
                className="bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold"
              >
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <nav className="flex flex-col gap-4 pb-4">
              {navLinks.map((section) => (
                <Link
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-zinc-400 hover:text-white transition-colors capitalize px-2 py-1"
                  onClick={() => setOpen(false)}
                >
                  {section}
                </Link>
              ))}
            </nav>
            <Link href="#audit" onClick={() => setOpen(false)}>
              <Button
                className="w-full bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
