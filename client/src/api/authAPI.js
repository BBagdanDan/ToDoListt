import { API_BASE_URL } from '../config';

export const loginUser = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    let errorMessage = 'Invalid login';
    try {
      const errorData = await response.json();
      errorMessage = errorData.error || errorMessage;
    } catch {
      const text = await response.text();
      errorMessage = text || errorMessage;
    }
    throw new Error(errorMessage);
  }

  return await response.json();
};

export const registerUser = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    let errorMessage = 'Registration failed';
    try {
      const errorData = await response.json();
      errorMessage = errorData.error || errorMessage;
    } catch {
      const text = await response.text();
      errorMessage = text || errorMessage;
    }
    throw new Error(errorMessage);
  }

  return await response.json();
};