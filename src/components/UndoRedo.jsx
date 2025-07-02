import React from 'react';

export default function UndoRedo({ canUndo, canRedo, onUndo, onRedo }) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className="px-3 py-1 bg-gray-500 text-white rounded disabled:opacity-50"
      >
        Undo
      </button>
      <button
        onClick={onRedo}
        disabled={!canRedo}
        className="px-3 py-1 bg-gray-500 text-white rounded disabled:opacity-50"
      >
        Redo
      </button>
    </div>
  );
}
