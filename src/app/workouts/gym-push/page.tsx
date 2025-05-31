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

const pushExercises: Exercise[] = [
  // Day 1 Exercises
  {
    name: "Barbell Bench Press",
    sets: 4,
    reps: "8-12",
    instructions: "Lie on bench, grip barbell slightly wider than shoulders, lower to chest and press up with control.",
    equipment: ["Barbell", "Bench"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=rT7DgCr-3pg"
  },
  {
    name: "Incline Dumbbell Press",
    sets: 3,
    reps: "10-12",
    instructions: "Set bench to 30-45 degrees, press dumbbells up with controlled movement, focus on upper chest.",
    equipment: ["Dumbbells", "Incline Bench"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=8iPEnn-ltC8"
  },
  {
    name: "Seated Military Press",
    sets: 3,
    reps: "8-12",
    instructions: "Sit with back supported, press barbell or dumbbells overhead with controlled movement.",
    equipment: ["Barbell/Dumbbells", "Bench"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=2yjwXTZQDDI"
  },
  {
    name: "Lateral Raises",
    sets: 3,
    reps: "12-15",
    instructions: "Stand with dumbbells at sides, raise arms out to shoulder level, control descent.",
    equipment: ["Dumbbells"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=3VcKaXpzqRo"
  },
  {
    name: "Tricep Rope Pushdown",
    sets: 3,
    reps: "12-15",
    instructions: "Use rope attachment, keep elbows at sides, extend arms fully and squeeze triceps.",
    equipment: ["Cable Machine", "Rope Attachment"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=vB5OHsJ3EME"
  },
  {
    name: "Overhead Tricep Extension",
    sets: 3,
    reps: "12-15",
    instructions: "Hold dumbbell overhead with both hands, lower behind head and extend arms.",
    equipment: ["Dumbbell"],
    day: 1,
    videoLink: "https://www.youtube.com/watch?v=_gsUck-7M74"
  },
  // Day 2 Exercises
  {
    name: "Dumbbell Bench Press",
    sets: 4,
    reps: "10-12",
    instructions: "Lie on flat bench, press dumbbells up together, focus on chest contraction.",
    equipment: ["Dumbbells", "Bench"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=VmB1G1K7v94"
  },
  {
    name: "Machine Chest Press",
    sets: 3,
    reps: "12-15",
    instructions: "Adjust seat height, press handles forward with controlled movement.",
    equipment: ["Chest Press Machine"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=xUm0BiZCWlQ"
  },
  {
    name: "Arnold Press",
    sets: 3,
    reps: "10-12",
    instructions: "Start with palms facing you, rotate dumbbells as you press overhead.",
    equipment: ["Dumbbells"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=3ml7BH7mNwQ"
  },
  {
    name: "Front Raises",
    sets: 3,
    reps: "12-15",
    instructions: "Hold dumbbells in front, raise to shoulder height with straight arms.",
    equipment: ["Dumbbells"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=sOcYlBI85hc"
  },
  {
    name: "Skull Crushers",
    sets: 3,
    reps: "12-15",
    instructions: "Lie on bench, lower barbell to forehead, extend arms fully.",
    equipment: ["EZ Bar", "Bench"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=d_KZxkY_0cM"
  },
  {
    name: "Cable Tricep Extensions",
    sets: 3,
    reps: "12-15",
    instructions: "Face away from cable machine, extend arms overhead with rope attachment.",
    equipment: ["Cable Machine", "Rope Attachment"],
    day: 2,
    videoLink: "https://www.youtube.com/watch?v=2-LAMcpzODU"
  }
];

export default function GymPushWorkout() {
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
          <h1 className="text-4xl font-bold mb-4">Gym Push Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Build strength and muscle with these gym-based push exercises.
            Focus on proper form and progressive overload for maximum results.
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
          <li>Always warm up with lighter weights before your working sets</li>
          <li>Focus on proper form and full range of motion</li>
          <li>Progress gradually by increasing weight or reps</li>
          <li>Rest 1-2 minutes between sets for optimal recovery</li>
          <li>Stay hydrated throughout your workout</li>
        </ul>
      </div>
    </div>
  );
} 