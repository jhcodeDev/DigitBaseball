import React, { useState } from 'react';
import NumberCards from './NumberCards';
import InputArea from './InputArea';
import SelectCards from './SelectCards';
import HistoryTable from './HistoryTable';

function GameScreen({ answer, onResetMain }) {
  const [userInput, setUserInput] = useState(['', '', '', '']);
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [isWin, setIswin] = useState(false);
  const [isLose, setIsLose] = useState(false);
  const [resultText, setResult] = useState('');

  const resetGames = () => {
    setHistory([]);
    setUserInput(['', '', '', '']); // 입력 초기화
    setCount(0);
  }

  const handleGameStart = () => {
    setResetTrigger(prev => !prev);
  }

  const handleChange = (index, value) => {
    const newInput = [...userInput];
    newInput[index] = value;
    setUserInput(newInput);
  };

  const handleReset = () => {
    resetGames();
    handleGameStart();    
  };

  const handleConfirm = () => {
    if (userInput.some(v => v === '')) {
      alert('숫자 4개를 모두 입력해주세요.');
      return;
    }

    if(count >= 2){
        setIsLose(true);
        return;
    }

    const userNums = userInput.map(Number);
    let strikes = 0;
    let balls = 0;

    userNums.forEach((num, idx) => {
      if (num === answer[idx]) {
        strikes++;
      } else if (answer.includes(num)) {
        balls++;
      }
    });

    const resultText = `${strikes} STRIKE, ${balls} BALL`;
    if( strikes === 4) {
        setIswin(true);
    } else {
        setResult(resultText);
    }
    

    const newHistory = {
      input: [...userInput],
      result: resultText,
      strikes: strikes,
      balls: balls,
      count: count
    };

    setHistory([newHistory, ...history]);
    setUserInput(['', '', '', '']); // 입력 초기화

    setCount(prev => prev +1);
  };

  return (
    <div style={styles.container}>
      {/* <NuInputAreamberCards /> */}
      <InputArea
        userInput={userInput}
        onChange={handleChange}
        onConfirm={handleConfirm}
        onReset={onResetMain}
        onCount={count}
        userResult={resultText}
        isLose={isLose}
        isWin={isWin}
        answer={answer}
      />
      <SelectCards />
      <HistoryTable history={history}></HistoryTable>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    maxWidth: '600px',
  },
  historyContainer: {
    marginTop: '30px',
  },
};

export default GameScreen;
