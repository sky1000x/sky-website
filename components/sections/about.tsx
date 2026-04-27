import { Award, Users, Globe, Rocket } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "People Transformed" },
  { icon: Globe, value: "12", label: "Industries Served" },
  { icon: Award, value: "98%", label: "Client Retention" },
  { icon: Rocket, value: "10x", label: "Average Growth" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">
              About Skyler
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-6">
              Built by an Ambitious Person, For Ambitious People
            </h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                Skyler1000x exists because the playbooks available to most ambitious people —
                whether building a life, a business, or both — are incomplete, scattered,
                or built for someone else&apos;s context.
              </p>
              <p>
                The Skyler1000x system synthesizes what actually works across mindset,
                money, business scaling, and life design — drawn from real experience
                building and scaling across multiple industries, not theory.
              </p>
              <p>
                This is for founders, operators, and ambitious people who know they&apos;re
                capable of more, and are ready to build the system that gets them there.
              </p>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>
                <div className="text-3xl font-black text-white mb-1">{value}</div>
                <div className="text-sm text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
