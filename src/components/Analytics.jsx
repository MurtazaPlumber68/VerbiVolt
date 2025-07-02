import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Analytics({ text }) {
  // Compute top 5 words & counts
  const data = useMemo(() => {
    const words = text
      .toLowerCase()
      .match(/\b\w+\b/g) || [];
    const counts = words.reduce((acc, w) => {
      acc[w] = (acc[w] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [text]);

  if (data.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-white rounded shadow dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
        Word Frequency Analytics
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="word" stroke="#374151" />
          <YAxis allowDecimals={false} stroke="#374151" />
          <Tooltip
            wrapperStyle={{ backgroundColor: '#f9fafb', borderRadius: 4 }}
            contentStyle={{ color: '#111827' }}
          />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
