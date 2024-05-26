import React from 'react';
import GroupItem from './GroupItem';
import './GroupList.css'; // Make sure to import the CSS file

const GroupList = ({ groups }) => {
  return (
    <div className="group-list">
      <h2>Group List</h2>
      <div className="group-items">
        {groups.map((group, index) => (
          <GroupItem key={index} group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupList;
