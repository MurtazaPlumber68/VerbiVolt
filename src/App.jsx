// src/App.jsx
import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import TransformButtons from './components/TransformButtons';
import ClipboardActions from './components/ClipboardActions';
import TextToSpeech from './components/TextToSpeech';
import UtilityButtons from './components/UtilityButtons';
import TextSummary from './components/TextSummary';
import UndoRedo from './components/UndoRedo';

export default function App() {
  // core text state
  const [text, rawSetText] = useState('');
  // history stack and pointer
  const [history, setHistory] = useState(['']);
  const [historyIndex, setHistoryIndex] = useState(0);
  // dark mode
  const [dark, setDark] = useState(false);

  // sync dark mode class
  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [dark]);

  // wrapper to record changes
  const setText = (newText) => {
    // prune redo history
    const upToNow = history.slice(0, historyIndex + 1);
    const nextHistory = [...upToNow, newText];
    setHistory(nextHistory);
    setHistoryIndex(nextHistory.length - 1);
    rawSetText(newText);
  };

  const handleUndo = () => {
    if (historyIndex === 0) return;
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    rawSetText(history[newIndex]);
  };

  const handleRedo = () => {
    if (historyIndex === history.length - 1) return;
    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    rawSetText(history[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-900 dark:text-white">
      <header className="max-w-3xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">VerbiVolt</h1>
        <button
          onClick={() => setDark(d => !d)}
          className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="max-w-3xl mx-auto">
        {/* 1) Text Input */}
        <TextInput text={text} setText={setText} />

        {/* 2) Transformation Buttons */}
        <TransformButtons text={text} setText={setText} />

        {/* 3) Clipboard Actions */}
        <ClipboardActions text={text} setText={setText} />

        {/* 4) Text-to-Speech */}
        <TextToSpeech text={text} />

        {/* 5) Extra Utilities */}
        <UtilityButtons text={text} setText={setText} />

        {/* 6) Undo / Redo */}
        <UndoRedo
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
          onUndo={handleUndo}
          onRedo={handleRedo}
        />

        {/* 7) Text Summary */}
        <TextSummary text={text} />

        {/* 8) Preview */}
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
