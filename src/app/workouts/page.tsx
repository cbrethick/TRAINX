"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Timer, Activity, Footprints, Medal } from "lucide-react";

// Mock data for sports
const sportsData = {
  football: {
    name: "Football",
    icon: <Footprints className="w-8 h-8 text-green-400" />,
    color: "bg-green-500/10 border-green-500/30",
    workouts: [
      { name: "Agility Ladder Drills", duration: "15 mins", focus: "Speed & Coordination" },
      { name: "Sprint Intervals", duration: "20 mins", focus: "Explosive Power" },
      { name: "Core Stability", duration: "15 mins", focus: "Balance" },
      { name: "Match Pace Cardio", duration: "30 mins", focus: "Endurance" },
    ]
  },
  cricket: {
    name: "Cricket",
    icon: <Medal className="w-8 h-8 text-blue-400" />,
    color: "bg-blue-500/10 border-blue-500/30",
    workouts: [
      { name: "Shoulder Rotations", duration: "10 mins", focus: "Injury Prevention" },
      { name: "Reflex Catching", duration: "15 mins", focus: "Hand-Eye Coordination" },
      { name: "Pitch Sprints", duration: "15 mins", focus: "Quick Bursts" },
      { name: "Lower Body Strength", duration: "25 mins", focus: "Batting Stance Pow" },
    ]
  },
  running: {
    name: "Running",
    icon: <Timer className="w-8 h-8 text-orange-400" />,
    color: "bg-orange-500/10 border-orange-500/30",
    workouts: [
      { name: "Dynamic Warm-up", duration: "10 mins", focus: "Mobility" },
      { name: "Tempo Run", duration: "40 mins", focus: "Aerobic Capacity" },
      { name: "Hill Repeats", duration: "20 mins", focus: "Leg Strength" },
      { name: "Stretching & Foam Roll", duration: "15 mins", focus: "Recovery" },
    ]
  }
};

type SportKey = keyof typeof sportsData;

export default function WorkoutsPage() {
  const [selectedSport, setSelectedSport] = useState<SportKey | null>(null);

  const activeSportData = selectedSport ? sportsData[selectedSport] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Select Your Discipline</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose your sport below to reveal a specialized workout plan designed to elevate your game.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {(Object.keys(sportsData) as SportKey[]).map((key) => {
          const sport = sportsData[key];
          const isSelected = selectedSport === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedSport(key)}
              className={`p-6 rounded-2xl glass border transition-all duration-300 text-left relative overflow-hidden group ${
                isSelected 
                  ? sport.color + " shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              {isSelected && (
                <motion.div 
                  layoutId="sport-selection-bg"
                  className="absolute inset-0 bg-white/5 z-0"
                />
              )}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black/40 rounded-xl">
                    {sport.icon}
                  </div>
                  <span className="text-2xl font-bold text-white">{sport.name}</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isSelected ? "border-white" : "border-gray-600"
                }`}>
                  {isSelected && <div className="w-3 h-3 bg-white rounded-full" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeSportData ? (
          <motion.div
            key={selectedSport}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl border border-white/10 p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <Dumbbell className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-white">
                {activeSportData.name} Plan
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeSportData.workouts.map((workout, index) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="bg-black/40 rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors group"
                >
                  <div className="text-blue-400 font-mono text-sm mb-3 opacity-80">
                    Phase 0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {workout.name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Timer className="w-4 h-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Activity className="w-4 h-4" />
                      <span>{workout.focus}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center border-2 border-dashed border-white/10 rounded-3xl"
          >
            <p className="text-gray-500 text-lg">Select a sport above to view the targeted plan.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
