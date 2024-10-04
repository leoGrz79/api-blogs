const jwt = require('jsonwebtoken');

const getToken = (authorization) => {
  if (!authorization) return null;
  
  const token = authorization.split(' ');
  if (token.length === 2 && /^Bearer$/i.test(token[0])) return token[1];
  
  return authorization;
};

const checkToken = (token) => {
  const JWT_SECRET = process.env.JWT_SECRET || 'patatipatata';
  try {
    jwt.verify(token, JWT_SECRET);
    return jwt.decode(token);
  } catch (e) {
    return null;
  }
};

const authenticate = (req, res, next) => {
  const token = getToken(req.headers.authorization);
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Token not found' }); 
  }

  const user = checkToken(token);
  if (!user) {
    return res
      .status(401)
      .json({ message: 'Expired or invalid token' }); 
  }

  req.user = user;
  next();
};

module.exports = {
  authenticate,
};