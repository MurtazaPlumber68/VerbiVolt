import React from 'react';

export default function ClipboardActions({ text, setText }) {
  // Copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Text copied to clipboard!');
    } catch (err) {
      alert('Failed to copy: ' + err);
    }
  };

  // Paste from clipboard
  const handlePaste = async () => {
    try {
      const clip = await navigator.clipboard.readText();
      setText(prev => prev + clip);
    } catch (err) {
      alert('Failed to paste: ' + err);
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={handleCopy}
        className="px-3 py-1 bg-green-500 text-white rounded hover:opacity-90"
      >
        Copy Text
      </button>
      <button
        onClick={handlePaste}
        className="px-3 py-1 bg-purple-500 text-white rounded hover:opacity-90"
      >
        Paste Text
      </button>
    </div>
  );
}
