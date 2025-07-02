import React, { useState } from 'react';

export default function TextToSpeech({ text }) {
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!text) return alert('Nothing to speak!');
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    speechSynthesis.speak(utterance);
  };

  const handleCancel = () => {
    speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={handleSpeak}
        disabled={speaking}
        className={`px-3 py-1 rounded text-white hover:opacity-90 transition ${
          speaking ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500'
        }`}
      >
        {speaking ? 'Speaking...' : 'Speak Text'}
      </button>
      {speaking && (
        <button
          onClick={handleCancel}
          className="px-3 py-1 bg-red-500 text-white rounded hover:opacity-90 transition"
        >
          Stop
        </button>
      )}
    </div>
  );
}
