import { Dumbbell, Target, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10" />
      
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About FitAthlete</h1>
        <p className="text-lg text-gray-400">
          Built for athletes who are serious about taking their performance to the next tier.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="glass p-8 rounded-2xl border border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-500/10 rounded-xl">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Problem</h3>
                <p className="text-gray-400 leading-relaxed">
                  Many athletes struggle to find structured, sport-specific workout plans. Generic fitness routines don't cater to the explosive power needed for football, the endurance for long-distance running, or the agility required for cricket. Without proper guidance, athletes risk overtraining or plateauing.
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border border-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent z-0" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Our Solution</h3>
                <p className="text-gray-400 leading-relaxed">
                  FitAthlete bridges the gap by providing tailored, discipline-targeted training regimens. We offer a centralized hub for weekly schedules, exercise tutorials, and progression tracking—empowering you to train flawlessly and dominate your arena.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden glass border border-white/10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-black/80 mix-blend-multiply" />
          <Dumbbell className="w-32 h-32 text-blue-500/20 absolute" />
          <div className="relative z-10 text-center p-8">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Train with Purpose</h2>
            <p className="text-gray-300">"Excellence is not a singular act, but a habit. You are what you repeatedly do."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
