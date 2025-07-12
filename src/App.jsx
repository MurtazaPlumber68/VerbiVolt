import React, { useState, useEffect } from 'react';
import Settings from './components/Settings';
import TextInput from './components/TextInput';
import TransformButtons from './components/TransformButtons';
import ClipboardActions from './components/ClipboardActions';
import TextToSpeech from './components/TextToSpeech';
import UtilityButtons from './components/UtilityButtons';
import DownloadText from './components/DownloadText';
import ExportPDF from './components/ExportPDF';
import ShareLink from './components/ShareLink';
import UndoRedo from './components/UndoRedo';
import TextSummary from './components/TextSummary';
import WordFrequency from './components/WordFrequency';
import Analytics from './components/Analytics';
import Card from './components/Card';

export default function App() {
  const [text, rawSetText] = useState('');
  const [history, setHistory] = useState(['']);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [dark, setDark] = useState(false);

  // NEW SETTINGS STATE:
  const [ttsRate, setTtsRate] = useState(1.0);
  const [autoCopy, setAutoCopy] = useState(false);

  // Load shared text
  useEffect(() => {
    const onLoad = e => {
      rawSetText(e.detail);
      setHistory([e.detail]);
      setHistoryIndex(0);
    };
    window.addEventListener('loadSharedText', onLoad);
    return () => window.removeEventListener('loadSharedText', onLoad);
  }, []);

  // Dark mode sync
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  // Wrap setText for history
  const setText = newText => {
    const upToNow = history.slice(0, historyIndex + 1);
    const next = [...upToNow, newText];
    setHistory(next);
    setHistoryIndex(next.length - 1);
    rawSetText(newText);
  };

  const handleUndo = () => {
    if (historyIndex === 0) return;
    const idx = historyIndex - 1;
    setHistoryIndex(idx);
    rawSetText(history[idx]);
  };

  const handleRedo = () => {
    if (historyIndex === history.length - 1) return;
    const idx = historyIndex + 1;
    setHistoryIndex(idx);
    rawSetText(history[idx]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 dark:bg-gray-900 dark:text-white">
      <header className="flex justify-between items-center mb-8 container mx-auto px-4">
        <h1 className="text-4xl font-extrabold">VerbiVolt</h1>
        <button
          onClick={() => setDark(d => !d)}
          className="btn btn-secondary"
        >
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="container mx-auto px-4 space-y-6">
        <Card title="Settings">
          <Settings
            ttsRate={ttsRate}
            setTtsRate={setTtsRate}
            autoCopy={autoCopy}
            setAutoCopy={setAutoCopy}
          />
        </Card>

        <Card title="Input">
          <TextInput text={text} setText={setText} />
        </Card>

        <Card title="Transform">
          <TransformButtons
            text={text}
            setText={setText}
            autoCopy={autoCopy}
          />
        </Card>

        <Card title="Actions">
          <div className="flex flex-wrap gap-4">
            <ClipboardActions text={text} setText={setText} />
            <TextToSpeech text={text} rate={ttsRate} />
          </div>
        </Card>

        <Card title="Utilities">
          <UtilityButtons text={text} setText={setText} />
        </Card>

        <Card title="Export & Share">
          <div className="flex flex-wrap gap-4">
            <DownloadText text={text} />
            <ExportPDF text={text} />
            <ShareLink text={text} />
          </div>
        </Card>

        <Card title="History">
          <UndoRedo
            canUndo={historyIndex > 0}
            canRedo={historyIndex < history.length - 1}
            onUndo={handleUndo}
            onRedo={handleRedo}
          />
        </Card>

        <Card title="Analysis">
          <TextSummary text={text} />
          <WordFrequency text={text} />
          <Analytics text={text} />
        </Card>

        <Card title="Preview">
          <p>{text || 'Nothing to preview.'}</p>
        </Card>
      </main>
    </div>
  );
}
