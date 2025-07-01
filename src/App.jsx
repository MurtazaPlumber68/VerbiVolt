import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import TransformButtons from './components/TransformButtons';
import TextSummary from './components/TextSummary';

export default function App() {
  const [text, setText] = useState('');
  const [dark, setDark] = useState(false);

  // Whenever `dark` changes, add or remove the `dark` class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-900 dark:text-white">
      <header className="max-w-3xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">VerbiVolt</h1>
        <button
          onClick={() => setDark(prev => !prev)}
          className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="max-w-3xl mx-auto">
        <TextInput text={text} setText={setText} />
        <TransformButtons text={text} setText={setText} />
        <TextSummary text={text} />

        <div className="mt-6 p-4 bg-white rounded shadow dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2 dark:text-gray-200">
            Preview
          </h2>
          <p className="dark:text-gray-300">
            {text || 'Nothing to preview.'}
          </p>
        </div>
      </main>
    </div>
  );
}
