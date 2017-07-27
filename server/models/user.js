const mongoose = require('mongoose');
const validator = require('validator');





//User
//email - required - trim - set type - set min length of 1
var User = mongoose.model('User', {
  email : {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      unique: true,
      validator: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
      }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  TOKENS: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
  }]
});

module.exports = {
    User
};
