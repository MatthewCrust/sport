import React, { useState } from 'react';
import MatchDetailPopup from './MatchDetailPopup';
import './TeamMatches.css'; // Make sure to import the CSS file

const TeamMatches = ({ matches }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showScores, setShowScores] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  // Filter matches based on search term
  const filteredMatches = matches.filter(match =>
    match.team1.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.team2.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMatchClick = (match) => {
    setSelectedMatch(match);
  };

  return (
    <div className="team-matches">
      <h2>All Matches</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Team"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <label>
          Show Scores:
          <input
            type="checkbox"
            checked={showScores}
            onChange={() => setShowScores(!showScores)}
          />
        </label>
      </div>
      <ul className="matches-list">
        {filteredMatches.map((match, index) => (
          <li
            key={index}
            onClick={() => handleMatchClick(match)}
            className="match-item"
          >
            <div>{match.team1.name} vs {match.team2.name}</div>
            {showScores && (
              <div>Score: {match.score1 !== null ? match.score1 : 'N/A'} - {match.score2 !== null ? match.score2 : 'N/A'}</div>
            )}
          </li>
        ))}
      </ul>
      <MatchDetailPopup match={selectedMatch} isOpen={!!selectedMatch} onClose={() => setSelectedMatch(null)} />
    </div>
  );
};

export default TeamMatches;
