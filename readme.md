Objective
==============
### Authenticating Node.js Applications With Passport
* Focus on authentication, with a simple Express app.
* Develop a Node.js application from scratch and use a relatively new but very popular authentication middleware - Passport to take care of our authentication concerns.

passport-mongo
==============

This repository serves as an example of a basic Node.js application which is using [Passport](http://passportjs.org/) as the authentication middleware for authenticating against a locally configured Mongo backend

Steps to run the app
=====================
* After cloning the repo, install the dependencies by running **npm install**
* To start the server, run **npm start** on the base directory

Perquisites
============
The server assumes that you have a local mongo instance running. This means if you have mongo installed locally, all you need to do is configure the db.js file correctly and run the mongod daemon.

#### Dependencies for this app:
```
"dependencies": {
  "express": "~4.2.0",
  "static-favicon": "~1.0.0",
  "morgan": "~1.0.0",
  "cookie-parser": "~1.0.1",
  "body-parser": "~1.0.0",
  "express-session": "~1.0.4",
  "debug": "~0.7.4",
  "jade": "~1.3.0",
  "passport": "~0.2.0",
  "passport-local": "~1.0.0",
  "mongoose": "~3.8.12",
  "bcrypt-nodejs" : "*",
  "connect-flash" : "*"
}

```

Bird eye view of app
============
![Bird eye view of app](https://cms-assets.tutsplus.com/uploads/users/388/posts/21619/image/Bird_Eye_View_of_PassportJS_App.png)

[Tutorial](http://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619)
