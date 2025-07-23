import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import PromptAnalysis from '../components/Search/PromptAnalysis';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <HeroSection />
      <PromptAnalysis />
    </div>
  );
}
