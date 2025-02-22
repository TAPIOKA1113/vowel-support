import React from 'react';
import './App.css';

function App() {
  const vowels = ['あ', 'い', 'う', 'え', 'お'];

  const playVowel = (vowel: string) => {
    console.log(`${vowel}の音を再生します`);
  };

  return (
    <div className="App">
      <h1>吃音支援アプリ</h1>
      <div className="vowel-container">
        {vowels.map((vowel) => (
          <button
            key={vowel}
            className="vowel-button"
            onClick={() => playVowel(vowel)}
          >
            {vowel}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
