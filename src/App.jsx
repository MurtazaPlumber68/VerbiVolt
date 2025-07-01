import React, { useState } from 'react';
import './index.css';
import TextInput from './components/TextInput';
import TransformButtons from './components/TransformButtons';
import TextSummary from './components/TextSummary';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="max-w-3xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">VerbiVolt</h1>
        <button className="px-3 py-1 bg-blue-500 text-white rounded">
          Enable Dark Mode
        </button>
      </header>

      <main className="max-w-3xl mx-auto">
        <TextInput text={text} setText={setText} />
        <TransformButtons text={text} setText={setText} />
        <TextSummary text={text} />
        <div className="mt-6 p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Preview</h2>
          <p>{text || 'Nothing to preview.'}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
