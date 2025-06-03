'use client';

import React from 'react';
import { WorkoutLayout } from '../../../components/WorkoutLayout';

const exercises = [
  {
    name: 'L-Sit Progressions',
    description: 'Fundamental static hold developing core and hip flexor strength.',
    sets: 4,
    reps: '10-30 seconds',
    videoId: 'IUZJoSP66HI',
    tips: [
      'Keep arms straight and locked',
      'Point toes forward',
      'Push shoulders down',
      'Progress gradually through variations'
    ],
    variations: [
      'Tucked L-Sit',
      'One Leg L-Sit',
      'Full L-Sit',
      'V-Sit'
    ]
  },
  {
    name: 'Dragon Flag',
    description: 'Advanced core exercise popularized by Bruce Lee.',
    sets: 3,
    reps: '5-8',
    videoId: '_lwzWdtEFrY',
    tips: [
      'Start with negatives',
      'Keep body straight',
      'Grip bench firmly behind head',
      'Lower with control'
    ],
    variations: [
      'Tucked Dragon Flag',
      'Single Leg Dragon Flag',
      'Negative Dragon Flag',
      'Full Dragon Flag'
    ]
  },
  {
    name: 'Hollow Body Hold',
    description: 'Fundamental gymnastics position for core control.',
    sets: 3,
    reps: '20-45 seconds',
    videoId: 'LlDNef_Ztsc',
    tips: [
      'Press lower back into ground',
      'Keep arms by ears',
      'Point toes',
      'Maintain tension throughout'
    ],
    variations: [
      'Bent Knee Hollow Hold',
      'Straight Leg Hollow Hold',
      'Hollow Body Rocks',
      'Weighted Hollow Hold'
    ]
  },
  {
    name: 'Human Flag Progressions',
    description: 'Impressive lateral core and shoulder strength exercise.',
    sets: 3,
    reps: '5-15 seconds',
    videoId: 'cHe6uBg36UE',
    tips: [
      'Build prerequisite strength first',
      'Focus on proper grip position',
      'Engage entire body',
      'Start with easier variations'
    ],
    variations: [
      'Vertical Flag Hold',
      'Flag Pulls',
      'Single Leg Flag',
      'Full Human Flag'
    ]
  },
  {
    name: 'Hanging Leg Raises',
    description: 'Advanced core exercise targeting lower abs and hip flexors.',
    sets: 4,
    reps: '10-15',
    videoId: 'Pr1ieGZ5atk',
    tips: [
      'Avoid swinging',
      'Keep legs straight',
      'Control the descent',
      'Focus on hip flexion'
    ],
    variations: [
      'Knee Raises',
      'Straight Leg Raises',
      'Toes to Bar',
      'Windshield Wipers'
    ]
  }
];

export default function CalisthenicsCoreWorkout() {
  return (
    <WorkoutLayout
      title="Calisthenics Core Workout"
      description="Build incredible core strength with advanced bodyweight exercises"
      exercises={exercises}
      category="calisthenics"
      type="core"
    />
  );
} 