'use client';

import React from 'react';
import { WorkoutLayout } from '../../../components/WorkoutLayout';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext';

const exercises = [
  {
    name: 'Wall Handstand Progressions',
    description: 'The foundation for developing handstand mastery. This progression systematically builds the strength, balance, and body awareness needed for freestanding handstands while using the wall as a safety net and confidence builder.',
    sets: 5,
    reps: '20-45 seconds',
    videoId: 'd6_lcWtQDxw',
    tips: [
      'Start with chest-to-wall holds',
      'Keep arms completely locked',
      'Engage core and squeeze legs',
      'Practice shoulder alignment',
      'Build wrist strength gradually',
      'Focus on breathing while inverted'
    ],
    variations: [
      'Wall Plank (shoulder prep)',
      'Wall Walks (strength building)',
      'Chest-to-Wall Hold (alignment)',
      'Back-to-Wall Hold (balance)',
      'Toe Pulls (balance work)',
      'Wall Handstand Push-Ups'
    ]
  },
  {
    name: 'Floor L-Sit Progressions',
    description: 'A fundamental straight-arm strength skill that develops incredible core compression, hip flexor strength, and shoulder stability. Essential for advanced calisthenics and a great measure of overall body control.',
    sets: 4,
    reps: '10-20 seconds',
    videoId: 'IUZJoSP66HI',
    tips: [
      'Start with foot-supported holds',
      'Push down hard through shoulders',
      'Keep arms straight and locked',
      'Point toes and compress hips',
      'Progress systematically',
      'Work on scapular depression'
    ],
    variations: [
      'Foot-Supported L-Sit',
      'One-Foot L-Sit',
      'Tuck L-Sit',
      'Advanced Tuck L-Sit',
      'Single-Leg L-Sit',
      'Full L-Sit'
    ]
  },
  {
    name: 'Crow Pose Progressions',
    description: 'An accessible arm balance that builds wrist strength, shoulder stability, and core control. This skill serves as a gateway to more advanced arm balances and develops the confidence needed for inversions.',
    sets: 4,
    reps: '10-30 seconds',
    videoId: 'Hml31hm-Zkg',
    tips: [
      'Place knees high on triceps',
      'Keep arms bent at 90 degrees',
      'Look slightly forward',
      'Engage core throughout',
      'Shift weight forward slowly',
      'Practice on soft surface'
    ],
    variations: [
      'Elevated Crow Pose',
      'Knee-Supported Crow',
      'One-Legged Crow',
      'Full Crow Pose',
      'Crane Pose (straight arms)',
      'Flying Crow'
    ]
  },
  {
    name: 'Floor Pseudo Planche',
    description: 'A preparatory exercise for the full planche that develops exceptional pushing strength, shoulder stability, and core control. This movement is crucial for building the foundation of advanced pushing skills.',
    sets: 3,
    reps: '10-20 seconds',
    videoId: 'fYsnHHm_bvM',
    tips: [
      'Lean forward maximally',
      'Keep arms straight',
      'Round upper back slightly',
      'Point fingers backward',
      'Maintain full body tension',
      'Progress lean gradually'
    ],
    variations: [
      'Planche Leans',
      'Tuck Planche',
      'Advanced Tuck',
      'One-Leg Extension',
      'Straddle Planche',
      'Full Planche'
    ]
  },
  {
    name: 'Wall Tiger Bend Pushups',
    description: 'An advanced pushing variation that combines straight-arm strength with mobility. This exercise develops the unique strength pattern needed for skills like the planche and helps prevent elbow issues in straight-arm work.',
    sets: 3,
    reps: '5-8',
    videoId: 'UZ-1jwG7aQ4',
    tips: [
      'Start in wall handstand',
      'Bend arms outward slowly',
      'Keep core tight throughout',
      'Maintain shoulder control',
      'Push back to straight arms',
      'Focus on elbow path'
    ],
    variations: [
      'Wall-Assisted Bends',
      'Negative Tiger Bends',
      'Partial Range Tiger Bends',
      'Full Tiger Bends',
      'Multiple Rep Tiger Bends',
      'Freestanding Tiger Bends'
    ]
  }
];

export default function MinimalSkillsWorkout() {
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
          <h1 className="text-4xl font-bold mb-4">No-Equipment Skills Training</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Master advanced calisthenics skills using minimal equipment.
            Progress through fundamental movements to achieve impressive skills.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z"/>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
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
          <li>Practice skills when fresh and warmed up</li>
          <li>Focus on quality over quantity</li>
          <li>Master each progression before moving on</li>
          <li>Rest adequately between attempts</li>
          <li>Film yourself to check form</li>
        </ul>
      </div>
    </div>
  );
} 