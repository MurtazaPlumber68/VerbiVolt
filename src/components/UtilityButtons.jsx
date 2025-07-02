import React from 'react';

export default function UtilityButtons({ text, setText }) {
  const extractNumbers = () => {
    const nums = text.match(/-?\d+(\.\d+)?/g) || [];
    setText(nums.join(' '));
  };

  const extractLinks = () => {
    const urls = text.match(/https?:\/\/[^\s]+/g) || [];
    setText(urls.join('\n'));
  };

  const removeExtraSpaces = () => {
    const cleaned = text.replace(/\s+/g, ' ').trim();
    setText(cleaned);
  };

  const removeSpecialChars = () => {
    const cleaned = text.replace(/[^A-Za-z0-9\s]/g, '');
    setText(cleaned);
  };

  const btnBase = 'px-3 py-1 rounded text-white hover:opacity-90 transition';
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button onClick={extractNumbers} className={`${btnBase} bg-teal-500`}>
        Extract Numbers
      </button>
      <button onClick={extractLinks} className={`${btnBase} bg-teal-600`}>
        Extract Links
      </button>
      <button onClick={removeExtraSpaces} className={`${btnBase} bg-yellow-500`}>
        Remove Extra Spaces
      </button>
      <button onClick={removeSpecialChars} className={`${btnBase} bg-red-500`}>
        Remove Special Chars
      </button>
    </div>
  );
}
