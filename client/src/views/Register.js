import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, StyledLink, Container } from '../styles/styles';
import { registerUser } from '../api/authAPI';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await registerUser(username, password);
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Container>
      <h2>Register</h2>
      {errorMessage && (
        <p data-testid="error-message" style={{ color: 'red' }}>
          {errorMessage}
        </p>
      )}
      <Input
        data-testid="username-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <Input
        data-testid="password-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button data-testid="register-button" onClick={handleRegister}>
        Register
      </Button>
      <StyledLink to="/login">Already registered? Log in here</StyledLink>
    </Container>
  );
};

export default Register;
