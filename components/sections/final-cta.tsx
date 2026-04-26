import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-600 to-sky-800 text-white text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to Hit<br />
            <span className="text-sky-200">1000x?</span>
          </h2>
          <p className="text-xl text-sky-100 mb-10 leading-relaxed">
            Join 50+ businesses that have transformed their growth with Sky Agency.
            Your breakthrough is one conversation away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-700 hover:bg-sky-50 font-bold px-10 py-6 text-lg rounded-xl"
            >
              <Link href="#audit">
                Start Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sky-200/70 text-sm">
            No contracts. Cancel anytime. Results guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
