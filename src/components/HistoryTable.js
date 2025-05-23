import React from 'react';
import './assets/HistoryTable.css'; // CSS 따로 작성

function HistoryTable({ history }) {

  return (
    <div className="history-container">
      {/* <h3>History</h3> */}
      <table className="history-table">
        <thead>
          <tr>
            <th>Count</th>
            <th>Try</th>
            <th>Strike</th>
            <th>Ball</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
                <td>{entry.count +1}</td>
                <td>{entry.input}</td>
                <td>{entry.strikes}</td>
                <td>{entry.balls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
