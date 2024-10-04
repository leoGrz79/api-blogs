const jwt = require('jsonwebtoken');

const webtoken = (id) => {
  const JWT_SECRET = process.env.JWT_SECRET || 'patatipatata';
  const authToken = jwt.sign({ id }, JWT_SECRET, { expiresIn: '900s' }); // updated after Live Lesson 5.4
  return authToken;
};

module.exports = {
  webtoken,
};