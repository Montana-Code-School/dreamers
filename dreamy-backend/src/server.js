const path = require('path');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRouter = require('./routes/user');
const EntryRouter = require('./routes/entry');
const TagRouter = require('./routes/tag');
const authRouter = require('./routes/auth');
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
const authCheckMiddleware = require('./middleware/auth-check');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors())

app.use(passport.initialize());
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// });

mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {
  useMongoClient: true
})

app.use('/api', authCheckMiddleware);
app.use('/auth', authRouter);
app.use('/api', UserRouter);
app.use('/api', EntryRouter);
app.use('/api', TagRouter);

// Set Port, hosting services will look for process.env.PORT
app.set('port', (process.env.PORT || 5000));

// start the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
