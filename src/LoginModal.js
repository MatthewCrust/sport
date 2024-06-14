import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { AuthContext } from './AuthContext';
import { auth } from './Firebase'; // Ensure Firebase is configured properly
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(null);
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, usernameInput, passwordInput);
      setIsLoggedIn(true);
      onClose();
    } catch (loginError) {
      try {
        await createUserWithEmailAndPassword(auth, usernameInput, passwordInput);
        setIsLoggedIn(true);
        onClose();
      } catch (signUpError) {
        setError(signUpError.message);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login"
      className="login-modal"
      overlayClassName="login-modal-overlay"
    >
      <div className="login-modal-content">
        <button className="close" onClick={onClose}>&times;</button>
        <h2>Login or Sign Up</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              id="username"
              value={usernameInput}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={passwordInput}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login / Sign Up</button>
        </form>
        {error && <div className="alert">{error}</div>}
      </div>
    </Modal>
  );
};

export default LoginModal;
