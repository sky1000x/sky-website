"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="font-black text-2xl text-sky-700 tracking-tight">
          SKY<span className="text-sky-400">1000X</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="#problem" className="hover:text-sky-600 transition-colors">Problem</Link>
          <Link href="#solution" className="hover:text-sky-600 transition-colors">Solution</Link>
          <Link href="#method" className="hover:text-sky-600 transition-colors">Method</Link>
          <Link href="#offer" className="hover:text-sky-600 transition-colors">Offer</Link>
          <Link href="#about" className="hover:text-sky-600 transition-colors">About</Link>
        </nav>
        <Button asChild className="hidden md:inline-flex bg-sky-600 hover:bg-sky-700">
          <Link href="#audit">Get Free Audit</Link>
        </Button>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white px-4 pb-4 flex flex-col gap-3">
          {["problem","solution","method","offer","about","audit"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="py-2 capitalize font-medium text-slate-700 hover:text-sky-600"
              onClick={() => setOpen(false)}
            >
              {section === "audit" ? "Get Free Audit" : section}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
