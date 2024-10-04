const jwt = require('jsonwebtoken');
const { User } = require('../models');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) return null;
  
  const JWT_SECRET = process.env.JWT_SECRET || 'patatipatata';
  const authToken = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '900s' }); // updated after Live Lesson 5.4
  return authToken;
};

module.exports = {
  userLogin,
};