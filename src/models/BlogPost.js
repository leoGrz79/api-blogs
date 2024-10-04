/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true 
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, 
  {
    timestamps: false,
    modelName: 'BlogPosts',
    underscored: true,
    tableName: 'blog_posts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};