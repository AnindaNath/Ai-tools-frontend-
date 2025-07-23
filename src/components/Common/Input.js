import React from 'react';
import { motion } from 'framer-motion';

const Input = ({ 
  type = 'text',
  variant = 'default',
  size = 'md',
  className = '',
  label,
  error,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300 outline-none border-2 border-transparent focus:ring-2 shadow-md';
  
  const variants = {
    default: 'bg-white/60 dark:bg-black/40 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-300 dark:focus:ring-blue-600',
    glass: 'bg-white/30 dark:bg-black/30 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-blue-400 focus:ring-blue-300 dark:focus:ring-blue-600',
    error: 'bg-white/60 dark:bg-black/40 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border-red-400 focus:border-red-500 focus:ring-red-300 dark:focus:ring-red-600'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg'
  };

  const inputClasses = `${baseClasses} ${variants[error ? 'error' : variant]} ${sizes[size]} ${className}`;

  const InputComponent = type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input';

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <motion.div
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <InputComponent
          type={type === 'select' ? undefined : type}
          className={inputClasses}
          {...props}
        />
      </motion.div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;
