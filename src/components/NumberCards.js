import React from 'react';

function NumberCards() {
  return (
    <div style={styles.container}>
      {[0, 1, 2, 3].map((_, index) => (
        <div key={index} style={styles.card}>
          ?
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  card: {
    width: '60px',
    height: '80px',
    border: '2px solid #333',
    margin: '0 10px',
    fontSize: '32px',
    lineHeight: '80px',
    textAlign: 'center',
    borderRadius: '8px',
  },
};

export default NumberCards;
