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
  videoLink?: string;
}

const legExercises: Exercise[] = [
  {
    name: "Barbell Back Squats",
    sets: 4,
    reps: "8-12",
    instructions: "Place bar on upper back, feet shoulder-width, squat down keeping chest up and knees tracking over toes.",
    equipment: ["Barbell", "Squat Rack"],
    videoLink: "https://www.youtube.com/watch?v=SW_C1A-rejs"
  },
  {
    name: "Romanian Deadlifts",
    sets: 4,
    reps: "10-12",
    instructions: "Hold barbell at thighs, hinge at hips while keeping legs straight, lower bar along legs while maintaining back position.",
    equipment: ["Barbell"],
    videoLink: "https://www.youtube.com/watch?v=hCDzSR6bW10"
  },
  {
    name: "Leg Press",
    sets: 3,
    reps: "12-15",
    instructions: "Sit in machine, feet shoulder-width on platform, lower weight until knees reach 90 degrees, press back up.",
    equipment: ["Leg Press Machine"],
    videoLink: "https://www.youtube.com/watch?v=IZxyjW7MPJQ"
  },
  {
    name: "Walking Lunges",
    sets: 3,
    reps: "10 each leg",
    instructions: "Hold dumbbells at sides, step forward into lunge, lower back knee toward ground, push through front foot to next step.",
    equipment: ["Dumbbells"],
    videoLink: "https://www.youtube.com/watch?v=L8fvypPrzzs"
  },
  {
    name: "Leg Extensions",
    sets: 3,
    reps: "12-15",
    instructions: "Sit in machine, extend legs fully, squeeze quads at top, lower with control.",
    equipment: ["Leg Extension Machine"],
    videoLink: "https://www.youtube.com/watch?v=YyvSfVjQeL0"
  },
  {
    name: "Lying Leg Curls",
    sets: 3,
    reps: "12-15",
    instructions: "Lie face down on machine, curl weight up using hamstrings, lower with control.",
    equipment: ["Leg Curl Machine"],
    videoLink: "https://www.youtube.com/watch?v=1Tq3QdYUuHs"
  },
  {
    name: "Standing Calf Raises",
    sets: 4,
    reps: "15-20",
    instructions: "Stand on calf raise machine or step, raise heels as high as possible, lower with control.",
    equipment: ["Calf Raise Machine", "Weight Plates"],
    videoLink: "https://www.youtube.com/watch?v=GAQ-oohMhog"
  },
  {
    name: "Hip Thrusts",
    sets: 3,
    reps: "12-15",
    instructions: "Sit with upper back on bench, barbell across hips, thrust hips up squeezing glutes at top.",
    equipment: ["Barbell", "Bench"],
    videoLink: "https://www.youtube.com/watch?v=SEdqd1n0cvg"
  }
];

export default function GymLegsWorkout() {
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
          <h1 className="text-4xl font-bold mb-4">Gym Legs Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Build powerful legs with these gym-based exercises.
            Focus on proper form and progressive overload for maximum results.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5.5l6 4.5v9l-6-4.5L6 18.5v-9l6-4.5zM12 3L4 8v12l8-6 8 6V8l-8-5z"/>
          </svg>
        </div>
      </div>

      <div className="space-y-6">
        {legExercises.map((exercise, index) => (
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
          Workout Tips
        </h2>
        <ul className={`list-disc list-inside space-y-2 ${
          theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
        }`}>
          <li>Always warm up properly with light weights and stretching</li>
          <li>Focus on proper form and full range of motion</li>
          <li>Progress gradually with weight increases</li>
          <li>Take adequate rest between sets (1-2 minutes)</li>
          <li>Stay hydrated throughout your workout</li>
          <li>Consider using a weightlifting belt for heavy compound movements</li>
        </ul>
      </div>
    </div>
  );
} 