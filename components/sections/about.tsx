import { Award, Users, Globe, Rocket } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Clients Scaled" },
  { icon: Globe, value: "12", label: "Industries Served" },
  { icon: Award, value: "98%", label: "Client Retention" },
  { icon: Rocket, value: "10x", label: "Average ROI" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-6">
              Built by Founders, For Founders
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Sky Growth Agency was founded with one mission: to give ambitious businesses
                access to the same caliber of growth expertise that only Fortune 500 companies
                could previously afford.
              </p>
              <p>
                Our team has built and scaled companies across e-commerce, SaaS, services,
                and consumer brands. We know what it takes because we&apos;ve done it ourselves.
              </p>
              <p>
                We&apos;re not a traditional agency. We&apos;re a growth partner that thinks like
                an investor and executes like a world-class operator.
              </p>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-8 text-center border border-slate-200 hover:border-sky-200 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-sky-600" />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{value}</div>
                <div className="text-sm text-slate-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
