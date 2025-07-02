import React, { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function ShareLink({ text }) {
  // On mount, load from hash:
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      try {
        const decoded = decodeURIComponent(hash);
        // Only replace if different
        if (decoded !== text) {
          window.dispatchEvent(
            new CustomEvent('loadSharedText', { detail: decoded })
          );
        }
      } catch {}
    }
  }, []);

  // Debounced update of hash when text changes:
  const updateHash = useDebouncedCallback((value) => {
    const encoded = encodeURIComponent(value);
    window.history.replaceState(null, '', `#${encoded}`);
  }, 500);

  useEffect(() => {
    updateHash(text);
  }, [text, updateHash]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    } catch (err) {
      alert('Failed to copy link: ' + err);
    }
  };

  return (
    <div className="flex items-center gap-2 mb-6">
      <button
        onClick={handleCopyLink}
        className="px-3 py-1 bg-indigo-500 text-white rounded hover:opacity-90 transition"
      >
        Copy Shareable Link
      </button>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        (Auto‑updates URL hash)
      </span>
    </div>
  );
}
