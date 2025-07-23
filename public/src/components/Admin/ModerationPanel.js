import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'Writing', 'Image Generation', 'Code Assistant', 'Data Analysis',
  'Marketing', 'Design', 'Productivity', 'Customer Service', 'Other'
];
const statuses = ['Active', 'Pending', 'Disabled'];

export default function ModerationPanel() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: categories[0],
    status: statuses[0],
  });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 1200);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-8 rounded-2xl bg-white/30 dark:bg-black/30 shadow-xl backdrop-blur-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Moderation Panel</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">Tool Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-black/40 border-2 border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 outline-none transition-all duration-300 shadow-md text-gray-800 dark:text-gray-100 placeholder:italic placeholder:text-gray-400 dark:placeholder:text-gray-500"
            placeholder="Enter tool name"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-black/40 border-2 border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 outline-none transition-all duration-300 shadow-md text-gray-800 dark:text-gray-100 placeholder:italic placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
            placeholder="Enter tool description"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-black/40 border-2 border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 outline-none transition-all duration-300 shadow-md text-gray-800 dark:text-gray-100"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/60 dark:bg-black/40 border-2 border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 outline-none transition-all duration-300 shadow-md text-gray-800 dark:text-gray-100"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
        <motion.button
          type="submit"
          whileTap={{ scale: 0.97 }}
          disabled={submitting}
          className="mt-2 py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Updating...' : 'Update Tool'}
        </motion.button>
      </form>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 rounded-2xl bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-center font-semibold shadow-md"
          >
            Tool updated successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
