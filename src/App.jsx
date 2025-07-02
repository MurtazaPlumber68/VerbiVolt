// src/App.jsx
import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import TransformButtons from './components/TransformButtons';
import ClipboardActions from './components/ClipboardActions';
import TextToSpeech from './components/TextToSpeech';
import UtilityButtons from './components/UtilityButtons';
import DownloadText from './components/DownloadText';
import UndoRedo from './components/UndoRedo';
import TextSummary from './components/TextSummary';
import WordFrequency from './components/WordFrequency';

export default function App() {
  const [text, rawSetText] = useState('');
  const [history, setHistory] = useState(['']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [dark, setDark] = useState(false);

  // Sync dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add('dark') : root.classList.remove('dark');
  }, [dark]);

  // Wrap setting text to record history
  const setText = (newText) => {
    const upToNow = history.slice(0, historyIndex + 1);
    const next = [...upToNow, newText];
    setHistory(next);
    setHistoryIndex(next.length - 1);
    rawSetText(newText);
  };

  const handleUndo = () => {
    if (historyIndex === 0) return;
    const idx = historyIndex - 1;
    setHistoryIndex(idx);
    rawSetText(history[idx]);
  };

  const handleRedo = () => {
    if (historyIndex === history.length - 1) return;
    const idx = historyIndex + 1;
    setHistoryIndex(idx);
    rawSetText(history[idx]);
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

        {/* 6) Download as .txt */}
        <DownloadText text={text} />

        {/* 7) Undo / Redo */}
        <UndoRedo
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
          onUndo={handleUndo}
          onRedo={handleRedo}
        />

        {/* 8) Text Summary */}
        <TextSummary text={text} />

        {/* 9) Live Word Frequency */}
        <WordFrequency text={text} />

        {/* 10) Preview */}
        <div className="mt-6 p-4 bg-white rounded shadow dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2 dark:text-gray-200">
            Preview
          </h2>
          <p className="dark:text-gray-300">{text || 'Nothing to preview.'}</p>
        </div>
      </main>
    </div>
  );
}
