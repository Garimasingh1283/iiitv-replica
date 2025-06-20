const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/iiitv", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected to iiitv");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
