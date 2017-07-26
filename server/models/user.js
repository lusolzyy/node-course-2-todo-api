var mongoose = require('mongoose');

//User
//email - required - trim - set type - set min length of 1
var User = mongoose.model('User', {
  email : {
      type: 'String',
      require: true,
      trim: true,
      minlength: 1
  }
});

module.exports = {
    User
};
