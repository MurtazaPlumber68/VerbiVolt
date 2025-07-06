import React from 'react';

export default function Settings({ ttsRate, setTtsRate, autoCopy, setAutoCopy }) {
  return (
    <div className="mb-6 p-4 bg-white rounded shadow dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Settings</h2>
      
      <div className="mb-4">
        <label className="block mb-1 dark:text-gray-200">
          Text‑to‑Speech Speed: {ttsRate.toFixed(1)}×
        </label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={ttsRate}
          onChange={e => setTtsRate(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
      
      <div>
        <label className="inline-flex items-center dark:text-gray-200">
          <input
            type="checkbox"
            checked={autoCopy}
            onChange={e => setAutoCopy(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2">Auto‑copy after transform</span>
        </label>
      </div>
    </div>
  );
}
