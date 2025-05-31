'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';

interface CardioExercise {
  name: string;
  duration: string;
  instructions: string;
  intensity: 'Low' | 'Medium' | 'High';
  equipment: string[];
  timerSeconds: number;
  videoLink?: string;
}

const cardioWorkout: CardioExercise[] = [
  {
    name: "Treadmill Warm-up",
    duration: "5 minutes",
    instructions: "Start with a brisk walk, gradually increasing speed to a light jog. Focus on proper posture and breathing.",
    intensity: "Low",
    equipment: ["Treadmill"],
    timerSeconds: 300,
    videoLink: "https://www.youtube.com/watch?v=9L2b2khySLE"
  },
  {
    name: "Treadmill HIIT",
    duration: "10 minutes",
    instructions: "Alternate between 30 seconds sprint (80-90% max speed) and 30 seconds walk. Maintain good form throughout.",
    intensity: "High",
    equipment: ["Treadmill"],
    timerSeconds: 600,
    videoLink: "https://www.youtube.com/watch?v=HFUjMPJ-WKw"
  },
  {
    name: "Elliptical Cross-Training",
    duration: "8 minutes",
    instructions: "Maintain moderate resistance, alternate between forward and reverse motion every 2 minutes.",
    intensity: "Medium",
    equipment: ["Elliptical Machine"],
    timerSeconds: 480,
    videoLink: "https://www.youtube.com/watch?v=xLq3HEa0KyY"
  },
  {
    name: "Stair Climber Intervals",
    duration: "6 minutes",
    instructions: "Alternate between 1 minute moderate pace and 1 minute fast pace. Keep core engaged.",
    intensity: "High",
    equipment: ["Stair Climber"],
    timerSeconds: 360,
    videoLink: "https://www.youtube.com/watch?v=xSB39wbMz_k"
  },
  {
    name: "Stationary Bike Sprint",
    duration: "10 minutes",
    instructions: "Alternate between 45 seconds high resistance pedaling and 15 seconds fast pedaling with low resistance.",
    intensity: "High",
    equipment: ["Exercise Bike"],
    timerSeconds: 600,
    videoLink: "https://www.youtube.com/watch?v=4tK5VZD8qcw"
  },
  {
    name: "Rowing Machine",
    duration: "8 minutes",
    instructions: "Focus on proper form: legs-core-arms on pull, arms-core-legs on return. Maintain steady pace.",
    intensity: "Medium",
    equipment: ["Rowing Machine"],
    timerSeconds: 480,
    videoLink: "https://www.youtube.com/watch?v=H0r_ZPXJLtg"
  },
  {
    name: "Cool Down",
    duration: "5 minutes",
    instructions: "Light walking on treadmill or easy cycling. Focus on deep breathing and gradually lowering heart rate.",
    intensity: "Low",
    equipment: ["Treadmill", "Exercise Bike"],
    timerSeconds: 300
  }
];

export default function GymCardioWorkout() {
  const [selectedExercise, setSelectedExercise] = useState<number>(0);
  const { theme } = useTheme();

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

      <div className={`rounded-xl p-8 mb-10 relative overflow-hidden ${
        theme === 'testosterone' 
          ? 'bg-gray-900/30 border border-blue-500/20' 
          : 'bg-white/30 border border-pink-200/20'
      }`}>
        <div className={`relative z-10 ${
          theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
        }`}>
          <h1 className="text-4xl font-bold mb-4">Gym Cardio Workout</h1>
          <p className={theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'}>
            A high-intensity cardio circuit using various gym machines.
            Complete each exercise in sequence for a full cardio workout.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          </svg>
        </div>
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
              Current Exercise: {cardioWorkout[selectedExercise].name}
              <span className={`ml-4 px-3 py-1 rounded-full text-sm ${
                getIntensityColor(cardioWorkout[selectedExercise].intensity)
              }`}>
                {cardioWorkout[selectedExercise].intensity}
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
                {cardioWorkout[selectedExercise].instructions}
              </p>
            </div>
            <div className={`mb-4 ${
              theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
            }`}>
              Duration: {cardioWorkout[selectedExercise].duration}
            </div>
            <div className={`p-4 rounded-lg ${
              theme === 'testosterone'
                ? 'bg-gray-800/30'
                : 'bg-pink-50/50'
            }`}>
              <h3 className={`font-semibold mb-2 ${
                theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
              }`}>
                Equipment Needed
              </h3>
              <ul className={`list-disc list-inside ${
                theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
              }`}>
                {cardioWorkout[selectedExercise].equipment.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {cardioWorkout[selectedExercise].videoLink && (
              <div className="mt-4">
                <a 
                  href={cardioWorkout[selectedExercise].videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 rounded-lg ${
                    theme === 'testosterone'
                      ? 'bg-blue-500/20 text-blue-100 hover:bg-blue-500/30'
                      : 'bg-pink-200/50 text-gray-800 hover:bg-pink-200/70'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/>
                  </svg>
                  Watch Demo
                </a>
              </div>
            )}
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
              {cardioWorkout.slice(selectedExercise + 1).map((exercise, index) => (
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

        <div className={`rounded-xl p-6 shadow-lg ${
          theme === 'testosterone'
            ? 'bg-gray-900/30 border border-blue-500/20'
            : 'bg-white/30 border border-pink-200/20'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
          }`}>
            Workout Controls
          </h2>
          <div className="space-y-4">
            <button
              onClick={() => setSelectedExercise(0)}
              className={`w-full py-3 rounded-lg ${
                theme === 'testosterone'
                  ? 'bg-blue-500/20 text-blue-100 hover:bg-blue-500/30'
                  : 'bg-pink-200/50 text-gray-800 hover:bg-pink-200/70'
              }`}
            >
              Restart Workout
            </button>
            <button
              onClick={() => {
                if (selectedExercise < cardioWorkout.length - 1) {
                  setSelectedExercise(selectedExercise + 1);
                }
              }}
              className={`w-full py-3 rounded-lg ${
                selectedExercise >= cardioWorkout.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : theme === 'testosterone'
                    ? 'bg-blue-500/20 text-blue-100 hover:bg-blue-500/30'
                    : 'bg-pink-200/50 text-gray-800 hover:bg-pink-200/70'
              }`}
              disabled={selectedExercise >= cardioWorkout.length - 1}
            >
              Next Exercise
            </button>
          </div>

          <div className={`mt-8 p-4 rounded-lg ${
            theme === 'testosterone'
              ? 'bg-gray-800/30'
              : 'bg-pink-50/50'
          }`}>
            <h3 className={`font-semibold mb-4 ${
              theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
            }`}>
              Workout Tips
            </h3>
            <ul className={`list-disc list-inside space-y-2 ${
              theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
            }`}>
              <li>Stay hydrated throughout the workout</li>
              <li>Monitor your heart rate</li>
              <li>Adjust intensity based on your fitness level</li>
              <li>Focus on proper form over speed</li>
              <li>Take short breaks between exercises if needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 