import React, { useState } from 'react';
import useTypewriter from '../../hooks/useTypewriter';
import { motion, AnimatePresence } from 'framer-motion';

const promptExamples = [
  'Summarize this article...',
  'Find AI tools for image editing...',
  'What is the best AI for coding help?',
];

const mockResults = [
  {
    id: 1,
    title: 'ToolFinder AI',
    description: 'An AI that recommends the best tools for your needs.',
    tags: ['recommendation', 'productivity'],
  },
  {
    id: 2,
    title: 'Prompt Genius',
    description: 'Analyze and improve your AI prompts instantly.',
    tags: ['prompt', 'analysis'],
  },
];

export default function PromptAnalysis() {
  const placeholder = useTypewriter(promptExamples, 70, 1800);
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-white/30 dark:bg-black/30 shadow-xl backdrop-blur-lg">
      <form onSubmit={handleAnalyze} className="flex flex-col gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder || 'Type your prompt...'}
          className="px-5 py-3 rounded-2xl bg-white/60 dark:bg-black/40 border-2 border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 outline-none transition-all duration-300 shadow-md text-lg text-gray-800 dark:text-gray-100 placeholder:italic placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="mt-2 py-2 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Analyze
        </button>
      </form>
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid gap-4"
          >
            {mockResults.map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="p-5 rounded-2xl bg-white/70 dark:bg-gray-900/70 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-100">{result.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{result.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {result.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
