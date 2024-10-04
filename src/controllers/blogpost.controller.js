const postServices = require('../services/blogpost.services');

const createPost = async (req, res) => {
  const blogPost = req.body;
  const { id } = req.user;
  const newBlogPost = await postServices.createNewBlogPost(blogPost, id);
  res.status(201).json(newBlogPost);
};

const getAllPosts = async (req, res) => {
  const { id } = req.user;
  const posts = await postServices.getAllBlogPosts(id);
  res.status(200).json(posts);
};

const postByID = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const post = await postServices.postByID(userId, id);
  if (post.message) return res.status(404).json(post);
  res.status(200).json(post);
};

const postUpdate = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const blogpost = req.body;
  const response = await postServices.updateBlogPost(id, userId, blogpost);
  if (response.post) {
    res.status(response.status).json(response.post);
  } else {
    res.status(response.status).json({ message: response.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  postByID,
  postUpdate,
};