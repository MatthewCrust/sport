import React from 'react';
import './Header.css'; // Make sure to import the CSS file

const Header = () => {
  return (
    <header className="header">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/2018_FIFA_World_Cup.svg/1200px-2018_FIFA_World_Cup.svg.png" alt="World Cup Logo" className="world-cup-logo" />
      <h1>2018 World Cup Matches</h1>
    </header>
  );
};

export default Header;
