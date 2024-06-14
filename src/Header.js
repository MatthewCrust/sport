import React, { useState } from 'react';
import './Header.css';
import LoginModal from './LoginModal'; // Import the LoginModal component

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <header className="header">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/2018_FIFA_World_Cup.svg/1200px-2018_FIFA_World_Cup.svg.png" alt="World Cup Logo" className="world-cup-logo" />
      <h1>2018 World Cup Matches</h1>
      <button className="sign-in-button" onClick={openLoginModal}>Sign In</button>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
};

export default Header;
