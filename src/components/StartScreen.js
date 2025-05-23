import React, {useState} from 'react';

function StartScreen({ onStart }) {
    const [isRule, setIsRule] = useState(false);

    const toggleRule = () => {
        setIsRule(prev => !prev);
    }


    return (

    <div>
        <div style={styles.container}>
        <button style={styles.button} onClick={onStart}>
            Start 🎮
        </button>
        <button style={styles.button} onClick={toggleRule}>
            Rule 🎮
        </button>
        </div>

        {isRule && (
            <div style={{marginTop: '20px', fontSize: '16px', color: '#555', textAlign: 'center'}}>
                <p> 🎯 4 STRIKE를 달성하세요! 🎯 </p>
                <p>1. 서로 다른 0~9 숫자 4개를 맞추는 게임입니다.</p>
                <p>2. 숫자와 위치가 맞으면 스트라이크, 숫자만 맞으면 볼입니다.</p>
                <p>3. 총 10번 안에 맞춰야 합니다.</p>
            </div>
        )}
    </div>
    );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    display: 'flex',
    flexWrap : 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  button: {
    fontSize: '24px',
    padding: '12px 24px',
    cursor: 'pointer',
  },
};

export default StartScreen;
