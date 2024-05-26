import React from 'react';
import { useParams } from 'react-router-dom';
import './MatchDetail.css'; // Import the CSS file

const MatchDetail = ({ matches }) => {
  const { id } = useParams();
  const match = matches.find(m => m.num === parseInt(id));

  if (!match) {
    return <div>Match not found</div>;
  }

  return (
    <div className="match-detail">
      <h2>Match Details</h2>
      <div className="match-info">
        <div><strong>Date:</strong> {match.date}</div>
        <div><strong>Time:</strong> {match.time}</div>
        <div><strong>City:</strong> {match.city}</div>
        <div><strong>Stadium:</strong> {match.stadium.name}</div>
        <div><strong>Home Team:</strong> {match.team1.name}</div>
        <div><strong>Away Team:</strong> {match.team2.name}</div>
        <div><strong>Score:</strong> {match.score1 !== null ? match.score1 : 'N/A'} - {match.score2 !== null ? match.score2 : 'N/A'}</div>
      </div>
      <div className="goals">
        <strong>Goals:</strong>
        <ul>
          {match.goals1.map((goal, i) => (
            <li key={i}>{goal.name} ({goal.minute}')</li>
          ))}
          {match.goals2.map((goal, i) => (
            <li key={i}>{goal.name} ({goal.minute}')</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchDetail;
