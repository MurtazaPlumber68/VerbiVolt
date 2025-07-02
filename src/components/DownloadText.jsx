import React from 'react';

export default function DownloadText({ text }) {
  const handleDownload = () => {
    if (!text) return alert('Nothing to download!');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'verbi-volt-text.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mb-6">
      <button
        onClick={handleDownload}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:opacity-90 transition"
      >
        Download as .txt
      </button>
    </div>
  );
}
