// backend/models/student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  enrollmentNo: { type: String, required: true },
  seatNo: { type: String, required: true },
  semester: { type: Number, required: true },
  cgpa: { type: Number, required: true },
  sgpa: { type: Number, required: true },
// 
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
