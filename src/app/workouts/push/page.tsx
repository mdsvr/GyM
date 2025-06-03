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
    sets: 4,
    reps: "12-15",
    instructions: "Anchor band behind you at chest height, press forward with controlled movement. Keep core tight and maintain neutral spine throughout.",
    equipment: ["Medium Resistance Band", "Anchor Point"],
    day: 1
  },
  {
    name: "Band Chest Fly",
    sets: 3,
    reps: "12-15",
    instructions: "Anchor band behind you at shoulder height, arms out to sides, bring hands together in front of chest with slight bend in elbows. Focus on chest squeeze.",
    equipment: ["Light/Medium Resistance Band", "Anchor Point"],
    day: 1
  },
  {
    name: "Band Overhead Shoulder Press",
    sets: 4,
    reps: "10-12",
    instructions: "Stand on band with feet shoulder-width apart, press handles overhead with controlled movement. Keep core engaged and avoid arching back.",
    equipment: ["Heavy Resistance Band"],
    day: 1
  },
  {
    name: "Band Lateral Raise",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, raise arms out to sides until parallel with ground. Maintain slight bend in elbows and control the descent.",
    equipment: ["Light Resistance Band"],
    day: 1
  },
  {
    name: "Band Triceps Overhead Extension",
    sets: 3,
    reps: "12-15",
    instructions: "Hold band overhead with both hands, extend arms focusing on triceps. Keep upper arms still and elbows close to head.",
    equipment: ["Medium Resistance Band"],
    day: 1
  },
  {
    name: "Band Triceps Pushdown",
    sets: 3,
    reps: "15-20",
    instructions: "Anchor band above head, push down focusing on triceps. Keep elbows tucked and maintain upright posture.",
    equipment: ["Light/Medium Resistance Band", "High Anchor Point"],
    day: 1
  },
  // Day 2 Exercises
  {
    name: "Incline Band Chest Press",
    sets: 4,
    reps: "12-15",
    instructions: "Position yourself on an incline surface, press band forward with focus on upper chest. Maintain stable shoulder position throughout.",
    equipment: ["Heavy Resistance Band", "Elevated Surface"],
    day: 2
  },
  {
    name: "Banded Push-Ups",
    sets: 3,
    reps: "10-12",
    instructions: "Place band across upper back, secured under palms, perform push-ups with added resistance. Keep body straight and core engaged.",
    equipment: ["Medium/Heavy Resistance Band"],
    day: 2
  },
  {
    name: "Band Front Raise",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, raise arms straight in front to shoulder height. Maintain controlled movement and avoid swinging.",
    equipment: ["Light Resistance Band"],
    day: 2
  },
  {
    name: "Band Upright Row",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, pull handles up to chin level, keeping elbows high. Focus on shoulder and upper trap engagement.",
    equipment: ["Medium Resistance Band"],
    day: 2
  },
  {
    name: "Close-Grip Band Press",
    sets: 3,
    reps: "12-15",
    instructions: "Anchor band behind you at chest height, press forward with hands close together. Focus on triceps engagement.",
    equipment: ["Medium Resistance Band", "Anchor Point"],
    day: 2
  },
  {
    name: "Band Skull Crushers",
    sets: 3,
    reps: "12-15",
    instructions: "Lie on back, hold band anchored behind head, extend arms up focusing on triceps. Keep upper arms vertical throughout.",
    equipment: ["Light/Medium Resistance Band", "Floor Mat"],
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
          <h1 className="text-4xl font-bold mb-4">Resistance Band Push Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            A comprehensive push day focusing on chest, shoulders, and triceps using resistance bands.
            Choose appropriate band resistance to maintain proper form and control throughout each movement.
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
          className={`px-6 py-2 rounded-full transition-all ${
            selectedDay === 1
              ? theme === 'testosterone'
                ? 'bg-gray-900/30 text-blue-100 border border-blue-500/20'
                : 'bg-pink-100/50 text-gray-800 border border-pink-300/20'
              : theme === 'testosterone'
                ? 'bg-gray-800/20 text-blue-200 hover:bg-gray-800/30'
                : 'bg-white/30 text-gray-600 hover:bg-pink-50/30'
          }`}
          onClick={() => setSelectedDay(1)}
        >
          Day 1
        </button>
        <button 
          className={`px-6 py-2 rounded-full transition-all ${
            selectedDay === 2
              ? theme === 'testosterone'
                ? 'bg-gray-900/30 text-blue-100 border border-blue-500/20'
                : 'bg-pink-100/50 text-gray-800 border border-pink-300/20'
              : theme === 'testosterone'
                ? 'bg-gray-800/20 text-blue-200 hover:bg-gray-800/30'
                : 'bg-white/30 text-gray-600 hover:bg-pink-50/30'
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Workout Tips
        </h2>
        <ul className={`list-disc list-inside space-y-2 ${
          theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
        }`}>
          <li>Start with lighter bands to perfect form before progressing</li>
          <li>Maintain tension throughout the entire range of motion</li>
          <li>Rest 60-90 seconds between sets</li>
          <li>Breathe steadily and maintain core engagement</li>
          <li>Check band condition before each workout for safety</li>
        </ul>
      </div>
    </div>
  );
} 