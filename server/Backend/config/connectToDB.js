const mongoose = require('mongoose');

const connectToDB = () => {
  console.log('MONGO_DB value:', process.env.MONGO_DB); // ← add this line
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    });
};

module.exports = connectToDB;