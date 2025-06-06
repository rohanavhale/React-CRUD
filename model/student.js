const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  age: String,
  skill: String
});

module.exports = mongoose.model('student', studentSchema); 


// student is collection name