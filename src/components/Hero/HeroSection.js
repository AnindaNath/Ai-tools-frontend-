import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiArrowRight, 
  FiStar, 
  FiTrendingUp, 
  FiUsers, 
  FiZap,
  FiPlay,
  FiChevronDown
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const taglines = [
    "Discover the Right AI Tools, Instantly.",
    "Find Your Perfect AI Assistant Today.",
    "Unlock AI's Potential with Smart Discovery.",
    "Navigate the AI Universe with Confidence."
  ];

  const featuredTools = [
    { name: 'ChatGPT', category: 'Writing', users: '100M+', rating: 4.8 },
    { name: 'Midjourney', category: 'Image Generation', users: '10M+', rating: 4.9 },
    { name: 'GitHub Copilot', category: 'Code Assistant', users: '5M+', rating: 4.7 },
    { name: 'Notion AI', category: 'Productivity', users: '20M+', rating: 4.6 },
  ];

  const stats = [
    { label: 'AI Tools', value: '1000+', icon: FiZap },
    { label: 'Happy Users', value: '50K+', icon: FiUsers },
    { label: 'Categories', value: '25+', icon: FiStar },
    { label: 'Success Rate', value: '95%', icon: FiTrendingUp },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search page with query
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full blur-3xl animate-float"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-secondary-400/25 to-accent-400/25 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                AI Tools
              </span>
              <br />
              <span className="text-dark-800 dark:text-dark-100">
                Discovery
              </span>
            </h1>
            
            {/* Animated Tagline */}
            <div className="h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-dark-600 dark:text-dark-300 font-medium"
                >
                  {taglines[currentTagline]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Search Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-2 shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-dark-700/50">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 relative">
                      <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400 dark:text-dark-500" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for AI tools, categories, or use cases..."
                        className="w-full pl-12 pr-4 py-4 bg-transparent text-dark-800 dark:text-dark-100 placeholder-dark-500 dark:placeholder-dark-400 focus:outline-none text-lg"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 flex items-center space-x-2"
                    >
                      <span>Search</span>
                      <FiArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </form>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['AI Writing', 'Image Generation', 'Code Assistant', 'Data Analysis'].map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/60 dark:bg-dark-700/60 backdrop-blur-sm rounded-xl text-sm font-medium text-dark-700 dark:text-dark-300 border border-white/30 dark:border-dark-600/30 hover:bg-white/80 dark:hover:bg-dark-600/80 transition-all duration-200"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 flex items-center space-x-2 shadow-lg"
            >
              <span>Get Started Free</span>
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoPlaying(true)}
              className="px-8 py-4 bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm text-dark-700 dark:text-dark-300 rounded-2xl font-semibold text-lg border border-white/30 dark:border-dark-600/30 hover:bg-white/90 dark:hover:bg-dark-600/90 transition-all duration-200 flex items-center space-x-2"
            >
              <FiPlay className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center p-6 bg-white/60 dark:bg-dark-700/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-dark-600/30"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-dark-800 dark:text-dark-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-600 dark:text-dark-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800 dark:text-dark-100 mb-8">
              Featured AI Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-dark-600/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-dark-800 dark:text-dark-100">
                      {tool.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-dark-600 dark:text-dark-400">
                        {tool.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-dark-600 dark:text-dark-400 mb-2">
                    {tool.category}
                  </p>
                  <p className="text-xs text-dark-500 dark:text-dark-500">
                    {tool.users} users
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-dark-500 dark:text-dark-500 mb-2">
              Scroll to explore more
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-6 border-2 border-dark-400 dark:border-dark-500 rounded-full flex items-center justify-center"
            >
              <FiChevronDown className="w-4 h-4 text-dark-400 dark:text-dark-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
              >
                <FiX className="w-5 h-5 text-dark-600 dark:text-dark-400" />
              </button>
              <div className="aspect-video bg-dark-100 dark:bg-dark-700 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <FiPlay className="w-16 h-16 text-dark-400 dark:text-dark-500 mx-auto mb-4" />
                  <p className="text-dark-600 dark:text-dark-400">
                    Demo video would be embedded here
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;