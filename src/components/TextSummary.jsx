import React from 'react';

export default function TextSummary({ text }) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  const statements = (text.match(/\./g) || []).length;
  const questions = (text.match(/\?/g) || []).length;
  const exclamations = (text.match(/!/g) || []).length;
  const minutes = (words / 200).toFixed(2);

  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">Your Text Summary</h2>
      <p className="mb-1">
        <span className="font-medium">{words}</span> words,{' '}
        <span className="font-medium">{chars}</span> characters,{' '}
        <span className="font-medium">{statements}</span> statements,{' '}
        <span className="font-medium">{questions}</span> questions,{' '}
        <span className="font-medium">{exclamations}</span> exclamations.
      </p>
      <p className="text-sm text-gray-600">{minutes} Minutes read</p>
    </div>
  );
}
