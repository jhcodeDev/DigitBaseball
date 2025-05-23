// src/App.js
import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [answer, setAnswer] = useState([]);

  const startGame = () => {
    const numbers = generateUniqueRandomNumbers(4);
    setAnswer(numbers);
    setGameStarted(true);
  };

  const resetGame = () => {
    const confirmed = window.confirm('Set new Game?');
    if(confirmed) {
      setGameStarted(false);
    }
  };

  const generateUniqueRandomNumbers = (count) => {
    const digits = [];
    while (digits.length < count) {
      const rand = Math.floor(Math.random() * 10);
      if (!digits.includes(rand)) {
        digits.push(rand);
      }
    }
    return digits;
  };

  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>⚾ Digit Baseball ⚾</h1>
      {gameStarted? <GameScreen answer={answer} onResetMain={resetGame} /> : <StartScreen onStart={startGame} />}
    </div>
  );
}

export default App;
