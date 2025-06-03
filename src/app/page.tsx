'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from './context/ThemeContext';

interface WorkoutCategory {
  title: string;
  description: string;
  links: {
    name: string;
    path: string;
    icon: string;
  }[];
}

const workoutCategories: WorkoutCategory[] = [
  {
    title: "Gym Equipment Workouts",
    description: "Full workout routines using gym machines and free weights.",
    links: [
      {
        name: "Gym Push Workout",
        path: "/workouts/gym-push",
        icon: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"
      },
      {
        name: "Gym Pull Workout",
        path: "/workouts/gym-pull",
        icon: "M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm10 10.37l-1.37-1.37c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L16 16.91V9c0-1.1-.9-2-2-2s-2 .9-2 2v7.91l-3.21-3.21c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L6 14.37c-.39.39-.39 1.02 0 1.41l4.48 4.48c.79.79 1.78 1.21 2.83 1.21s2.04-.42 2.83-1.21l4.48-4.48c.39-.39.39-1.02 0-1.41z"
      },
      {
        name: "Gym Legs Workout",
        path: "/workouts/gym-legs",
        icon: "M12 5.5l6 4.5v9l-6-4.5L6 18.5v-9l6-4.5zM12 3L4 8v12l8-6 8 6V8l-8-5z"
      },
      {
        name: "Gym Cardio Workout",
        path: "/workouts/gym-cardio",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }
    ]
  },
  {
    title: "Resistance Band Workouts",
    description: "Complete workout routines using resistance bands and minimal equipment.",
    links: [
      {
        name: "Push Workout",
        path: "/workouts/push",
        icon: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"
      },
      {
        name: "Pull Workout",
        path: "/workouts/pull",
        icon: "M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm10 10.37l-1.37-1.37c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L16 16.91V9c0-1.1-.9-2-2-2s-2 .9-2 2v7.91l-3.21-3.21c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L6 14.37c-.39.39-.39 1.02 0 1.41l4.48 4.48c.79.79 1.78 1.21 2.83 1.21s2.04-.42 2.83-1.21l4.48-4.48c.39-.39.39-1.02 0-1.41z"
      },
      {
        name: "Legs Workout",
        path: "/workouts/legs",
        icon: "M12 5.5l6 4.5v9l-6-4.5L6 18.5v-9l6-4.5zM12 3L4 8v12l8-6 8 6V8l-8-5z"
      },
      {
        name: "Cardio Workout",
        path: "/workouts/cardio",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }
    ]
  },
  {
    title: "Calisthenics Workouts",
    description: "Master bodyweight exercises and advanced calisthenics skills with minimal equipment.",
    links: [
      {
        name: "Push Workout",
        path: "/workouts/calisthenics/push",
        icon: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"
      },
      {
        name: "Pull Workout",
        path: "/workouts/calisthenics/pull",
        icon: "M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm10 10.37l-1.37-1.37c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L16 16.91V9c0-1.1-.9-2-2-2s-2 .9-2 2v7.91l-3.21-3.21c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L6 14.37c-.39.39-.39 1.02 0 1.41l4.48 4.48c.79.79 1.78 1.21 2.83 1.21s2.04-.42 2.83-1.21l4.48-4.48c.39-.39.39-1.02 0-1.41z"
      },
      {
        name: "Core Workout",
        path: "/workouts/calisthenics/core",
        icon: "M12 5.5l6 4.5v9l-6-4.5L6 18.5v-9l6-4.5zM12 3L4 8v12l8-6 8 6V8l-8-5z"
      },
      {
        name: "Skills Training",
        path: "/workouts/calisthenics/skills",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }
    ]
  },
  {
    title: "Home Calisthenics",
    description: "Build strength and skills using minimal or no equipment at home.",
    links: [
      {
        name: "No-Equipment Workout",
        path: "/workouts/calisthenics/no-equipment",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      },
      {
        name: "Home Pull Workout",
        path: "/workouts/calisthenics/minimal-pull",
        icon: "M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2zm10 10.37l-1.37-1.37c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L16 16.91V9c0-1.1-.9-2-2-2s-2 .9-2 2v7.91l-3.21-3.21c-.19-.19-.45-.29-.71-.29-.26 0-.52.1-.71.29L6 14.37c-.39.39-.39 1.02 0 1.41l4.48 4.48c.79.79 1.78 1.21 2.83 1.21s2.04-.42 2.83-1.21l4.48-4.48c.39-.39.39-1.02 0-1.41z"
      },
      {
        name: "Home Core Workout",
        path: "/workouts/calisthenics/minimal-core",
        icon: "M12 5.5l6 4.5v9l-6-4.5L6 18.5v-9l6-4.5zM12 3L4 8v12l8-6 8 6V8l-8-5z"
      },
      {
        name: "Home Skills Training",
        path: "/workouts/calisthenics/minimal-skills",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }
    ]
  }
];

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-4 ${
            theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
          }`}>
            Welcome to Your Fitness Journey
          </h1>
          <p className={`text-xl ${
            theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
          }`}>
            Choose your workout style and get started with your fitness goals
          </p>
        </div>

        <div className="space-y-12">
          {workoutCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`rounded-xl p-8 ${
              theme === 'testosterone'
                ? 'bg-gray-900/30 border border-blue-500/20'
                : 'bg-white/30 border border-pink-200/20'
            }`}>
              <h2 className={`text-3xl font-bold mb-4 ${
                theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
              }`}>
                {category.title}
              </h2>
              <p className={`mb-8 ${
                theme === 'testosterone' ? 'text-blue-200' : 'text-gray-600'
              }`}>
                {category.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className={`group rounded-xl p-6 transition-all ${
                      theme === 'testosterone'
                        ? 'bg-gray-800/30 hover:bg-gray-800/50 border border-blue-500/20'
                        : 'bg-pink-50/30 hover:bg-pink-50/50 border border-pink-200/20'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`p-3 rounded-full mr-4 ${
                        theme === 'testosterone'
                          ? 'bg-blue-500/20 group-hover:bg-blue-500/30'
                          : 'bg-pink-200/50 group-hover:bg-pink-200/70'
                      }`}>
                        <svg
                          className={`w-6 h-6 ${
                            theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={link.icon} />
                        </svg>
                      </div>
                      <h3 className={`text-lg font-semibold ${
                        theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
                      }`}>
                        {link.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 