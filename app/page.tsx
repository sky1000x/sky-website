import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Method } from "@/components/sections/method";
import { Offer } from "@/components/sections/offer";
import { About } from "@/components/sections/about";
import { Audit } from "@/components/sections/audit";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Method />
      <Offer />
      <About />
      <Audit />
      <FinalCta />
      <Footer />
    </main>
  );
}
