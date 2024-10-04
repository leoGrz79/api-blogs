const { Category } = require('../models');

const isValid = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const postId = await Promise.all(categoryIds.map((id) => Category.findOne({ where: { id } })));
  // if (!title || !content || categoryIds < 1) {
  //   return res.status(400).json({ message: 'Some required fields are missing' });
  // }

  if (!title) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!content || categoryIds < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (postId.includes(null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = {
  isValid,
}; 