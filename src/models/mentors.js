const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: false,
    min: 10,
    max: 10
  }
})

module.exports = mongoose.model('mentors', mentorSchema)
