import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-blue-500" />
            <span className="font-semibold text-lg text-white">FitAthlete</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/workouts" className="hover:text-white transition-colors">Workouts</Link>
            <Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} FitAthlete. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
