const serviceUser = require('../services/user.services');
const { isValidUserInfo } = require('../utils/validator');

const userAdd = async (req, res) => {
  const validatorErrors = isValidUserInfo(req.body);
  if (validatorErrors) {
    return res.status(400).json({ message: validatorErrors });
  }
  const { displayName, email, password, image } = req.body;

  const response = await serviceUser.userAdd({ displayName, email, password, image });

  if (response.error) {
    const { error } = response;
    const statusCode = error === 'User already registered' ? 409 : 500;
    return res.status(statusCode).json({ message: error });
  } 
  return res.status(201).json(response);
};

const allUsers = async (_req, res) => {
  const users = await serviceUser.allUsers();
  res.status(200).json(users);
};

const usersById = async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.status(400).json({ message: 'Invalid Id' });
  // if (isNaN(Number(id))) return res.status(400).json({ message: 'Invalid Id' });
  const user = await serviceUser.usersById(id);
  if (user.error) {
    const statusCode = user.error === 'User does not exist' ? 404 : 500;
    return res.status(statusCode).json({ message: user.error });
  }
  
  return res.status(200).json(user);
};

module.exports = {
  userAdd,
  allUsers,
  usersById,
};