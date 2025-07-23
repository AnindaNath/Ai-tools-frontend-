import React from 'react';
import AnimatedCharts from './AnimatedCharts';
import RecommendationCards from './RecommendationCards';

export default function Dashboard() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/60 via-purple-500/40 to-pink-400/30 dark:from-blue-900/60 dark:via-purple-900/40 dark:to-pink-900/30 shadow-xl backdrop-blur-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 drop-shadow-lg">Welcome back, Explorer!</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">Here are your personalized AI tool insights and recommendations.</p>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <span className="inline-block px-4 py-2 rounded-2xl bg-white/60 dark:bg-black/40 text-blue-700 dark:text-blue-200 font-semibold shadow-md text-sm">Streak: 5 days</span>
          <span className="inline-block px-4 py-2 rounded-2xl bg-white/60 dark:bg-black/40 text-purple-700 dark:text-purple-200 font-semibold shadow-md text-sm">Tools Discovered: 32</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <AnimatedCharts />
        </div>
        <div className="md:col-span-1 flex flex-col justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">Recommended for you</h2>
            <RecommendationCards />
          </div>
        </div>
      </div>
    </div>
  );
}
