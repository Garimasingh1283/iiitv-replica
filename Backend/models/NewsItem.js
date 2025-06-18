const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["ANNOUNCEMENT", "NEWS", "EVENTS"],
    required: true
  },
  points: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("NewsItem", newsSchema);
