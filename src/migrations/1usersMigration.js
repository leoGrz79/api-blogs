/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'display_name',
      },
      email: {
        type: Sequelize.STRING(255),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};