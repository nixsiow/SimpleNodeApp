// Define Passport's strategies for handling login
// Would be an instance of the Local Authentication Strategy of Passport
// And would be using the passport.use() function.
// connect-flash to help use with error handling by providing flash messages which can be displayed to user on error.

var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
	// First parameter: name of the strategy - login
	// Second parameter: the type of strategy that you want to create, here we use the username-password or the LocalStrategy
	passport.use('login', new LocalStrategy({
		// The passReqToCallback config variable allows us to access the request object in the callback
		// thereby enabling us to use any parameter associated with the request.
		passReqToCallback : true
	},
	// callback function
  function(req, username, password, done) {
    // First thing to check in mongo if a user with username exists or not
		// we use Mongoose API to find the user in our collection of Users
    User.findOne({ 'username' :  username },
      function(err, user) {
        // In case of any error, return using the done method
        if (err)
            return done(err);
        // Username does not exist, log the error and redirect back
        if (!user){
            console.log('User Not Found with username '+username);
            return done(null, false, req.flash('message', 'User Not found.'));
        }
        // User exists but wrong password, log the error
        if (!isValidPassword(user, password)){
            console.log('Invalid Password');
						// redirect back to login page
            return done(null, false, req.flash('message', 'Invalid Password'));
        }
        // User and password both match, return user from done method
        // which will be treated like success
        return done(null, user);
      }
    );
	}));

  var isValidPassword = function(user, password){
		// Since passwords are inherently weak in nature, we should always encrypt them before saving them to the database.
		// So bCrypt help us on encryption and decryption of passwords.
    return bCrypt.compareSync(password, user.password);
  }
}
