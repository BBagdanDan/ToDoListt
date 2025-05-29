const API_BASE_URL = 'http://localhost:5000';

const SESSION_TIMEOUT = 300000;

const RESET_SESSION = () => {
  window.dispatchEvent(new CustomEvent('resetSession'));
};

module.exports = {
  API_BASE_URL,
  SESSION_TIMEOUT,
  RESET_SESSION,
};
