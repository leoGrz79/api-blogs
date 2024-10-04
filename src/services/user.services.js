const { User } = require('../models');
const { webtoken } = require('../utils/tokengenerator');

const userManagerService = { 
  async checkUser(email) {
    return User.findOne({ where: { email } });
  },

  async createNewUser(userInfo) {
    return User.create({
      displayName: userInfo.displayName,
      email: userInfo.email,
      password: userInfo.password,
      image: userInfo.image,
    });
  },

  async userAdd(userInfo) {
    if (await this.checkUser(userInfo.email)) return { error: 'User already registered' };
    const newUserAdded = await this.createNewUser(userInfo);
    const token = webtoken(newUserAdded.id);
    return { token };
  },

  async allUsers() {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  },

  async usersById(id) {
    const user = await User.findByPk(id, {
      attributes: ['id', 'displayName', 'email', 'image'],
    });

    if (!user) return { error: 'User does not exist' };
    return user;
  },
};

module.exports = userManagerService;