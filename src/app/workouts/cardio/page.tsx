'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import WorkoutTimer from '../../components/WorkoutTimer';
import { useTheme } from '../../context/ThemeContext';

interface JumpRopeExercise {
  name: string;
  duration: string;
  instructions: string;
  intensity: 'Low' | 'Medium' | 'High';
  timerSeconds: number;
}

const jumpRopeWorkout: JumpRopeExercise[] = [
  {
    name: "Basic Bounce Warm-up",
    duration: "5 minutes",
    instructions: "Start with basic two-foot jumps, maintain a steady rhythm and light landing.",
    intensity: "Low",
    timerSeconds: 300
  },
  {
    name: "Alternating Step Jumps",
    duration: "3 minutes",
    instructions: "Jump rope while alternating feet like running in place, keep movements controlled.",
    intensity: "Medium",
    timerSeconds: 180
  },
  {
    name: "High Intensity Intervals",
    duration: "30 seconds work, 30 seconds rest x 5 rounds",
    instructions: "Perform double unders or fast basic jumps during work periods, rest completely during breaks.",
    intensity: "High",
    timerSeconds: 30
  },
  {
    name: "Side-to-Side Jumps",
    duration: "2 minutes",
    instructions: "Jump side to side while skipping, maintain good posture and control.",
    intensity: "Medium",
    timerSeconds: 120
  },
  {
    name: "Cool Down Basic Bounce",
    duration: "5 minutes",
    instructions: "Return to basic bounce at a slower pace, focus on breathing and form.",
    intensity: "Low",
    timerSeconds: 300
  }
];

export default function CardioWorkout() {
  const [selectedExercise, setSelectedExercise] = useState<number>(0);
  const [isResting, setIsResting] = useState(false);
  const { theme } = useTheme();

  const handleExerciseComplete = () => {
    if (jumpRopeWorkout[selectedExercise].intensity === "High") {
      if (!isResting) {
        setIsResting(true);
      } else {
        setIsResting(false);
        if (selectedExercise < jumpRopeWorkout.length - 1) {
          setSelectedExercise(selectedExercise + 1);
        }
      }
    } else {
      if (selectedExercise < jumpRopeWorkout.length - 1) {
        setSelectedExercise(selectedExercise + 1);
      }
    }
  };

  const getIntensityColor = (intensity: string) => {
    if (theme === 'testosterone') {
      switch (intensity) {
        case 'Low': return 'bg-emerald-500/50 text-emerald-100';
        case 'Medium': return 'bg-yellow-500/50 text-yellow-100';
        case 'High': return 'bg-red-500/50 text-red-100';
        default: return '';
      }
    } else {
      switch (intensity) {
        case 'Low': return 'bg-green-200/50 text-green-800';
        case 'Medium': return 'bg-amber-200/50 text-amber-800';
        case 'High': return 'bg-rose-200/50 text-rose-800';
        default: return '';
      }
    }
  };

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

      <div className={`${theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'} mb-10`}>
        <h1 className="text-4xl font-bold mb-4">Jump Rope Cardio Workout</h1>
        <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
          A high-energy cardio session using just a jump rope.
          This workout will improve your endurance, coordination, and burn calories effectively.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <div className={`rounded-xl p-6 shadow-lg mb-6 ${
            theme === 'testosterone'
              ? 'bg-gray-900/30 border border-blue-500/20'
              : 'bg-white/30 border border-pink-200/20'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 flex items-center ${
              theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
            }`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 ${
                theme === 'testosterone' ? 'bg-blue-500/20' : 'bg-pink-200/50'
              }`}>
                {selectedExercise + 1}
              </span>
              Current Exercise: {jumpRopeWorkout[selectedExercise].name}
              <span className={`ml-4 px-3 py-1 rounded-full text-sm ${
                getIntensityColor(jumpRopeWorkout[selectedExercise].intensity)
              }`}>
                {jumpRopeWorkout[selectedExercise].intensity}
              </span>
            </h2>
            <div className={`p-4 rounded-lg mb-4 ${
              theme === 'testosterone'
                ? 'bg-gray-800/30'
                : 'bg-pink-50/50'
            }`}>
              <h3 className={`font-semibold mb-2 ${
                theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
              }`}>
                Instructions
              </h3>
              <p className={
                theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
              }>
                {jumpRopeWorkout[selectedExercise].instructions}
              </p>
            </div>
            <div className={
              theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
            }>
              Duration: {jumpRopeWorkout[selectedExercise].duration}
            </div>
          </div>

          <div className={`rounded-xl p-6 shadow-lg ${
            theme === 'testosterone'
              ? 'bg-gray-900/30 border border-blue-500/20'
              : 'bg-white/30 border border-pink-200/20'
          }`}>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
            }`}>
              Upcoming Exercises
            </h3>
            <div className="space-y-4">
              {jumpRopeWorkout.slice(selectedExercise + 1).map((exercise, index) => (
                <div key={index} className="flex items-center">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 ${
                    theme === 'testosterone'
                      ? 'bg-gray-800/50 text-blue-100'
                      : 'bg-pink-100/50 text-gray-800'
                  }`}>
                    {selectedExercise + index + 2}
                  </span>
                  <span className={
                    theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                  }>
                    {exercise.name}
                  </span>
                  <span className={`ml-auto px-2 py-1 rounded-full text-xs ${
                    getIntensityColor(exercise.intensity)
                  }`}>
                    {exercise.intensity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-6">
            <WorkoutTimer 
              initialTime={
                isResting ? 30 : jumpRopeWorkout[selectedExercise].timerSeconds
              } 
              onComplete={handleExerciseComplete}
            />
            {isResting && (
              <div className={`mt-4 rounded p-4 ${
                theme === 'testosterone'
                  ? 'bg-blue-900/30 border-l-4 border-blue-500'
                  : 'bg-pink-100/30 border-l-4 border-pink-400'
              }`}>
                <div className="flex items-center">
                  <svg className={`w-6 h-6 mr-2 ${
                    theme === 'testosterone' ? 'text-blue-400' : 'text-pink-500'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className={
                    theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                  }>
                    Rest Period - Get ready for the next set!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-6 shadow-lg ${
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
          Pro Tips
        </h2>
        <ul className={`list-disc list-inside space-y-2 ${
          theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
        }`}>
          <li>Keep your jumps low - just clear the rope</li>
          <li>Land softly on the balls of your feet</li>
          <li>Keep your elbows close to your body</li>
          <li>Look straight ahead, not down at your feet</li>
          <li>If you need to rest, take breaks between sets</li>
        </ul>
      </div>
    </div>
  );
} 