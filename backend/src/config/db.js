require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log(process.env.URL);
    
    await mongoose.connect(process.env.URL);
    console.log('MongoDB connected ✅');
  } catch (err) {
    console.error('MongoDB connection failed ❌', err);
    process.exit(1);
  }
};

module.exports = connectDB;
