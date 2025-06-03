'use client';

import React from 'react';

interface Exercise {
  name: string;
  description: string;
  sets: number;
  reps: string;
  videoId: string;
  tips: string[];
  variations: string[];
}

interface WorkoutLayoutProps {
  title: string;
  description: string;
  exercises: Exercise[];
  category: string;
  type: string;
}

export function WorkoutLayout({ title, description, exercises, category, type }: WorkoutLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-300 mb-8">{description}</p>
        
        <div className="space-y-8">
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-3">{exercise.name}</h2>
              <p className="text-gray-300 mb-4">{exercise.description}</p>
              
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${exercise.videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg w-full h-[300px]"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Workout Details</h3>
                  <p className="text-gray-300">Sets: {exercise.sets}</p>
                  <p className="text-gray-300">Reps: {exercise.reps}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Tips</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {exercise.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Variations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {exercise.variations.map((variation, varIndex) => (
                    <div
                      key={varIndex}
                      className="bg-gray-700 rounded px-3 py-2 text-sm"
                    >
                      {variation}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 