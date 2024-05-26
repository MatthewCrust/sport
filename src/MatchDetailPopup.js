import React from 'react';
import Modal from 'react-modal';

const MatchDetailPopup = ({ match, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Match Details"
    >
      <div className="match-detail-content">
        <button className="close" onClick={onClose}>&times;</button>
        <h2>{match && match.team1.name} vs {match && match.team2.name}</h2>
        <p>Date: {match && match.date}</p>
        <p>Time: {match && match.time}</p>
        <p>Location: {match && match.city}, {match && match.stadium && match.stadium.name}</p>
        <p>Score: {match && match.score1 !== null ? match.score1 : 'N/A'} - {match && match.score2 !== null ? match.score2 : 'N/A'}</p>
        {/* Additional details */}
        <h3>Goals:</h3>
        <ul>
          {match && match.goals1 && match.goals1.map((goal, index) => (
            <li key={index}>
              {goal.name} ({goal.minute}' {goal.penalty ? 'penalty' : ''})
            </li>
          ))}
          {match && match.goals2 && match.goals2.map((goal, index) => (
            <li key={index}>
              {goal.name} ({goal.minute}')
            </li>
          ))}
        </ul>
        {/* Add more details as needed */}
      </div>
    </Modal>
  );
};

export default MatchDetailPopup;
