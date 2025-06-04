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
  advancedTip?: string;
  videoLink?: string;
}

const legExercises: Exercise[] = [
  // Day 1 Exercises
  {
    name: "Band Squat",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band with feet shoulder-width apart, hold handles at shoulders. Squat down keeping chest up and knees tracking over toes. Drive through heels to return to start.",
    equipment: ["Heavy Resistance Band"],
    day: 1,
    advancedTip: "Include pulse reps at squat bottom position for increased time under tension"
  },
  {
    name: "Band Bulgarian Split Squat",
    sets: 3,
    reps: "10-12 per leg",
    instructions: "Stand on band with one foot, back foot elevated. Hold handles at shoulders. Lower into split squat position, keeping front knee tracking over toe. Push through front heel to return to start.",
    equipment: ["Medium/Heavy Resistance Band", "Elevated Surface"],
    day: 1
  },
  {
    name: "Band Glute Bridge",
    sets: 3,
    reps: "15",
    instructions: "Lie on back, band across hips anchored to ground. Plant feet flat, drive hips up squeezing glutes at top. Lower with control.",
    equipment: ["Medium Resistance Band", "Floor Mat"],
    day: 1
  },
  {
    name: "Band Romanian Deadlift",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, slight bend in knees. Hinge at hips pushing them back while maintaining flat back. Feel stretch in hamstrings, then drive hips forward to return to start.",
    equipment: ["Heavy Resistance Band"],
    day: 1
  },
  {
    name: "Band Calf Raise",
    sets: 3,
    reps: "15-20",
    instructions: "Stand on band with balls of feet on elevated surface. Hold handles at sides. Rise up onto toes, pause at top, then lower with control.",
    equipment: ["Medium Resistance Band", "Step/Elevated Surface"],
    day: 1
  },
  {
    name: "Lateral Band Walk",
    sets: 3,
    reps: "20 steps each way",
    instructions: "Place band around legs just above knees. Step sideways maintaining tension on band, keeping feet parallel and knees slightly bent. Repeat in opposite direction.",
    equipment: ["Light/Medium Resistance Band"],
    day: 1
  },
  // Day 2 Exercises
  {
    name: "Single-Leg Band Squat",
    sets: 3,
    reps: "8-10 per leg",
    instructions: "Stand on one leg with band under foot, holding handles at shoulders. Lower into single-leg squat while maintaining balance. Push through heel to return to start.",
    equipment: ["Medium Resistance Band"],
    day: 2,
    videoLink: "https://youtu.be/CwaL22sMRXM?si=gKA4jEencbsGKmZq",
    advancedTip: "Use 3-second descent with pause at bottom"
  },
  {
    name: "Band Good Morning",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, handles across upper back/shoulders. Hinge at hips with soft knees, maintaining flat back. Drive hips forward to return to start.",
    equipment: ["Heavy Resistance Band"],
    day: 2
  },
  {
    name: "Band Reverse Lunge",
    sets: 3,
    reps: "10-12 per leg",
    instructions: "Stand on band holding handles at shoulders. Step back into lunge position, lowering back knee toward ground. Push through front heel to return to start.",
    equipment: ["Medium/Heavy Resistance Band"],
    day: 2
  },
  {
    name: "Band Donkey Kick",
    sets: 3,
    reps: "12-15 per leg",
    instructions: "On hands and knees, loop band around foot and anchor under hands. Kick leg back and up while maintaining neutral spine. Control return to start.",
    equipment: ["Light/Medium Resistance Band", "Floor Mat"],
    day: 2
  },
  {
    name: "Band Side Lunge",
    sets: 3,
    reps: "10-12 per side",
    instructions: "Stand on band, handles at shoulders. Step out to side, sitting back into lunge while keeping other leg straight. Push through stepping foot to return to start.",
    equipment: ["Medium Resistance Band"],
    day: 2
  },
  {
    name: "Single-Leg Band Calf Raise",
    sets: 3,
    reps: "15 per leg",
    instructions: "Stand on one foot on elevated surface with band under foot. Hold handles at sides. Rise up onto toes, pause, then lower with control.",
    equipment: ["Light/Medium Resistance Band", "Step/Elevated Surface"],
    day: 2
  }
];

export default function LegsWorkout() {
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
          <h1 className="text-4xl font-bold mb-4">Resistance Band Legs Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            A comprehensive legs workout focusing on all major lower body muscle groups using resistance bands.
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
        {legExercises
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
                  className={`ml-4 text-sm px-3 py-1 rounded-full ${
                    theme === 'testosterone'
                      ? 'bg-blue-500/20 text-blue-100 hover:bg-blue-500/30'
                      : 'bg-pink-200/50 text-gray-800 hover:bg-pink-300/50'
                  }`}
                >
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
              
              {exercise.advancedTip && (
                <div className={`mt-4 p-3 rounded-lg ${
                  theme === 'testosterone'
                    ? 'bg-blue-500/10 border border-blue-500/20'
                    : 'bg-pink-100/50 border border-pink-200/20'
                }`}>
                  <p className={`text-sm font-semibold ${
                    theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                  }`}>
                    Advanced Tip: {exercise.advancedTip}
                  </p>
                </div>
              )}
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
          <li>Warm up thoroughly with dynamic stretches before starting</li>
          <li>Focus on proper form and controlled movements</li>
          <li>Rest 60-90 seconds between sets for compound movements</li>
          <li>Keep core engaged throughout all exercises</li>
          <li>Progress by increasing band resistance or adding advanced variations</li>
          <li>Stay hydrated and listen to your body</li>
        </ul>
      </div>
    </div>
  );
} 