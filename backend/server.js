const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// 🟢 Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes')); // 👈 Ye line add kar di hai

// MongoDB Connection Logic
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => console.log("❌ Connection Error: ", err));

// Test Route
app.get('/', (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));