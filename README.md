# VerbiVolt

VerbiVolt is a feature-rich, modern text processing and transformation tool built with React and TailwindCSS. It enables users to input, transform, analyze, summarize, and export text using a clean, customizable UI. This README provides a detailed guide to the project's setup, structure, features, and how it evolved.

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Setup Instructions](#setup-instructions)
* [TailwindCSS Configuration](#tailwindcss-configuration)
* [Usage](#usage)
* [Development History](#development-history)
* [Future Improvements](#future-improvements)
* [License](#license)

---

## Overview

VerbiVolt is designed for users who want to enhance, analyze, and interact with text. It provides various utilities like case transformation, clipboard interaction, TTS (text-to-speech), summaries, analytics, and export features (like PDF and shareable links).

---

## Features

* **Live Text Input**
* **Text Transformations**: Uppercase, lowercase, sentence case, reverse, Base64 encoding
* **Clipboard Actions**: Copy/paste
* **Text-to-Speech (TTS)**: Adjustable rate
* **Text Summary**: Word count, character count, estimated reading time
* **Word Frequency Analysis**: Displays repeated words and their count
* **Undo/Redo**: History tracking
* **Download & Export**: Save as `.txt` or `.pdf`
* **Dark/Light Mode Toggle**
* **Auto Copy**: Automatically copy results
* **Analytics Dashboard**
* **Shareable Link Support**: Load shared text via custom event
* **Settings Panel**: Configure TTS rate and auto-copy behavior

---

## Tech Stack

* **Frontend**: React (Vite + JSX)
* **Styling**: TailwindCSS
* **PDF Export**: jsPDF
* **Clipboard**: Web Clipboard API
* **Speech**: Web Speech API

---

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Analytics.jsx
│   │   ├── ClipboardActions.jsx
│   │   ├── DownloadText.jsx
│   │   ├── ExportPDF.jsx
│   │   ├── Settings.jsx
│   │   ├── ShareLink.jsx
│   │   ├── TextInput.jsx
│   │   ├── TextSummary.jsx
│   │   ├── TextToSpeech.jsx
│   │   ├── TransformButtons.jsx
│   │   ├── UndoRedo.jsx
│   │   ├── UtilityButtons.jsx
│   │   └── WordFrequency.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/your-username/verbivolt.git
cd verbivolt
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Initialize TailwindCSS (if not already)

```bash
npx tailwindcss init -p
```

### 4. Configure `tailwind.config.js`

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [],
};
```

### 5. Configure `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    @apply bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6;
  }
  .btn {
    @apply px-4 py-2 rounded-2xl font-medium transition;
  }
  .btn-primary {
    @apply btn bg-blue-500 hover:bg-blue-600 text-white;
  }
  .btn-secondary {
    @apply btn bg-gray-500 hover:bg-gray-600 text-white;
  }
  .btn-accent {
    @apply btn bg-indigo-500 hover:bg-indigo-600 text-white;
  }
}
```

### 6. Run Development Server

```bash
npm run dev
```

---

## Usage

* Input text in the text box.
* Use transform buttons to apply case changes or reverse.
* Click export or download buttons to save output.
* Enable dark mode from the top-right toggle.
* Adjust text-to-speech speed from the Settings panel.

---

## Development History

This project was built incrementally by layering features. Here's how it progressed:

1. ✅ Started with basic text input and display
2. ✅ Added transformation buttons (uppercase, lowercase, reverse, etc.)
3. ✅ Introduced copy/paste via clipboard API
4. ✅ Integrated Web Speech API for TTS
5. ✅ Implemented summary and word frequency logic
6. ✅ Added Undo/Redo history tracking
7. ✅ Added export features (.txt and .pdf)
8. ✅ Introduced analytics panel
9. ✅ Designed live dark mode toggle
10. ✅ Added shareable link loader
11. ✅ Implemented settings panel (TTS rate, auto-copy)
12. ✅ Applied TailwindCSS and cleaned up the UI

---

## Future Improvements

* 🌐 Backend integration for saving user sessions
* 🧠 AI-powered text suggestions/summarization
* 📱 PWA support for offline usage
* 🔍 Search and highlight feature
* 🧪 Unit tests and component tests

---

Made with ❤️ using React, Tailwind.

