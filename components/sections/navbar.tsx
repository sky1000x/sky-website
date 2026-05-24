"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Framework", href: "#framework-heading" },
  { label: "Offer", href: "#offer-heading" },
  { label: "Who It\u2019s For", href: "#audience-heading" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-sandstone/30 bg-ivory/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-base font-display font-semibold tracking-wide text-espresso"
        >
          1000x Growth Systems
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body text-earth transition-colors hover:text-espresso"
            >
              {link.label}
            </a>
          ))}
          <Button size="default" variant="primary">
            Apply for 1000x
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-earth md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-sandstone/30 bg-ivory px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body text-earth"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="default" variant="primary" className="w-full">
              Apply for 1000x
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
