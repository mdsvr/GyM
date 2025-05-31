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
}

const pushExercises: Exercise[] = [
  // Day 1 Exercises
  {
    name: "Band Chest Press",
    sets: 3,
    reps: "12-15",
    instructions: "Anchor band behind you at chest height, press forward with controlled movement. Use 3-4 second lowering phase with 1-2 second pause at contraction.",
    equipment: ["Resistance Band"],
    day: 1
  },
  {
    name: "Band Chest Fly",
    sets: 3,
    reps: "12-15",
    instructions: "Anchor band behind you, arms out to sides, bring hands together in front of chest with slight bend in elbows.",
    equipment: ["Resistance Band"],
    day: 1
  },
  {
    name: "Band Overhead Shoulder Press",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, press handles overhead with controlled movement, focusing on shoulder engagement.",
    equipment: ["Resistance Band"],
    day: 1
  },
  {
    name: "Band Lateral Raise",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, raise arms out to sides until parallel with ground, control the descent.",
    equipment: ["Resistance Band"],
    day: 1
  },
  {
    name: "Band Triceps Overhead Extension",
    sets: 3,
    reps: "12-15",
    instructions: "Hold band overhead, extend arms focusing on triceps, maintain controlled movement.",
    equipment: ["Resistance Band"],
    day: 1
  },
  {
    name: "Band Triceps Kickback",
    sets: 3,
    reps: "12-15 each arm",
    instructions: "Hinge forward, upper arm parallel to ground, extend arm back focusing on triceps.",
    equipment: ["Resistance Band"],
    day: 1
  },
  // Day 2 Exercises
  {
    name: "Incline Band Chest Press",
    sets: 3,
    reps: "12-15",
    instructions: "Position yourself on an incline surface, press band forward with focus on upper chest.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Band Push-Up with Band",
    sets: 3,
    reps: "12-15",
    instructions: "Place band across back, perform push-ups with added resistance, focus on form.",
    equipment: ["Resistance Band", "Push-up Bars"],
    day: 2
  },
  {
    name: "Band Front Raise",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, raise arms straight in front to shoulder height, control descent.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Band Upright Row",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, pull handles up to chin level, keeping elbows high.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Band Triceps Pushdown",
    sets: 3,
    reps: "12-15",
    instructions: "Anchor band above head, push down focusing on triceps, keep elbows at sides.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Band Overhead Triceps Extension",
    sets: 3,
    reps: "12-15",
    instructions: "Hold band behind head, extend arms overhead focusing on triceps.",
    equipment: ["Resistance Band"],
    day: 2
  }
];

export default function PushWorkout() {
  const { theme } = useTheme();
  const [selectedDay, setSelectedDay] = React.useState<1 | 2>(1);

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
          <h1 className="text-4xl font-bold mb-4">Push Day Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Focus on chest, shoulders, and triceps using resistance bands and push-up variations. 
            Complete all exercises with proper form and controlled movements.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
          </svg>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          className={`px-6 py-2 rounded-full ${
            theme === 'testosterone'
              ? 'bg-gray-900/30 text-blue-100 border border-blue-500/20'
              : 'bg-white/30 text-gray-800 border border-pink-200/20'
          }`}
          onClick={() => setSelectedDay(1)}
        >
          Day 1
        </button>
        <button 
          className={`px-6 py-2 rounded-full ${
            theme === 'testosterone'
              ? 'bg-gray-800/20 text-blue-200 hover:bg-gray-800/30'
              : 'bg-gray-100/30 text-gray-500 hover:bg-gray-100/40'
          }`}
          onClick={() => setSelectedDay(2)}
        >
          Day 2
        </button>
      </div>

      <div className="space-y-6">
        {pushExercises
          .filter(exercise => exercise.day === selectedDay)
          .map((exercise, index) => (
          <div key={index} className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
            theme === 'testosterone'
              ? 'border border-blue-500/20'
              : 'border border-pink-200/20'
          }`}>
            <h2 className={`text-2xl font-bold text-gray-800 mb-2 flex items-center ${
              theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
            }`}>
              <span className={`bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 ${
                theme === 'testosterone'
                  ? 'bg-blue-500/20'
                  : 'bg-pink-200/50'
              }`}>
                {index + 1}
              </span>
              {exercise.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className={`bg-gray-100 p-4 rounded-lg ${
                theme === 'testosterone'
                  ? 'border border-blue-500/20'
                  : 'border border-pink-200/20'
              }`}>
                <h3 className={`font-semibold text-gray-700 mb-2 flex items-center ${
                  theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                }`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Sets and Reps
                </h3>
                <p className={`text-gray-600 ${
                  theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
                }`}>{exercise.sets} sets of {exercise.reps}</p>
              </div>
              <div className={`bg-gray-100 p-4 rounded-lg ${
                theme === 'testosterone'
                  ? 'border border-blue-500/20'
                  : 'border border-pink-200/20'
              }`}>
                <h3 className={`font-semibold text-gray-700 mb-2 flex items-center ${
                  theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                }`}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Equipment Needed
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  {exercise.equipment.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`bg-gray-100 p-4 rounded-lg ${
              theme === 'testosterone'
                ? 'border border-blue-500/20'
                : 'border border-pink-200/20'
            }`}>
              <h3 className={`font-semibold text-gray-700 mb-2 flex items-center ${
                theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
              }`}>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Instructions
              </h3>
              <p className={`text-gray-600 ${
                theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
              }`}>{exercise.instructions}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Advanced Tips
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-gray-700 italic">
            {selectedDay === 1 
              ? "Use 3-4 second lowering phase with 1-2 second pause at contraction"
              : "Vary exercise angles and tempo for maximum muscle engagement"}
          </p>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Warm up properly with arm circles and light band work</li>
          <li>Rest 60-90 seconds between sets</li>
          <li>Focus on proper form over speed</li>
          <li>Breathe steadily throughout each exercise</li>
          <li>Stay hydrated during your workout</li>
        </ul>
      </div>
    </div>
  );
} 