'use client';

import React from 'react';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './context/ThemeContext';
import { themeConfig } from './styles/theme';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative overflow-x-hidden ${
        theme === 'testosterone'
          ? 'bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#1E293B]'
          : 'bg-gradient-to-br from-[#FDF2F8] via-[#F9A8D4] to-[#C4B5FD]'
      }`}>
        {/* Animated background shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs */}
          <div className={`absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl animate-float ${
            theme === 'testosterone' ? 'bg-blue-600/20' : 'bg-pink-400/20'
          }`} />
          <div className={`absolute top-[40%] right-[15%] w-[400px] h-[400px] rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed ${
            theme === 'testosterone' ? 'bg-cyan-500/20' : 'bg-purple-400/20'
          }`} />
          <div className={`absolute bottom-[10%] left-[25%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl animate-float-slow ${
            theme === 'testosterone' ? 'bg-indigo-500/20' : 'bg-rose-400/20'
          }`} />
        </div>

        {/* Glass container for main content */}
        <div className="relative min-h-screen theme-transition">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${
            theme === 'testosterone' ? 'text-gray-100' : 'text-gray-800'
          }`}>
            <div className={`${currentTheme.effects.blur} ${currentTheme.effects.border} ${currentTheme.effects.glow} 
              ${currentTheme.radius.large} overflow-hidden bg-gradient-to-br ${
              theme === 'testosterone'
                ? 'from-gray-900/50 via-gray-800/30 to-gray-900/50 border-gray-700/30'
                : 'from-white/50 via-pink-50/30 to-purple-50/50 border-pink-100/30'
            }`}>
              <div className="p-6">
                {children}
              </div>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </ThemeProvider>
  );
} 