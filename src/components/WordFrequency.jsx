import React, { useMemo } from 'react';

export default function WordFrequency({ text }) {
  // Compute word counts once per text change
  const topWords = useMemo(() => {
    const words = text
      .toLowerCase()
      .match(/\b\w+\b/g) || [];
    const counts = words.reduce((acc, w) => {
      acc[w] = (acc[w] || 0) + 1;
      return acc;
    }, {});
    // Convert to [word, count] pairs & sort
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [text]);

  if (topWords.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-white rounded shadow dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-2 dark:text-gray-200">
        Top 5 Words
      </h2>
      <ul>
        {topWords.map(([word, count]) => (
          <li key={word} className="dark:text-gray-300">
            <span className="font-medium">{word}</span>: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}
