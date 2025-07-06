import React from 'react';

export default function TransformButtons({ text, setText, autoCopy }) {
  // Helper to apply a transform and optionally copy
  const apply = (newText) => {
    setText(newText);
    if (autoCopy) {
      navigator.clipboard.writeText(newText).catch(() => {
        /* ignore errors */ 
      });
    }
  };

  const toUpper = () => apply(text.toUpperCase());
  const toLower = () => apply(text.toLowerCase());
  const toSentence = () => {
    const sentences = text.split(/([.!?]\s*)/);
    const transformed = sentences
      .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
      .join('');
    apply(transformed);
  };
  const toBase64 = () => apply(btoa(text));
  const reverseText = () => apply([...text].reverse().join(''));
  const clearText = () => apply('');

  const btnBase = 'px-3 py-1 rounded text-white hover:opacity-90 transition';
  const primary = 'bg-blue-500 dark:bg-blue-600';
  const neutral = 'bg-gray-500 dark:bg-gray-600';

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button onClick={toUpper} className={`${btnBase} ${primary}`}>
        Convert to uppercase
      </button>
      <button onClick={toLower} className={`${btnBase} ${primary}`}>
        Convert to lowercase
      </button>
      <button onClick={toSentence} className={`${btnBase} ${primary}`}>
        Convert to sentencecase
      </button>
      <button onClick={toBase64} className={`${btnBase} ${primary}`}>
        Encode to Base64
      </button>
      <button onClick={clearText} className={`${btnBase} ${neutral}`}>
        Clear Text
      </button>
      <button onClick={reverseText} className={`${btnBase} ${primary}`}>
        Reverse Text
      </button>
    </div>
  );
}
