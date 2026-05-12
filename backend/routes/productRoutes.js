const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, admin } = require('../middleware/authMiddleware');

// 1. Get all products (Sab ke liye)
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// 2. Get single product (Sab ke liye)
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
});

// 3. 🔴 Delete Product (Sirf Admin ke liye)
router.delete('/:id', protect, admin, async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.deleteOne();
    res.json({ message: 'Product removed successfully' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// 4. 🔵 Add New Product (Sirf Admin ke liye)
router.post('/', protect, admin, async (req, res) => {
  const { name, price, image, category, description, brand, countInStock } = req.body;
  
  const product = new Product({
    name,
    price,
    user: req.user._id,
    image,
    brand: brand || 'Sample Brand',
    category,
    countInStock: countInStock || 0,
    description
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// 5. 🟡 Update Product (Sirf Admin ke liye - EDIT Feature)
router.put('/:id', protect, admin, async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;