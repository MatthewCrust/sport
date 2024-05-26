import React from 'react';

const ClickableMatch = ({ match, onClick }) => {
  return (
    <li 
      onClick={() => onClick(match)} 
      style={{ cursor: 'pointer' }}
    >
      <div>{match.team1.name} vs {match.team2.name}</div>
      <div>Score: {match.score1 !== null ? match.score1 : 'N/A'} - {match.score2 !== null ? match.score2 : 'N/A'}</div>
    </li>
  );
};

export default ClickableMatch;
