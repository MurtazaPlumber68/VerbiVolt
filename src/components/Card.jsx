import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="card">
      {title && (
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
