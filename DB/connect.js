const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(process.env.DB_URI);
};

module.exports = connectDB;
