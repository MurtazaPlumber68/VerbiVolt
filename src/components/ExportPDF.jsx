import React from 'react';
import jsPDF from 'jspdf';

export default function ExportPDF({ text }) {
  const handleExport = () => {
    if (!text) return alert('Nothing to export!');
    const doc = new jsPDF({
      unit: 'pt',
      format: 'letter',
    });
    const margin = 40;
    const lineHeight = 14;
    const maxWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    const lines = doc.splitTextToSize(text, maxWidth);

    doc.setFontSize(12);
    doc.text(lines, margin, margin);
    doc.save('verbi-volt-text.pdf');
  };

  return (
    <div className="mb-6">
      <button
        onClick={handleExport}
        className="px-3 py-1 bg-red-600 text-white rounded hover:opacity-90 transition"
      >
        Export as PDF
      </button>
    </div>
  );
}
