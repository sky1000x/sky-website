import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Framework } from "@/components/sections/framework";
import { Offer } from "@/components/sections/offer";
import { LeadMagnet } from "@/components/sections/lead-magnet";
import { Audience } from "@/components/sections/audience";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <Framework />
        <Offer />
        <LeadMagnet />
        <Audience />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
