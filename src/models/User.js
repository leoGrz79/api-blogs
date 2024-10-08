/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
      allowNull: false,
     },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  {
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'blog_posts' });
  };

  return User;
};