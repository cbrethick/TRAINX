import Link from 'next/link';
import { ArrowRight, Activity, Zap, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] -z-10" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
          <Activity className="w-4 h-4" />
          <span>Premium Training Platform</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Unleash Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Athletic Potential
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          Advanced workout plans designed by professionals to push your limits, track your progress, and help you dominate in your sport.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/workouts"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 group"
          >
            Start Workout
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/workouts"
            className="w-full sm:w-auto px-8 py-4 glass text-white hover:bg-white/10 rounded-lg font-semibold transition-all border border-white/10 flex items-center justify-center gap-2"
          >
            <Trophy className="w-5 h-5 text-gray-400" />
            Choose Your Sport
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Dynamic Workouts</h3>
            <p className="text-gray-400">Routines that adapt to your fitness level and chosen sport discipline.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Weekly Schedules</h3>
            <p className="text-gray-400">Structured day-by-day plans to balance training and important recovery.</p>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Detailed Guides</h3>
            <p className="text-gray-400">Learn proper form with step-by-step instructions for every exercise.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
