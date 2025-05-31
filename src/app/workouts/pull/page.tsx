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

const pullExercises: Exercise[] = [
  // Day 1 Exercises
  {
    name: "Band Seated Row",
    sets: 3,
    reps: "12-15",
    instructions: "Sit with legs extended, wrap band around feet, pull handles to chest while squeezing shoulder blades.",
    equipment: ["Resistance Band"],
    day: 1
  },
  {
    name: "Band Lat Pulldown",
    sets: 3,
    reps: "12-15",
    instructions: "Anchor band above head, pull down towards chest while keeping chest up and shoulders back.",
    equipment: ["Resistance Band"],
    day: 1,
    videoLink: "https://youtube.com/shorts/XFUHrs8pnx8"
  },
  {
    name: "Band Face Pull",
    sets: 3,
    reps: "12-15",
    instructions: "Anchor band at head height, pull towards face while keeping elbows high and squeezing shoulder blades.",
    equipment: ["Resistance Band"],
    day: 1,
    videoLink: "https://youtube.com/shorts/OIMUU2Q-upU"
  },
  {
    name: "Band Pull-Apart",
    sets: 3,
    reps: "15-20",
    instructions: "Hold band in front of chest, pull apart focusing on rear deltoids and upper back.",
    equipment: ["Resistance Band"],
    day: 1
  },
  {
    name: "Band Biceps Curl",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, curl handles up with controlled movement and pause at top.",
    equipment: ["Resistance Band"],
    day: 1
  },
  {
    name: "Band Hammer Curl",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, perform hammer curls with palms facing each other. Add mid-rep pauses and slow negatives.",
    equipment: ["Resistance Band"],
    day: 1
  },
  // Day 2 Exercises
  {
    name: "Single-Arm Band Row",
    sets: 3,
    reps: "12-15 per side",
    instructions: "Anchor band low, perform single-arm rows focusing on back engagement.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Wide-Grip Band Pulldown",
    sets: 3,
    reps: "12-15",
    instructions: "Hold band wide, pull down towards chest while maintaining wide grip position.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Bent-Over Band Row",
    sets: 3,
    reps: "12-15",
    instructions: "Hinge forward, pull band towards chest while keeping back straight.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Band Rear-Fly",
    sets: 3,
    reps: "12-15",
    instructions: "Bend forward, raise arms out to sides focusing on rear deltoids.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Band Hammer Curl",
    sets: 3,
    reps: "12-15",
    instructions: "Stand on band, perform hammer curls with emphasis on peak contraction.",
    equipment: ["Resistance Band"],
    day: 2
  },
  {
    name: "Band Concentration Curl",
    sets: 3,
    reps: "12-15 per arm",
    instructions: "Seated, elbow on inner thigh, perform strict concentration curls.",
    equipment: ["Resistance Band"],
    day: 2
  }
];

export default function PullWorkout() {
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
          <h1 className="text-4xl font-bold mb-4">Pull Day Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            Target your back and biceps with these resistance band exercises.
            Focus on controlled movements and proper form for maximum muscle engagement.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm10 10.37l-1.37-1.37c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L16 16.91V9c0-1.1-.9-2-2-2s-2 .9-2 2v7.91l-3.21-3.21c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L6 14.37c-.39.39-.39 1.02 0 1.41l4.48 4.48c.79.79 1.78 1.21 2.83 1.21s2.04-.42 2.83-1.21l4.48-4.48c.39-.39.39-1.02 0-1.41z"/>
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
        {pullExercises
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
        <div className={`p-4 rounded-lg mb-4 ${
          theme === 'testosterone'
            ? 'bg-gray-800/30'
            : 'bg-pink-50/50'
        }`}>
          <p className={`italic ${
            theme === 'testosterone' ? 'text-blue-200' : 'text-gray-700'
          }`}>
            {selectedDay === 1 
              ? "Add mid-rep pauses and slow negatives on curls for increased time under tension"
              : "Implement partial reps and isometric holds for enhanced muscle activation"}
          </p>
        </div>
        <ul className={`list-disc list-inside space-y-2 ${
          theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
        }`}>
          <li>Start with lighter resistance to warm up</li>
          <li>Focus on squeezing your back muscles</li>
          <li>Keep your core engaged throughout</li>
          <li>Control the negative (eccentric) portion of each movement</li>
          <li>Maintain proper posture throughout exercises</li>
        </ul>
      </div>
    </div>
  );
} 