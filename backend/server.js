const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares (JSON data read karne aur cross-origin access ke liye)
app.use(express.json());
app.use(cors());
app.use('/api/products', require('./routes/productRoutes'));

// MongoDB Connection Logic
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => console.log("❌ Connection Error: ", err));

// Test Route (Check karne ke liye ke backend chal raha hai)
app.get('/', (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));