import React, { useState } from "react";

function SelectCards() {
  const [numberStates, setNumberStates] = useState(Array(10).fill(0)); 
  // 0: 기본, 1: 비활성화, 2: 확신 표시

  const cycleState = (index) => {
    setNumberStates((prev) => {
      const newStates = [...prev];
      newStates[index] = (newStates[index] + 1) % 3; // 0 → 1 → 2 → 0 반복
      return newStates;
    });
  };

  const getCardStyle = (state) => {
    switch (state) {
      case 1:
          return { backgroundColor: "#4caf50", color: "#fff" }; // 확신 (강조)
      case 2:
          return { backgroundColor: "#ccc", color: "#666", textDecoration: 'line-through' }; // 비활성화
      default:
        return { backgroundColor: "#fff", color: "#000" }; // 기본
    }
  };

  return (
    <div>
        <div style={styles.container}>
        {[...Array(10).keys()].map((number) => (
            <div
            key={number}
            style={{ ...styles.card, ...getCardStyle(numberStates[number]) }}
            onClick={() => cycleState(number)}
            >
            {number}
            </div>
        ))} </div> 
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    maxWidth: '500px',
  },
  card: {
    width: "60px",
    height: "80px",
    border: "2px solid #333",
    margin: "10px",
    fontSize: "32px",
    lineHeight: "80px",
    textAlign: "center",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    justifyContent: 'center',
    alignItem: 'center',
  },
};

export default SelectCards;
