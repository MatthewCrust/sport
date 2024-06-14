import React, { useContext } from 'react';
import GroupItem from './GroupItem';
import './GroupList.css'; // Make sure to import the CSS file
import { AuthContext } from './AuthContext';

const GroupList = ({ groups }) => {
  const { isLoggedIn } = useContext(AuthContext);
  
  if (!isLoggedIn) {
    return <div>Please sign in.</div>;
  }

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
