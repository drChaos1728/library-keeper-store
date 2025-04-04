
// This is a placeholder for MongoDB connection setup
// You will need to replace the connection string with your MongoDB Atlas connection string

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace the connection string with your MongoDB Atlas connection string
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/readvault', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
