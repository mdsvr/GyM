'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext';

const exercises = [
  {
    name: 'Push-Ups',
    description: 'The fundamental upper body pushing exercise that builds chest, shoulder, and triceps strength while engaging the core. A versatile movement that can be modified for any fitness level.',
    sets: 4,
    reps: '10-20',
    tips: [
      'Keep body straight from head to heels',
      'Position hands slightly wider than shoulders',
      'Lower chest to about 2 inches from ground',
      'Keep elbows at 45-degree angle',
      'Breathe steadily throughout',
      'Maintain core tension'
    ],
    variations: [
      'Wall Push-Ups (easiest)',
      'Incline Push-Ups',
      'Regular Push-Ups',
      'Diamond Push-Ups',
      'Archer Push-Ups',
      'One-Arm Push-Up Progression'
    ]
  },
  {
    name: 'Squats',
    description: 'A fundamental lower body exercise that develops strength in the quadriceps, hamstrings, and glutes. This movement also improves mobility and functional strength for everyday activities.',
    sets: 4,
    reps: '15-25',
    tips: [
      'Keep feet shoulder-width apart',
      'Point toes slightly outward',
      'Keep chest up throughout',
      'Push knees out as you descend',
      'Go as low as comfortable',
      'Drive through heels to stand'
    ],
    variations: [
      'Assisted Squats',
      'Regular Bodyweight Squats',
      'Jump Squats',
      'Pistol Squat Progression',
      'Pulse Squats',
      'Cossack Squats'
    ]
  },
  {
    name: 'Mountain Climbers',
    description: 'A dynamic full-body exercise that combines strength and cardio. This movement targets the core while elevating heart rate and improving coordination.',
    sets: 3,
    reps: '30-45 seconds',
    tips: [
      'Start in perfect plank position',
      'Keep hips level throughout',
      'Drive knees toward chest',
      'Maintain steady rhythm',
      'Keep shoulders stable',
      'Breathe consistently'
    ],
    variations: [
      'Slow Mountain Climbers',
      'Regular Speed',
      'High-Knee Climbers',
      'Cross-Body Climbers',
      'Spider Climbers',
      'Plyo Mountain Climbers'
    ]
  },
  {
    name: 'Burpees',
    description: 'A high-intensity full-body exercise that builds strength, endurance, and explosiveness. This movement combines a push-up, squat, and jump into one comprehensive exercise.',
    sets: 3,
    reps: '8-12',
    tips: [
      'Start with feet shoulder-width apart',
      'Drop chest to ground with control',
      'Push up explosively',
      'Jump feet toward hands',
      'Explode upward with jump',
      'Land softly and repeat'
    ],
    variations: [
      'Walk-Out Burpees',
      'No Push-Up Burpees',
      'Standard Burpees',
      'Push-Up Burpees',
      'Long-Jump Burpees',
      'Double Push-Up Burpees'
    ]
  },
  {
    name: 'Plank Hold',
    description: 'An isometric core exercise that develops total body tension and stability. This movement strengthens the entire core region while improving posture and shoulder stability.',
    sets: 4,
    reps: '30-60 seconds',
    tips: [
      'Keep body straight from head to heels',
      'Engage core throughout',
      'Keep shoulders packed',
      'Look slightly forward',
      'Breathe steadily',
      'Squeeze glutes'
    ],
    variations: [
      'Forearm Plank',
      'High Plank',
      'Side Plank',
      'Dynamic Plank',
      'Plank Shoulder Taps',
      'Plank Up-Downs'
    ]
  }
];

export default function NoEquipmentWorkout() {
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
          <h1 className="text-4xl font-bold mb-4">No-Equipment Full Body Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            A comprehensive full-body workout using only your bodyweight.
            Perfect for home training with zero equipment needed.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          </svg>
        </div>
      </div>

      <div className="space-y-6">
        {exercises.map((exercise, index) => (
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
            
            <p className={`mb-4 ${
              theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
            }`}>
              {exercise.description}
            </p>

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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Tips
                </h3>
                <ul className={`list-disc list-inside ${
                  theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
                }`}>
                  {exercise.tips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${
              theme === 'testosterone'
                ? 'bg-gray-800/30'
                : 'bg-pink-50/50'
            }`}>
              <h3 className={`font-semibold mb-2 ${
                theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
              }`}>
                Exercise Variations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {exercise.variations.map((variation, varIndex) => (
                  <div
                    key={varIndex}
                    className={`px-3 py-2 rounded ${
                      theme === 'testosterone'
                        ? 'bg-gray-700/50 text-blue-200'
                        : 'bg-pink-100/50 text-gray-700'
                    }`}
                  >
                    {variation}
                  </div>
                ))}
              </div>
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
          <li>Warm up thoroughly before starting</li>
          <li>Focus on proper form over repetitions</li>
          <li>Rest 60-90 seconds between sets</li>
          <li>Stay hydrated throughout</li>
          <li>Progress gradually through variations</li>
        </ul>
      </div>
    </div>
  );
} 