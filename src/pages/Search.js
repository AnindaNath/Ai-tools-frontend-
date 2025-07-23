import React from 'react';
import SearchInterface from '../components/Search/SearchInterface';

export default function Search() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Discover AI Tools
        </h1>
        <SearchInterface />
      </div>
    </div>
  );
}
