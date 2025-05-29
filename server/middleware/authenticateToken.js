const jwt = require('jsonwebtoken');
require('dotenv').config(); // Завантажує змінні з .env

const secretKey = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1]; // дістаємо токен після "Bearer"
  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
