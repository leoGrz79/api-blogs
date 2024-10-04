const express = require('express');
const { login } = require('../controllers/login.controller');
const { userAdd, allUsers, usersById } = require('../controllers/user.controller');
const { authenticate } = require('../middlewares/authenticator');
const { addCategory, allCategories } = require('../controllers/category.controller');
const { isValid } = require('../middlewares/post');
const { 
  createPost,
  getAllPosts,
  postByID,
  postUpdate,
} = require('../controllers/blogpost.controller');

const router = express.Router();

router
  .post('/login', login)
  .post('/user', userAdd)
  .use(authenticate)
  .get('/user', allUsers)
  .get('/user/:id', usersById)
  .post('/categories', addCategory)
  .get('/categories', allCategories)
  .post('/post', isValid, createPost)
  .get('/post', getAllPosts)
  .get('/post/:id', postByID)
  .put('/post/:id', postUpdate);

module.exports = router;