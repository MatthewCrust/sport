import React, { useState } from 'react';
import MatchDetailPopup from './MatchDetailPopup';
import './KnockoutStage.css'; // Make sure to import the CSS file

const KnockoutStage = ({ stages }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleMatchClick = (match) => {
    setSelectedMatch(match);
  };

  return (
    <div className="knockout-stage">
      <h2>Knockout Stages</h2>
      <div className="stages-container">
        {Object.keys(stages).reverse().map(stage => (
          <div key={stage} className="stage">
            <h3>{stage}</h3>
            <ul>
              {stages[stage].map((match, index) => (
                <li
                  key={index}
                  onClick={() => handleMatchClick(match)}
                  className="match-item"
                >
                  <div>{match.team1.name} vs {match.team2.name}</div>
                  <div>Score: {match.score1 !== null ? match.score1 : 'N/A'} - {match.score2 !== null ? match.score2 : 'N/A'}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <MatchDetailPopup match={selectedMatch} isOpen={selectedMatch !== null} onClose={() => setSelectedMatch(null)} />
    </div>
  );
};

export default KnockoutStage;
