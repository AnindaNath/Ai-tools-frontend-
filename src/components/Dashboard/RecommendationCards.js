import React from 'react';
import { motion } from 'framer-motion';

const recommendations = [
  {
    id: 1,
    name: 'PromptPal',
    description: 'Your AI prompt companion for better results.',
    tags: ['Prompt', 'Assistant'],
    image: '/api/placeholder/120/120',
  },
  {
    id: 2,
    name: 'Visionary',
    description: 'AI-powered image generation for creators.',
    tags: ['Image', 'Generation'],
    image: '/api/placeholder/120/120',
  },
  {
    id: 3,
    name: 'CodePilot',
    description: 'AI code suggestions and bug fixes.',
    tags: ['Code', 'Productivity'],
    image: '/api/placeholder/120/120',
  },
  {
    id: 4,
    name: 'MarketMuse',
    description: 'AI for content strategy and SEO.',
    tags: ['Marketing', 'SEO'],
    image: '/api/placeholder/120/120',
  },
];

export default function RecommendationCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {recommendations.map((tool, idx) => (
        <motion.div
          key={tool.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(99,102,241,0.15)' }}
          className="rounded-2xl bg-white/60 dark:bg-gray-900/60 shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700 p-5 flex flex-col items-center transition-all duration-300 cursor-pointer hover:shadow-2xl"
        >
          <img src={tool.image} alt={tool.name} className="w-16 h-16 rounded-full mb-3 shadow-md border-2 border-blue-200 dark:border-blue-800" />
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 text-center">{tool.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 text-center">{tool.description}</p>
          <div className="flex gap-2 flex-wrap justify-center">
            {tool.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
