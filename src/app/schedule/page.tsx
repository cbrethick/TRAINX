import { Calendar, Clock, CheckCircle2 } from "lucide-react";

const schedule = [
  { day: "Monday", activity: "Warm-up + Cardio", intensity: "High", duration: "60 min" },
  { day: "Tuesday", activity: "Strength Training", intensity: "Medium", duration: "45 min" },
  { day: "Wednesday", activity: "Rest / Light Exercise", intensity: "Low", duration: "30 min" },
  { day: "Thursday", activity: "Sport-Specific Drills", intensity: "High", duration: "75 min" },
  { day: "Friday", activity: "Endurance Run", intensity: "Medium", duration: "50 min" },
  { day: "Saturday", activity: "Recovery & Mobility", intensity: "Low", duration: "40 min" },
  { day: "Sunday", activity: "Full Rest", intensity: "None", duration: "-" },
];

export default function SchedulePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Weekly Training Schedule</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A structured day-by-day plan to ensure peak performance and optimal recovery.
        </p>
      </div>

      <div className="glass rounded-3xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-white/10">Day</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-white/10">Workout / Activity</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-white/10">Intensity</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-white/10">Duration</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-white/10">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {schedule.map((item, index) => (
                <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Calendar className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="font-bold text-white">{item.day}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-gray-300 font-medium">{item.activity}</span>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                      item.intensity === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                      item.intensity === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                      item.intensity === 'Low' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                    }`}>
                      {item.intensity}
                    </span>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-right">
                    <button className="p-2 text-gray-500 hover:text-blue-400 transition-colors">
                      <CheckCircle2 className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Training Tips</h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-gray-400 italic">
              <span className="text-blue-400 font-bold">•</span>
              Always prioritize a 10-15 minute warm-up before any high-intensity session.
            </li>
            <li className="flex gap-3 text-gray-400 italic">
              <span className="text-blue-400 font-bold">•</span>
              Stay hydrated: Drink at least 3-4 liters of water throughout the day.
            </li>
            <li className="flex gap-3 text-gray-400 italic">
              <span className="text-blue-400 font-bold">•</span>
              Consistency over intensity: Stick to the schedule even on light days.
            </li>
          </ul>
        </div>
        <div className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-center">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-blue-400 mb-2">90%</div>
            <div className="text-gray-400">Weekly Goal Efficiency</div>
            <div className="mt-4 w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full w-[90%] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
