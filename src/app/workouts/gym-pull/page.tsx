'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  instructions: string;
  equipment: string[];
  day: 1 | 2;
  videoLink?: string;
}

const pullExercises: Exercise[] = [
  // Day 1 Exercises
  {
    name: "Barbell Rows",
    sets: 4,
    reps: "8-12",
    instructions: "Bend at hips, keep back straight, pull barbell to lower chest while squeezing shoulder blades.",
    equipment: ["Barbell"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=T3N-TO4reLQ"
  },
  {
    name: "Lat Pulldown",
    sets: 3,
    reps: "10-12",
    instructions: "Grip bar wide, pull down to upper chest while keeping chest up and shoulders back.",
    equipment: ["Cable Machine", "Lat Pulldown Bar"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=CAwf7n6Luuc"
  },
  {
    name: "Cable Face Pull",
    sets: 3,
    reps: "12-15",
    instructions: "Set cable at head height, pull rope to face while keeping elbows high, focus on rear delts.",
    equipment: ["Cable Machine", "Rope Attachment"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=V8dZ3pyiCBo"
  },
  {
    name: "Seated Cable Row",
    sets: 3,
    reps: "10-12",
    instructions: "Sit with chest up, pull handle to lower chest, squeeze shoulder blades at end of movement.",
    equipment: ["Cable Machine", "V-Bar Attachment"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=GZbfZ033f74"
  },
  {
    name: "Barbell Bicep Curls",
    sets: 3,
    reps: "10-12",
    instructions: "Stand with feet shoulder-width, curl barbell with controlled movement, squeeze at top.",
    equipment: ["Barbell"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=kwG2ipFRgfo"
  },
  {
    name: "Dumbbell Hammer Curls",
    sets: 3,
    reps: "12-15",
    instructions: "Stand with dumbbells at sides, curl with palms facing each other, focus on peak contraction.",
    equipment: ["Dumbbells"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=zC3nLlEvin4"
  },
  // Day 2 Exercises
  {
    name: "Single-Arm Dumbbell Row",
    sets: 3,
    reps: "10-12 per side",
    instructions: "Support on bench with one knee and hand, row dumbbell to hip, focus on lat engagement.",
    equipment: ["Dumbbell", "Bench"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=pYcpY20QaE8"
  },
  {
    name: "Wide-Grip Pull-ups",
    sets: 3,
    reps: "As many as possible",
    instructions: "Grip bar wide, pull chest to bar while keeping core tight, focus on lat contraction.",
    equipment: ["Pull-up Bar"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=eGo4IYlbE5g"
  },
  {
    name: "T-Bar Row",
    sets: 3,
    reps: "10-12",
    instructions: "Straddle bar, bend at hips, pull weight to chest while keeping back straight.",
    equipment: ["T-Bar Row Machine", "Weight Plates"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=j3Igk5nyZE4"
  },
  {
    name: "Reverse Pec Deck",
    sets: 3,
    reps: "12-15",
    instructions: "Sit facing machine, grab handles, pull arms back focusing on rear deltoids.",
    equipment: ["Pec Deck Machine"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=0GSu6Z-Oj7U"
  },
  {
    name: "Incline Dumbbell Curls",
    sets: 3,
    reps: "12-15",
    instructions: "Sit on incline bench, curl dumbbells with full range of motion, focus on stretch.",
    equipment: ["Dumbbells", "Incline Bench"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=soxrZlIl35U"
  },
  {
    name: "Preacher Curls",
    sets: 3,
    reps: "10-12",
    instructions: "Rest arms on preacher bench, curl barbell or EZ bar with strict form.",
    equipment: ["Preacher Bench", "EZ Bar"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=fIWP-FRFNU0"
  }
];

export default function GymPullWorkout() {
  const [selectedDay, setSelectedDay] = React.useState<1 | 2>(1);
  const { theme } = useTheme();

  return (
    <div className="py-10">
      <div className="mb-8">
        <Link 
          href="/" 
          className={`hover:opacity-80 flex items-center ${
            theme === 'testosterone' ? 'text-blue-100' : 'text-gray-600'
          }`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className={`rounded-xl p-8 mb-10 relative overflow-hidden ${
        theme === 'testosterone' 
          ? 'bg-gray-900/30 border border-blue-500/20' 
          : 'bg-white/30 border border-pink-200/20'
      }`}>
        <div className={`relative z-10 ${
          theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
        }`}>
          <h1 className="text-4xl font-bold mb-4">Gym Pull Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Build a strong back and biceps with these gym-based pulling exercises.
            Focus on proper form and mind-muscle connection for best results.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm10 10.37l-1.37-1.37c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L16 16.91V9c0-1.1-.9-2-2-2s-2 .9-2 2v7.91l-3.21-3.21c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L6 14.37c-.39.39-.39 1.02 0 1.41l4.48 4.48c.79.79 1.78 1.21 2.83 1.21s2.04-.42 2.83-1.21l4.48-4.48c.39-.39.39-1.02 0-1.41z"/>
          </svg>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setSelectedDay(1)}
          className={`px-6 py-2 rounded-full ${
            theme === 'testosterone'
              ? selectedDay === 1
                ? 'bg-gray-900/30 text-blue-100 border border-blue-500/20'
                : 'bg-gray-800/20 text-blue-200 hover:bg-gray-800/30'
              : selectedDay === 1
                ? 'bg-white/30 text-gray-800 border border-pink-200/20'
                : 'bg-gray-100/30 text-gray-500 hover:bg-gray-100/40'
          }`}
        >
          Day 1
        </button>
        <button 
          onClick={() => setSelectedDay(2)}
          className={`px-6 py-2 rounded-full ${
            theme === 'testosterone'
              ? selectedDay === 2
                ? 'bg-gray-900/30 text-blue-100 border border-blue-500/20'
                : 'bg-gray-800/20 text-blue-200 hover:bg-gray-800/30'
              : selectedDay === 2
                ? 'bg-white/30 text-gray-800 border border-pink-200/20'
                : 'bg-gray-100/30 text-gray-500 hover:bg-gray-100/40'
          }`}
        >
          Day 2
        </button>
      </div>

      <div className="space-y-6">
        {pullExercises
          .filter(exercise => exercise.day === selectedDay)
          .map((exercise, index) => (
            <div key={index} className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
              theme === 'testosterone'
                ? 'bg-gray-900/30 border border-blue-500/20'
                : 'bg-white/30 border border-pink-200/20'
            }`}>
              <h2 className={`text-2xl font-bold mb-2 flex items-center ${
                theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
              }`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 ${
                  theme === 'testosterone'
                    ? 'bg-blue-500/20 text-blue-100'
                    : 'bg-pink-200/50 text-gray-800'
                }`}>
                  {index + 1}
                </span>
                {exercise.name}
                {exercise.videoLink && (
                  <a 
                    href={exercise.videoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`ml-3 hover:opacity-80 text-sm flex items-center ${
                      theme === 'testosterone' ? 'text-blue-400' : 'text-pink-500'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/>
                    </svg>
                    Watch Demo
                  </a>
                )}
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className={`p-4 rounded-lg ${
                  theme === 'testosterone'
                    ? 'bg-gray-800/30'
                    : 'bg-pink-50/50'
                }`}>
                  <h3 className={`font-semibold mb-2 flex items-center ${
                    theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                  }`}>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Sets and Reps
                  </h3>
                  <p className={
                    theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
                  }>{exercise.sets} sets of {exercise.reps}</p>
                </div>
                <div className={`p-4 rounded-lg ${
                  theme === 'testosterone'
                    ? 'bg-gray-800/30'
                    : 'bg-pink-50/50'
                }`}>
                  <h3 className={`font-semibold mb-2 flex items-center ${
                    theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                  }`}>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Equipment Needed
                  </h3>
                  <ul className={`list-disc list-inside ${
                    theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
                  }`}>
                    {exercise.equipment.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`p-4 rounded-lg ${
                theme === 'testosterone'
                  ? 'bg-gray-800/30'
                  : 'bg-pink-50/50'
              }`}>
                <h3 className={`font-semibold mb-2 flex items-center ${
                  theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                }`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Instructions
                </h3>
                <p className={
                  theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
                }>{exercise.instructions}</p>
              </div>
            </div>
          ))}
      </div>

      <div className={`mt-10 rounded-xl p-6 shadow-lg ${
        theme === 'testosterone'
          ? 'bg-gray-900/30 border border-blue-500/20'
          : 'bg-white/30 border border-pink-200/20'
      }`}>
        <h2 className={`text-2xl font-bold mb-4 flex items-center ${
          theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
        }`}>
          <svg className={`w-6 h-6 mr-2 ${
            theme === 'testosterone' ? 'text-blue-400' : 'text-pink-400'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Advanced Tips
        </h2>
        <ul className={`list-disc list-inside space-y-2 ${
          theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
        }`}>
          <li>Start with lighter weights to warm up your muscles</li>
          <li>Focus on feeling the target muscles working</li>
          <li>Use straps for heavy pulling movements if needed</li>
          <li>Control the negative portion of each exercise</li>
          <li>Maintain proper posture throughout your workout</li>
        </ul>
      </div>
    </div>
  );
} 