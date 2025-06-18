const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  results: [
    {
      subject: String,
      grade: String,
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
