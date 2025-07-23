import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', Tools: 8 },
  { name: 'Tue', Tools: 12 },
  { name: 'Wed', Tools: 6 },
  { name: 'Thu', Tools: 14 },
  { name: 'Fri', Tools: 10 },
  { name: 'Sat', Tools: 7 },
  { name: 'Sun', Tools: 9 },
];

export default function AnimatedCharts() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full p-4 rounded-2xl bg-white/40 dark:bg-black/40 shadow-lg backdrop-blur-md"
    >
      <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Weekly Tool Discovery</h2>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ef" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" allowDecimals={false} />
            <Tooltip
              contentStyle={{
                background: 'rgba(255,255,255,0.9)',
                borderRadius: '1rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                color: '#1e293b',
              }}
              labelStyle={{ color: '#64748b' }}
            />
            <Bar dataKey="Tools" fill="url(#colorTools)" radius={[12, 12, 0, 0]} />
            <defs>
              <linearGradient id="colorTools" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#a21caf" stopOpacity={0.7} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
