import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-black text-2xl text-white tracking-tight">
            SKY<span className="text-sky-500">1000X</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm">
            {["Problem", "Solution", "Method", "Offer", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-sky-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Sky Growth Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
