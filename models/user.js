// User model, for saving the user in Mongo
// Creating a Mongoose model using
// which we can perform CRUD operations on the underlying databse
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  username: String,
  password: String,
  email: String,
  gender: String,
  address: String
});
