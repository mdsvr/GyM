'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { themeConfig } from '../styles/theme';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const currentTheme = themeConfig[theme];

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 px-6 py-3 ${currentTheme.radius.full} 
        ${currentTheme.effects.blur} ${currentTheme.effects.glow} ${currentTheme.effects.border} 
        ${currentTheme.effects.hover} ${currentTheme.effects.transition}
        flex items-center space-x-3 backdrop-blur-lg
        ${theme === 'testosterone'
          ? 'bg-gradient-to-r from-blue-900/40 via-blue-600/30 to-blue-900/40 text-blue-100 border-blue-400/30 hover:bg-blue-800/40'
          : 'bg-gradient-to-r from-pink-300/30 via-purple-200/40 to-pink-300/30 text-gray-800 border-pink-300/30 hover:bg-pink-200/40'
        }`}
    >
      {theme === 'testosterone' ? (
        <>
          <div className="relative">
            <div className={`absolute inset-0 rounded-full ${currentTheme.effects.blur} bg-blue-500/20`} />
            <svg className="w-7 h-7 relative" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Base Circle with Energy Field */}
              <circle cx="12" cy="12" r="9" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
              <path 
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" 
                className="stroke-current"
                strokeWidth="1.5"
                strokeDasharray="1 3"
              />
              
              {/* Dynamic Energy Lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <path
                  key={i}
                  d={`M12 12L${12 + 4 * Math.cos(angle * Math.PI / 180)} ${12 + 4 * Math.sin(angle * Math.PI / 180)}`}
                  className="stroke-current"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              ))}

              {/* Strength Core */}
              <circle cx="12" cy="12" r="3" className="stroke-current" strokeWidth="1.5" fill="none" />
              <path d="M12 9V15" className="stroke-current" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 12H15" className="stroke-current" strokeWidth="2" strokeLinecap="round" />

              {/* Power Accents */}
              <path 
                d="M13 5L9.5 12H12L11 19L14.5 12H12L13 5Z" 
                className="fill-current"
                fillOpacity="0.9"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-500/50" />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm uppercase tracking-wider text-blue-100">Testosterone</span>
            <span className="text-xs tracking-wide text-blue-200/80">Power Mode</span>
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <div className={`absolute inset-0 rounded-full ${currentTheme.effects.blur} bg-pink-300/20`} />
            <svg className="w-7 h-7 relative" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Flowing Outer Ring */}
              <circle 
                cx="12" 
                cy="12" 
                r="9" 
                className="stroke-current" 
                strokeWidth="1"
                strokeDasharray="3 5"
                strokeLinecap="round"
              />
              
              {/* Lotus Petals */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <g key={i}>
                  <path
                    d={`M12 12C${12 + 5 * Math.cos((angle - 30) * Math.PI / 180)} ${12 + 5 * Math.sin((angle - 30) * Math.PI / 180)} ${12 + 7 * Math.cos(angle * Math.PI / 180)} ${12 + 7 * Math.sin(angle * Math.PI / 180)} ${12 + 5 * Math.cos((angle + 30) * Math.PI / 180)} ${12 + 5 * Math.sin((angle + 30) * Math.PI / 180)}Z`}
                    className="fill-current"
                    fillOpacity="0.2"
                  />
                  <path
                    d={`M12 12L${12 + 7 * Math.cos(angle * Math.PI / 180)} ${12 + 7 * Math.sin(angle * Math.PI / 180)}`}
                    className="stroke-current"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </g>
              ))}

              {/* Inner Spiral Flow */}
              <path
                d="M12 12C13 11 14 10 15 9C14 10 13 11 12 12C11 11 10 10 9 9C10 10 11 11 12 12Z"
                className="fill-current"
                fillOpacity="0.5"
              />

              {/* Center Bloom */}
              <circle cx="12" cy="12" r="2" className="fill-current" fillOpacity="0.8" />
              <circle cx="12" cy="12" r="1" className="fill-current" />
            </svg>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-400 animate-pulse shadow-lg shadow-pink-500/50" />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm uppercase tracking-wider text-gray-800">Estrogen</span>
            <span className="text-xs tracking-wide text-gray-600">Grace Mode</span>
          </div>
        </>
      )}
    </button>
  );
} 