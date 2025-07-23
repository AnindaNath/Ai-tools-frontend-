import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default',
  className = '', 
  onClick,
  hover = true,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl backdrop-blur-md transition-all duration-300';
  
  const variants = {
    default: 'bg-white/60 dark:bg-black/40 shadow-lg border border-gray-200 dark:border-gray-700',
    elevated: 'bg-white/80 dark:bg-black/60 shadow-xl border border-gray-200 dark:border-gray-700',
    glass: 'bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-black/20',
    gradient: 'bg-gradient-to-br from-white/60 to-white/40 dark:from-black/60 dark:to-black/40 shadow-lg border border-white/30 dark:border-black/30'
  };

  const hoverClasses = hover ? 'hover:shadow-2xl hover:scale-105 cursor-pointer' : '';

  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -5 } : {}}
      className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
