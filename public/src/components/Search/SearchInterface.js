import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiFilter, 
  FiSliders, 
  FiX,
  FiStar,
  FiUsers,
  FiTrendingUp,
  FiChevronDown,
  FiTag,
  FiClock,
  FiZap,
  FiHeart,
  FiExternalLink,
  FiBookmark
} from 'react-icons/fi';

const SearchInterface = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const searchInputRef = useRef(null);

  const categories = [
    'All', 'Writing', 'Image Generation', 'Code Assistant', 'Data Analysis',
    'Marketing', 'Design', 'Productivity', 'Customer Service', 'Video Editing',
    'Music Generation', 'Language Learning', 'Research', 'Business Intelligence'
  ];

  const pricingOptions = ['All', 'Free', 'Freemium', 'Paid', 'Enterprise'];
  const ratingOptions = ['All', '4.5+', '4.0+', '3.5+', '3.0+'];
  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  const suggestionsData = [
    'AI writing assistant',
    'Image generation tool',
    'Code completion',
    'Data visualization',
    'Marketing automation',
    'Design templates',
    'Video editing AI',
    'Customer support chatbot',
    'Language translation',
    'SEO optimization'
  ];

  const mockResults = [
    {
      id: 1,
      name: 'ChatGPT',
      description: 'Advanced AI chatbot for writing, coding, and analysis',
      category: 'Writing',
      rating: 4.8,
      users: '100M+',
      pricing: 'Freemium',
      tags: ['Writing', 'Chat', 'AI Assistant'],
      image: '/api/placeholder/300/200',
      featured: true
    },
    {
      id: 2,
      name: 'Midjourney',
      description: 'AI-powered image generation from text descriptions',
      category: 'Image Generation',
      rating: 4.9,
      users: '10M+',
      pricing: 'Paid',
      tags: ['Art', 'Design', 'Creative'],
      image: '/api/placeholder/300/200',
      featured: true
    },
    {
      id: 3,
      name: 'GitHub Copilot',
      description: 'AI pair programmer that suggests code and functions',
      category: 'Code Assistant',
      rating: 4.7,
      users: '5M+',
      pricing: 'Paid',
      tags: ['Coding', 'Development', 'Productivity'],
      image: '/api/placeholder/300/200',
      featured: false
    },
    {
      id: 4,
      name: 'Jasper AI',
      description: 'AI content platform for marketing and creative writing',
      category: 'Marketing',
      rating: 4.6,
      users: '2M+',
      pricing: 'Paid',
      tags: ['Marketing', 'Content', 'Copywriting'],
      image: '/api/placeholder/300/200',
      featured: false
    },
    {
      id: 5,
      name: 'Canva AI',
      description: 'Design platform with AI-powered design suggestions',
      category: 'Design',
      rating: 4.5,
      users: '50M+',
      pricing: 'Freemium',
      tags: ['Design', 'Templates', 'Graphics'],
      image: '/api/placeholder/300/200',
      featured: false
    },
    {
      id: 6,
      name: 'Notion AI',
      description: 'AI-powered workspace for notes, docs, and collaboration',
      category: 'Productivity',
      rating: 4.6,
      users: '20M+',
      pricing: 'Freemium',
      tags: ['Productivity', 'Notes', 'Collaboration'],
      image: '/api/placeholder/300/200',
      featured: false
    }
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = suggestionsData.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    // Simulate search results
    setResults(mockResults);
  }, []);

  const handleSearch = (query = searchQuery) => {
    setIsLoading(true);
    setShowSuggestions(false);
    
    // Simulate API call
    setTimeout(() => {
      const filtered = mockResults.filter(tool => {
        const matchesSearch = !query || 
          tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.description.toLowerCase().includes(query.toLowerCase()) ||
          tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
        const matchesPricing = selectedPricing === 'All' || tool.pricing === selectedPricing;
        const matchesRating = selectedRating === 'All' || 
          tool.rating >= parseFloat(selectedRating.replace('+', ''));
        
        return matchesSearch && matchesCategory && matchesPricing && matchesRating;
      });
      
      setResults(filtered);
      setIsLoading(false);
    }, 800);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    handleSearch(suggestion);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedPricing('All');
    setSelectedRating('All');
    setSortBy('popularity');
    handleSearch();
  };

  const FilterDropdown = ({ title, options, selected, onSelect, icon: Icon }) => (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm rounded-xl border border-white/30 dark:border-dark-600/30 hover:bg-white/90 dark:hover:bg-dark-600/90 transition-all duration-200 text-sm font-medium text-dark-700 dark:text-dark-300"
      >
        <Icon className="w-4 h-4" />
        <span>{selected}</span>
        <FiChevronDown className="w-4 h-4" />
      </motion.button>
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 left-0 min-w-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-xl border border-white/30 dark:border-dark-600/30 shadow-lg z-20"
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`w-full text-left px-4 py-2 hover:bg-white/50 dark:hover:bg-dark-700/50 transition-colors first:rounded-t-xl last:rounded-b-xl text-sm ${
                selected === option 
                  ? 'text-primary-600 dark:text-primary-400 font-medium' 
                  : 'text-dark-600 dark:text-dark-300'
              }`}
            >
              {option}
            </button>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const ToolCard = ({ tool, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-dark-600/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {tool.featured && (
        <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-medium rounded-full">
          Featured
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {tool.name}
          </h3>
          <p className="text-sm text-dark-600 dark:text-dark-400 mb-3">
            {tool.description}
          </p>
        </div>
        
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/50 dark:bg-dark-600/50 rounded-full hover:bg-white/70 dark:hover:bg-dark-500/70 transition-colors"
          >
            <FiBookmark className="w-4 h-4 text-dark-600 dark:text-dark-400" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/50 dark:bg-dark-600/50 rounded-full hover:bg-white/70 dark:hover:bg-dark-500/70 transition-colors"
          >
            <FiHeart className="w-4 h-4 text-dark-600 dark:text-dark-400" />
          </motion.button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
              {tool.rating}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <FiUsers className="w-4 h-4 text-dark-500 dark:text-dark-400" />
            <span className="text-sm text-dark-600 dark:text-dark-400">
              {tool.users}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            tool.pricing === 'Free' 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
              : tool.pricing === 'Freemium'
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
          }`}>
            {tool.pricing}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
          >
            <FiExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-dark-100 mb-4"
          >
            Find Your Perfect
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent ml-3">
              AI Tool
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark-600 dark:text-dark-400"
          >
            Discover, compare, and choose from thousands of AI tools
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="max-w-4xl mx-auto relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl p-2 shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-dark-700/50">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400 dark:text-dark-500" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder="Search for AI tools, categories, or use cases..."
                      className="w-full pl-12 pr-4 py-4 bg-transparent text-dark-800 dark:text-dark-100 placeholder-dark-500 dark:placeholder-dark-400 focus:outline-none text-lg"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSearch()}
                    className="px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 flex items-center space-x-2"
                  >
                    <span>Search</span>
                    <FiSearch className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-0 right-0 bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl rounded-xl border border-white/30 dark:border-dark-600/30 shadow-lg z-30"
                >
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-white/50 dark:hover:bg-dark-700/50 transition-colors first:rounded-t-xl last:rounded-b-xl flex items-center space-x-3"
                    >
                      <FiSearch className="w-4 h-4 text-dark-400 dark:text-dark-500" />
                      <span className="text-dark-700 dark:text-dark-300">{suggestion}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <FilterDropdown
            title="Category"
            options={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            icon={FiTag}
          />
          <FilterDropdown
            title="Pricing"
            options={pricingOptions}
            selected={selectedPricing}
            onSelect={setSelectedPricing}
            icon={FiZap}
          />
          <FilterDropdown
            title="Rating"
            options={ratingOptions}
            selected={selectedRating}
            onSelect={setSelectedRating}
            icon={FiStar}
          />
          <FilterDropdown
            title="Sort By"
            options={sortOptions.map(opt => opt.label)}
            selected={sortOptions.find(opt => opt.value === sortBy)?.label}
            onSelect={(label) => setSortBy(sortOptions.find(opt => opt.label === label)?.value)}
            icon={FiSliders}
          />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearFilters}
            className="flex items-center space-x-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl hover:bg-red-200 dark:hover:bg-red-800/30 transition-colors text-sm font-medium"
          >
            <FiX className="w-4 h-4" />
            <span>Clear Filters</span>
          </motion.button>
        </motion.div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-dark-600 dark:text-dark-400">
              {isLoading ? 'Searching...' : `Found ${results.length} AI tools`}
            </p>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="p-6 bg-white/60 dark:bg-dark-700/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-dark-600/30 animate-pulse"
              >
                <div className="h-4 bg-dark-200 dark:bg-dark-600 rounded mb-2" />
                <div className="h-3 bg-dark-200 dark:bg-dark-600 rounded mb-4" />
                <div className="flex space-x-2 mb-4">
                  <div className="h-6 w-16 bg-dark-200 dark:bg-dark-600 rounded-full" />
                  <div className="h-6 w-12 bg-dark-200 dark:bg-dark-600 rounded-full" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-4 w-20 bg-dark-200 dark:bg-dark-600 rounded" />
                  <div className="h-8 w-8 bg-dark-200 dark:bg-dark-600 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-dark-100 dark:bg-dark-700 rounded-full flex items-center justify-center">
              <FiSearch className="w-8 h-8 text-dark-400 dark:text-dark-500" />
            </div>
            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-100 mb-2">
              No tools found
            </h3>
            <p className="text-dark-600 dark:text-dark-400 mb-4">
              Try adjusting your search terms or filters
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearFilters}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-200"
            >
              Clear All Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchInterface;