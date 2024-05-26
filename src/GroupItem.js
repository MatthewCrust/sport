import React from 'react';
import './GroupItem.css'; // Make sure to import the CSS file

const GroupItem = ({ group }) => {
  if (!group || !group.teams || !Array.isArray(group.teams)) {
    return <div className="error">Error: Invalid group data</div>;
  }

  return (
    <div className="group-item">
      <h3>{group.name}</h3>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {group.teams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupItem;
