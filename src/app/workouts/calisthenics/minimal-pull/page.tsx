'use client';

import React from 'react';
import { WorkoutLayout } from '../../../components/WorkoutLayout';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext';

const exercises = [
  {
    name: 'Door Pull-Ups',
    description: 'A creative solution for building back and biceps strength using a sturdy door. This exercise targets your latissimus dorsi, biceps, and rear deltoids while also engaging your core. Perfect for when you don\'t have access to a pull-up bar.',
    sets: 4,
    reps: '5-10',
    videoId: 'ADnoyLFVDcc',
    tips: [
      'Choose a very sturdy door that opens away from you',
      'Place a thick towel over the top edge to protect hands and door',
      'Test the door\'s stability with partial weight first',
      'Keep core engaged and legs straight or slightly bent',
      'Pull until your chin is over your hands',
      'Lower with control to protect the door'
    ],
    variations: [
      'Assisted Door Pull-Ups (feet supported)',
      'Negative Pull-Ups (focus on lowering)',
      'Close Grip Door Pull-Ups (biceps focus)',
      'Commando Style (alternating sides)',
      'Towel Grip for extra grip strength',
      'Archer Pull-Ups for unilateral strength'
    ]
  },
  {
    name: 'Table Rows',
    description: 'An excellent horizontal pulling exercise using a sturdy table. This movement builds upper back strength, improves posture, and targets the middle trapezius and rhomboids. Great progression towards pull-ups and essential for balanced shoulder health.',
    sets: 4,
    reps: '10-15',
    videoId: '5W8F6MzZ8Rk',
    tips: [
      'Choose a very stable table that won\'t tip',
      'Keep body straight like a plank throughout',
      'Pull chest to table edge with elbows close',
      'Squeeze shoulder blades at top',
      'Lower with control to full arm extension',
      'Adjust difficulty by moving feet position'
    ],
    variations: [
      'Incline Rows (easier, feet closer to table)',
      'Decline Rows (harder, feet elevated)',
      'Wide Grip for outer back emphasis',
      'Close Grip for more arm focus',
      'Single Arm Rows for unilateral strength',
      'Archer Rows for advanced strength'
    ]
  },
  {
    name: 'Bedsheet Rows',
    description: 'A versatile pulling exercise using bedsheets over a door. This exercise allows for various angles and grips, making it excellent for back development and grip strength. The instability of the sheets also engages more stabilizer muscles.',
    sets: 3,
    reps: '12-15',
    videoId: 'EYwWCgM198U',
    tips: [
      'Use strong sheets and close door completely',
      'Test stability gradually before full weight',
      'Keep body straight and core engaged',
      'Pull elbows back and down',
      'Control the swing of the sheets',
      'Maintain tension throughout movement'
    ],
    variations: [
      'High Rows (upper back focus)',
      'Low Rows (mid-back focus)',
      'Face Pulls for rear deltoids',
      'Wide Grip Rows for lat spread',
      'Assisted One-Arm Rows',
      'Isometric Holds for endurance'
    ]
  },
  {
    name: 'Floor Pulls',
    description: 'An innovative pulling exercise performed on a smooth floor surface. This exercise uses friction and body positioning to create resistance, targeting the back muscles in a unique way while also engaging the core throughout the movement.',
    sets: 3,
    reps: '15-20',
    videoId: 'WJ6eqpqj7lM',
    tips: [
      'Use a smooth, clean floor surface',
      'Keep chest up and core tight',
      'Pull primarily with back muscles',
      'Maintain constant tension',
      'Focus on squeezing shoulder blades',
      'Use socks or gliders for smooth movement'
    ],
    variations: [
      'Sliding Arc Pulls (wider range)',
      'Isometric Floor Pulls',
      'Single-Arm Floor Pulls',
      'Dynamic Floor Pulls with pause',
      'Floor Pull to Push-Up transition',
      'Floor Pull with leg elevation'
    ]
  },
  {
    name: 'Towel Bicep Curls',
    description: 'A creative way to isolate and strengthen the biceps using household items. This exercise teaches tension control and builds functional arm strength while also improving grip endurance. Perfect for maintaining bicep development without weights.',
    sets: 3,
    reps: '12-15 per arm',
    videoId: 'lueNRB_l5zk',
    tips: [
      'Use a twisted towel for better grip',
      'Keep upper arm still against body',
      'Control the resistance throughout',
      'Focus on peak contraction',
      'Maintain steady breathing',
      'Progress by adjusting towel tension'
    ],
    variations: [
      'Standing Bilateral Curls',
      'Seated Unilateral Curls',
      'Isometric Peak Holds',
      'Alternating Arm Curls',
      'Tempo Variations (slow negatives)',
      'Resistance Band + Towel Combo'
    ]
  }
];

export default function MinimalPullWorkout() {
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
          <h1 className="text-4xl font-bold mb-4">No-Equipment Pull Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Build back and biceps strength using household items.
            Get creative with everyday objects for an effective workout.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm10 10.37l-1.37-1.37c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L16 16.91V9c0-1.1-.9-2-2-2s-2 .9-2 2v7.91l-3.21-3.21c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L6 14.37c-.39.39-.39 1.02 0 1.41l4.48 4.48c.79.79 1.78 1.21 2.83 1.21s2.04-.42 2.83-1.21l4.48-4.48c.39-.39.39-1.02 0-1.41z"/>
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
          <li>Always test equipment stability before use</li>
          <li>Focus on controlled movements</li>
          <li>Adapt exercises based on available items</li>
          <li>Rest 1-2 minutes between sets</li>
          <li>Be creative but prioritize safety</li>
        </ul>
      </div>
    </div>
  );
} 