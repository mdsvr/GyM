'use client';

import React from 'react';
import { WorkoutLayout } from '../../../components/WorkoutLayout';

const exercises = [
  {
    name: 'Pistol Squats',
    description: 'Single leg squat that builds incredible leg strength and balance.',
    sets: 3,
    reps: '5-8 per leg',
    videoId: 'vq5-vdXdxQo',
    tips: [
      'Start with assisted variations',
      'Keep your non-working leg straight',
      'Maintain an upright torso',
      'Control the descent'
    ],
    variations: [
      'Assisted Pistol Squats',
      'Box Pistol Squats',
      'Elevated Pistol Squats',
      'Full Pistol Squats'
    ]
  },
  {
    name: 'Jump Squats',
    description: 'Explosive lower body movement for power and muscle development.',
    sets: 4,
    reps: '12-15',
    videoId: 'A-cFYWvaHr0',
    tips: [
      'Land softly on the balls of your feet',
      'Use arms for momentum',
      'Keep chest up',
      'Absorb landing with your legs'
    ],
    variations: [
      'Regular Jump Squats',
      'Split Jump Squats',
      '180° Jump Squats',
      'Box Jump Squats'
    ]
  },
  {
    name: 'Natural Leg Extensions',
    description: 'Bodyweight exercise targeting the quadriceps.',
    sets: 3,
    reps: '10-12',
    videoId: 'ZYy8acGU8YY',
    tips: [
      'Anchor feet securely',
      'Keep upper body straight',
      'Lower slowly',
      'Focus on quad contraction'
    ],
    variations: [
      'Assisted Natural Extensions',
      'Single Leg Extensions',
      'Slow Negatives',
      'Paused Reps'
    ]
  },
  {
    name: 'Nordic Hamstring Curls',
    description: 'Advanced posterior chain exercise for hamstring development.',
    sets: 3,
    reps: '6-10',
    videoId: 'B-mzZmQXKvE',
    tips: [
      'Start with assisted variations',
      'Keep hips extended',
      'Lower as slowly as possible',
      'Use hands to push back up if needed'
    ],
    variations: [
      'Assisted Nordic Curls',
      'Band-Assisted Nordics',
      'Negative-Only Nordics',
      'Full Nordic Curls'
    ]
  },
  {
    name: 'Calf Raises',
    description: 'Essential exercise for calf development and ankle strength.',
    sets: 4,
    reps: '20-25',
    videoId: 'gwLzBJYoWlI',
    tips: [
      'Perform on elevated surface',
      'Full range of motion',
      'Pause at top and bottom',
      'Mix single and double leg variations'
    ],
    variations: [
      'Double Leg Raises',
      'Single Leg Raises',
      'Jump Rope',
      'Seated Raises'
    ]
  }
];

export default function CalisthenicsLegsPage() {
  return (
    <WorkoutLayout
      title="Calisthenics Legs Workout"
      description="Build powerful legs using advanced bodyweight exercises"
      exercises={exercises}
      category="calisthenics"
      type="legs"
    />
  );
} 