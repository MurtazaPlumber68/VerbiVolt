import React from 'react';

export default function TextInput({ text, setText }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="text-input"
        className="block text-xl font-medium mb-2 dark:text-gray-200"
      >
        Enter The Text To Analyze Below
      </label>
      <textarea
        id="text-input"
        className="
          w-full h-40 p-3 border rounded
          bg-white text-black border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-400
          dark:bg-gray-700 dark:text-white dark:border-gray-600
        "
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
    </div>
  );
}
