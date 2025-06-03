'use client';

import React from 'react';
import { WorkoutLayout } from '../../../components/WorkoutLayout';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext';

const exercises = [
  {
    name: 'Push-Ups',
    description: 'The fundamental pushing exercise for chest, shoulders, and triceps.',
    sets: 4,
    reps: '10-15',
    videoId: 'IODxDxX7oi4',
    tips: [
      'Keep your core tight throughout the movement',
      'Maintain a straight line from head to heels',
      'Lower your chest to about 2 inches from the ground',
      'Push through your palms evenly'
    ],
    variations: [
      'Regular Push-Ups',
      'Diamond Push-Ups (triceps focus)',
      'Wide Push-Ups (chest focus)',
      'Pike Push-Ups (shoulder focus)'
    ]
  },
  {
    name: 'Dips',
    description: 'Advanced pushing movement targeting chest and triceps.',
    sets: 3,
    reps: '8-12',
    videoId: 'wjUmnZH528Y',
    tips: [
      'Keep your elbows close to your body',
      'Lower until your upper arms are parallel to the ground',
      'Control the descent',
      'Lock out at the top'
    ],
    variations: [
      'Bench Dips',
      'Straight Bar Dips',
      'Korean Dips',
      'Ring Dips (advanced)'
    ]
  },
  {
    name: 'Pseudo Planche Push-Ups',
    description: 'Advanced variation targeting shoulders and upper chest.',
    sets: 3,
    reps: '6-10',
    videoId: 'C-SML6xnVkI',
    tips: [
      'Lean forward with straight arms',
      'Keep fingers pointing towards your feet',
      'Maintain hollow body position',
      'Push through full range of motion'
    ],
    variations: [
      'Lean Push-Ups',
      'Tuck Planche Push-Ups',
      'Advanced Tuck Planche Push-Ups',
      'Full Planche Push-Ups (expert)'
    ]
  },
  {
    name: 'Handstand Push-Ups Progression',
    description: 'Ultimate shoulder and upper body strength exercise.',
    sets: 3,
    reps: '4-8',
    videoId: 'tQhrk6WMcKw',
    tips: [
      'Start with wall handstands',
      'Build shoulder strength progressively',
      'Keep core tight and body straight',
      'Practice kick-ups regularly'
    ],
    variations: [
      'Pike Push-Ups',
      'Wall Headstand Hold',
      'Wall Handstand Hold',
      'Negative Handstand Push-Ups'
    ]
  }
];

export default function CalisthenicsPushPage() {
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
          <h1 className="text-4xl font-bold mb-4">Calisthenics Push Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Master bodyweight pushing exercises to build strength and muscle.
            Focus on proper form and progression for maximum results.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
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
          <li>Always warm up properly with easier variations</li>
          <li>Focus on perfect form before increasing difficulty</li>
          <li>Progress gradually through exercise variations</li>
          <li>Rest 2-3 minutes between sets for strength work</li>
          <li>Practice skill work when fresh at start of workout</li>
        </ul>
      </div>
    </div>
  );
} 