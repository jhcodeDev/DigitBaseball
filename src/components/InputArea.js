import React from 'react';
import './assets/components.css';

function InputArea({ userInput, onChange, onConfirm, onReset, onCount, userResult, isLose, answer, isWin }) {
  return (
      <div>
        <div style={styles.contents}>
            <p>Please put your guess Digit here</p>
        <div style={styles.inputRow}>
            {userInput.map((value, index) => (
            <input
                key={index}
                type="number"
                min="0"
                max="9"
                value={value}
                onChange={(e) => {
                const val = e.target.value;
                if (val.length <= 1 && /^[0-9]?$/.test(val)) {
                    onChange(index, val);
                }
                }}
                style={styles.input}
            />
            ))}
            <button style={styles.btn_confirm} onClick={onConfirm}>
                shoot
            </button>
        </div>
        <div>
            {onCount} / 10
        </div>

        {isWin? 
            (<div className='result-board'>🎉 YOU WIN! 🎉</div>) : 
            (isLose? 
                (<div>
                    <div className='result-board' style={{color: 'red'}}> YOU LOSE!😵 </div>
                    <button onClick={onReset}>Retry</button>    
                </div>
                ) :
                (<div className='result-board'>{userResult}</div>)
            )
        }
        </div>

    </div>
  );
}

const styles = {
    contents: {
        display: 'block',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    inputRow: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    input: {
        width: '40px',
        height: '40px',
        fontSize: '20px',
        margin: '0 5px',
        textAlign: 'center',
    },
    btn_confirm: {
        fontSize: '20px',
        padding: '8px 16px',
        cursor: 'pointer',
    },
    btn_reset: {
        fontSize: '20px',
        padding: '8px 16px',
        cursor: 'pointer',
        margin: '20px',
        height: '50px'
    }
};

export default InputArea;
