'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { themeConfig } from '../styles/theme';

interface WorkoutTimerProps {
  initialTime: number; // in seconds
  onComplete?: () => void;
}

export default function WorkoutTimer({ initialTime, onComplete }: WorkoutTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            onComplete?.();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`${currentTheme.effects.blur} ${currentTheme.effects.border} ${currentTheme.effects.glow}
      ${currentTheme.radius.large} overflow-hidden ${currentTheme.effects.transition}
      ${theme === 'testosterone'
        ? 'bg-gray-900/30 border-blue-500/20'
        : 'bg-white/30 border-pink-200/20'
      }`}
    >
      {/* Timer Display */}
      <div className={`relative p-8 ${
        theme === 'testosterone'
          ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50'
          : 'bg-gradient-to-br from-pink-50/50 to-purple-50/50'
      }`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-48 h-48 rounded-full ${currentTheme.effects.blur} ${
            theme === 'testosterone'
              ? 'bg-blue-500/5'
              : 'bg-pink-300/5'
          }`} />
        </div>
        <div className="relative text-center">
          <div className={`text-7xl font-bold font-mono mb-4 ${
            theme === 'testosterone' ? 'text-blue-100' : 'text-gray-800'
          }`}>
            {formatTime(timeLeft)}
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleTimer}
              className={`px-6 py-2 ${currentTheme.radius.medium} ${currentTheme.effects.blur}
                ${currentTheme.effects.border} ${currentTheme.effects.hover} ${currentTheme.effects.transition}
                flex items-center space-x-2 ${
                isRunning
                  ? theme === 'testosterone'
                    ? 'bg-red-500/20 hover:bg-red-500/30 border-red-500/30'
                    : 'bg-red-300/20 hover:bg-red-300/30 border-red-300/30'
                  : theme === 'testosterone'
                    ? 'bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30'
                    : 'bg-pink-400/20 hover:bg-pink-400/30 border-pink-300/30'
              }`}
            >
              {isRunning ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Start</span>
                </>
              )}
            </button>
            <button
              onClick={resetTimer}
              className={`px-6 py-2 ${currentTheme.radius.medium} ${currentTheme.effects.blur}
                ${currentTheme.effects.border} ${currentTheme.effects.hover} ${currentTheme.effects.transition}
                flex items-center space-x-2 ${
                theme === 'testosterone'
                  ? 'bg-gray-700/20 hover:bg-gray-700/30 border-gray-600/30'
                  : 'bg-gray-400/20 hover:bg-gray-400/30 border-gray-300/30'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
              </svg>
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 