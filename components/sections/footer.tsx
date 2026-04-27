import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-black text-2xl text-white tracking-tight">
            SKY<span className="text-brand-500">1000X</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm">
            {["Problem", "Solution", "Method", "Offer", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-1">
            <a
              href="mailto:hi@skyler1000x.com"
              className="text-brand-400 hover:text-brand-300 text-sm font-medium transition-colors"
            >
              hi@skyler1000x.com
            </a>
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Skyler1000x. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
