import { Info, MoveRight } from "lucide-react";

const exercises = [
  {
    name: "Push-ups",
    category: "Upper Body",
    difficulty: "Beginner",
    steps: [
      "Place hands shoulder-width apart on the floor.",
      "Keep your body in a straight line from head to heels.",
      "Lower your chest until it just touches the floor.",
      "Push back up to the starting position."
    ],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    video: "https://youtu.be/IODxDxX7oi4?si=1RxU0YcKC5ib2l7g"
  },
  {
    name: "Squats",
    category: "Lower Body",
    difficulty: "Beginner",
    steps: [
      "Stand with feet shoulder-width apart.",
      "Keep your back straight and chest up.",
      "Lower your hips as if sitting in a chair.",
      "Return to standing position by pushing through your heels."
    ],
    image: "https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F8urtyqugdt2l%2F4R34dGkHiaDQolsk8Vfog7%2Ffdc24151c20981e7566d067d1d027e79%2Fgoblet-squat-mobile.jpg&w=3840&q=85",
    video: "https://youtu.be/xqvCmoLULNY?si=bVTAo8AvDdtTbi_7"
  },
  {
    name: "Running Drills",
    category: "Cardio / Agility",
    difficulty: "Intermediate",
    steps: [
      "Find a flat space about 20-30 meters long.",
      "Perform high-knees for the first half.",
      "Transition into butt-kicks for the second half.",
      "Finish with a controlled sprint for 10 meters."
    ],
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=2067&auto=format&fit=crop",
    video: "https://youtu.be/hk4mgq9Ppvk?si=bvHwLGjB4TQn5UuZ"
  }
];

export default function ExercisesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Exercise Guide</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Master every movement with our detailed step-by-step instructions and professional tips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercises.map((ex, index) => (
          <div key={index} className="glass rounded-3xl border border-white/10 overflow-hidden flex flex-col group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={ex.image}
                alt={ex.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-tighter shadow-lg">
                  {ex.category}
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{ex.name}</h3>
                <span className="text-gray-500 text-sm font-mono">{ex.difficulty}</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {ex.steps.map((step, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-blue-400 border border-white/10 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <a
                href={ex.video}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all border border-white/10 flex items-center justify-center gap-2 group/btn"
              >
                <Info className="w-4 h-4 text-blue-400" />
                View Detailed Video
                <MoveRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 glass rounded-3xl border border-blue-500/20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        <h2 className="text-3xl font-bold text-white mb-6">Need a custom plan?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto italic">
          If you're training for a specific competition or have unique requirements, our professional coaches can help you build the perfect routine.
        </p>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          Contact Our Coaches
        </button>
      </div>
    </div>
  );
}
