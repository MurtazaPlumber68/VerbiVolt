import React from 'react';

export default function TextInput({ text, setText }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="text-input"
        className="block text-xl font-medium mb-2"
      >
        Enter The Text To Analyze Below
      </label>
      <textarea
        id="text-input"
        className="w-full h-40 p-3 border border-gray-300 rounded
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
    </div>
  );
}
