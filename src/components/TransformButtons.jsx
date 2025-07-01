import React from 'react';

export default function TransformButtons({ text, setText }) {
  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toSentence = () => {
    const sentences = text.split(/([.!?]\s*)/);
    const transformed = sentences
      .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
      .join('');
    setText(transformed);
  };
  const toBase64 = () => setText(btoa(text));
  const reverseText = () => setText([...text].reverse().join(''));

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button onClick={toUpper} className="px-3 py-1 bg-blue-500 text-white rounded">
        Convert to uppercase
      </button>
      <button onClick={toLower} className="px-3 py-1 bg-blue-500 text-white rounded">
        Convert to lowercase
      </button>
      <button onClick={toSentence} className="px-3 py-1 bg-blue-500 text-white rounded">
        Convert to sentencecase
      </button>
      <button onClick={toBase64} className="px-3 py-1 bg-blue-500 text-white rounded">
        Encode to Base64
      </button>
      <button onClick={() => setText('')} className="px-3 py-1 bg-gray-500 text-white rounded">
        Clear Text
      </button>
      <button onClick={reverseText} className="px-3 py-1 bg-blue-500 text-white rounded">
        Reverse Text
      </button>
    </div>
  );
}
