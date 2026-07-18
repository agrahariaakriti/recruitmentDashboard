const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const db_name = 'recruitoedhboard';
const connectDB = async (uri) => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${db_name}`);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
