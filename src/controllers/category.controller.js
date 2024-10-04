const { Category } = require('../models');
// const Category = require('../models/Category');

const addCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const cat = await Category.create({ name });
  res.status(201).json(cat);
};

const allCategories = async (_req, res) => {
  const cats = await Category.findAll();
  res.status(200).json(cats);
};

module.exports = {
  addCategory,
  allCategories,
};