const { BlogPost, PostCategory, Category, User } = require('../models');

const POST_DATA = [
  {
    model: User, as: 'user', attributes: { exclude: ['password'] },
  },
  {
    model: Category, as: 'categories', through: { attributes: [] },
  },
];

const createNewBlogPost = async ({ content, categoryIds, title }, userId) => {
  const postDate = new Date();
  const isCategory = await Category.findAll({ where: { id: categoryIds } });
  const postBody = { title, content, userId, updated: postDate, published: postDate };
  const newPost = await BlogPost.create(postBody);
  const allCategories = isCategory.map((cats) => ({ postId: newPost.id, categoryId: cats.id }));  
  await PostCategory.bulkCreate(allCategories);  
  return newPost;
};

const getAllBlogPosts = async (userId) => {
  const allPosts = await BlogPost.findAll({ 
    where: { userId },
    include: POST_DATA, 
  });
  return allPosts;
};

const postByID = async (userId, id) => {
  const blogPost = await BlogPost.findOne({ where: { userId, id }, include: POST_DATA });
  if (!blogPost) return { message: 'Post does not exist' };
  return blogPost;
};

const updateValidation = async (id, userId) => {
  const blogPost = await BlogPost.findOne({ where: { id } });
  if (!blogPost) return { message: 'Post does not exist' };
  if (blogPost.userId !== userId) return { status: 401, message: 'Unauthorized user' };
  return { status: 200, blogPost };
};

const postUpdate = async (id, userId, { content, title }) => {
  if (!content || !title) return { status: 400, message: 'Some required fields are missing' };
  const postDate = new Date();
  const isValid = await updateValidation(id, userId);
  if (isValid.status !== 200) return isValid;
  await BlogPost.update({ content, title, updated: postDate }, { where: { id, userId } });
  const updatedPost = await BlogPost.findOne({ where: { id, userId }, include: POST_DATA });
  return { status: 200, post: updatedPost };
};
const updateBlogPost = (id, userId, { title, content }) => 
  postUpdate(id, userId, { title, content });

module.exports = {
  createNewBlogPost,
  getAllBlogPosts,
  postByID,
  updateBlogPost,
};