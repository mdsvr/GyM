'use client';

import React from 'react';
import { WorkoutLayout } from '../../../components/WorkoutLayout';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext';

const exercises = [
  {
    name: 'Floor L-Sits',
    description: 'A fundamental gymnastics hold that builds incredible core strength, hip flexor power, and shoulder stability. This exercise demonstrates true body control and is a gateway to many advanced calisthenics skills.',
    sets: 4,
    reps: '10-20 seconds',
    videoId: 'IUZJoSP66HI',
    tips: [
      'Start with feet supported on ground',
      'Push hands firmly into floor (protraction)',
      'Keep arms completely straight and locked',
      'Point toes and maintain tension',
      'Progress gradually through variations',
      'Focus on hip flexor compression'
    ],
    variations: [
      'Foot Supported L-Sit (beginner)',
      'One Leg Extended (intermediate)',
      'Tuck L-Sit (progression)',
      'Advanced Tuck L-Sit',
      'Single Leg L-Sit',
      'Full L-Sit (advanced)'
    ]
  },
  {
    name: 'Floor Dragon Flag Progression',
    description: 'An advanced core exercise popularized by Bruce Lee. This movement develops exceptional core strength, body control, and straight-arm strength while building an impressive six-pack. It\'s considered one of the most challenging bodyweight core exercises.',
    sets: 3,
    reps: '5-8',
    videoId: 'pvz7k5gO-DE',
    tips: [
      'Start with basic negative reps',
      'Keep body completely straight',
      'Maintain tight core throughout',
      'Control the descent speed',
      'Use wall support initially',
      'Focus on full body tension'
    ],
    variations: [
      'Tucked Dragon Flag (beginner)',
      'Single Leg Dragon Flag',
      'Negative Dragon Flags',
      'Half Dragon Flag Hold',
      'Full Dragon Flag',
      'Dragon Flag Raises (advanced)'
    ]
  },
  {
    name: 'Hollow Body Progressions',
    description: 'A fundamental gymnastics position that develops rock-solid core control and body awareness. This exercise is crucial for advanced calisthenics and creates the foundation for many complex movements while sculpting your abs.',
    sets: 4,
    reps: '20-45 seconds',
    videoId: 'LlDNef_Ztsc',
    tips: [
      'Start with knees bent, arms by sides',
      'Press lower back firmly to ground',
      'Point toes and extend legs',
      'Keep shoulders off the ground',
      'Maintain steady breathing',
      'Progress by extending limbs'
    ],
    variations: [
      'Dead Bug Exercise (beginner)',
      'Hollow Body with Bent Knees',
      'Full Hollow Body Hold',
      'Hollow Rocks',
      'Extended Hollow Hold',
      'Weighted Hollow Hold (advanced)'
    ]
  },
  {
    name: 'Floor Plank Variations',
    description: 'Advanced variations of the classic plank that challenge your core stability, endurance, and total body control. These progressions turn a basic exercise into a comprehensive core workout that builds functional strength.',
    sets: 3,
    reps: '30-60 seconds',
    videoId: 'F-nQ_KJgfCY',
    tips: [
      'Maintain perfect spinal alignment',
      'Engage glutes and quads',
      'Keep breathing steady and controlled',
      'Progress through variations slowly',
      'Focus on quality over duration',
      'Check form in a mirror/video'
    ],
    variations: [
      'Standard Plank (foundation)',
      'Long Lever Plank (arms extended)',
      'Side Plank Variations',
      'Dynamic Plank Movements',
      'Plank Body Saws',
      'Copenhagen Plank (advanced)'
    ]
  },
  {
    name: 'V-Sit Progressions',
    description: 'An advanced progression from the L-sit that develops exceptional core strength, flexibility, and balance. This movement challenges your compression strength and demonstrates high-level body control.',
    sets: 3,
    reps: '10-20 seconds',
    videoId: 'k_vG1umxVYQ',
    tips: [
      'Begin with bent knees tucked in',
      'Keep chest lifted throughout',
      'Point toes and maintain tension',
      'Lean back gradually with control',
      'Balance weight through hands',
      'Work on active flexibility'
    ],
    variations: [
      'Seated Pike Compression',
      'Tuck V-Sit Hold',
      'Single Leg V-Sit',
      'Low V-Sit Hold',
      'High V-Sit',
      'Full V-Sit (advanced)'
    ]
  }
];

export default function MinimalCoreWorkout() {
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
          <h1 className="text-4xl font-bold mb-4">No-Equipment Core Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Build a strong core using bodyweight exercises at home.
            Master these fundamental movements for total core control.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5.5l6 4.5v9l-6-4.5L6 18.5v-9l6-4.5zM12 3L4 8v12l8-6 8 6V8l-8-5z"/>
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

            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                src={`https://www.youtube.com/embed/${exercise.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-[300px]"
              />
            </div>

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
          Training Tips
        </h2>
        <ul className={`list-disc list-inside space-y-2 ${
          theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
        }`}>
          <li>Warm up with basic movements first</li>
          <li>Focus on maintaining proper form</li>
          <li>Progress through variations gradually</li>
          <li>Rest 30-60 seconds between sets</li>
          <li>Practice breathing during holds</li>
        </ul>
      </div>
    </div>
  );
} 