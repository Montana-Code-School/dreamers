const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./src/models/users');
const Entry = require('./src/models/entry');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// mongoose.connect('ds259105.mlab.com:59105/dreamers -u n8 -p nstn8e81');
mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {useMongoClient: true})
var port = 5000;

var router = express.Router();

//middleware
router.use(function(req, res, next){
  console.log("something is happening");
  next();
})

app.use('/api', router);

  /*******************************************
    GET ALL USERS
  *******************************************/
router.route('/users')
  .get(function(req, res) {
    User.find(function(err, users){
      if (err)
        res.send(err);

      res.json(users)
    });
  })

  /*******************************************
    CREATE USER
  *******************************************/

  .post(function(req, res) {
    var user = new User();
    console.log("new user")
    console.log(req)
    user._id = mongoose.Types.ObjectId();
    user.dateCreated = new Date();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.birthDate = req.body.birthDate;
    user.age = req.body.age;
    user.sign = req.body.sign;
    user.gender = req.body.gender;
    user.interests = req.body.interests;
    user.bio = req.body.bio;


    user.save(function(err){
      if(err)
        res.send(err);

        res.json({message: "User created"});
    });
  })

  /*******************************************
    GET ONE USER BY ID
  *******************************************/

router.route('/users/:userid')
  .get(function(req, res) {
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
      res.json(user);
    });
  })

  /*******************************************
    UPDATE ONE USER BY ID
  *******************************************/

  .put(function(req, res) {
    console.log("update user")
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
        user.firstName = req.body.firstName ? req.body.firstName:user.firstName;
        user.lastName = req.body.lastName ? req.body.firstName:user.firstName;
        user.email = req.body.email ? req.body.email:user.email;
        user.birthDate = req.body.birthDate ? req.body.birthDate:user.birthDate;
        user.age = req.body.age ? req.body.age:user.age;
        user.sign = req.body.sign ? req.body.sign:user.sign;
        user.gender = req.body.gender ? req.body.gender:user.gender;
        user.interests = req.body.interests ? req.body.interests:user.interests;
        user.bio = req.body.bio ? req.body.bio:user.bio;
      user.save(function(err){
        if(err)
          res.send(err);

          res.json({message: "User updated"});
      });
    });
  })

  /*******************************************
    DELETE ONE USER BY ID
  *******************************************/

  .delete(function(req, res) {
    User.remove({
      _id: req.params.userid
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({message: 'Deleted'});
    });
  })

  /*******************************************
    GET ALL ENTRIES
  *******************************************/

router.route('/journals')
  .get(function(req, res) {
      Entry.find(function(err, entry){
        if (err)
          res.send(err);

        res.json(entry)
      });
  })

  .post(function(req, res) {
    var entry = new Entry();
    console.log("new entry")
    entry._id = mongoose.Types.ObjectId();
    entry.dateCreated = new Date();
    entry.dreamDate = req.body.dreamDate;
    entry.entryTitle = req.body.entryTitle;
    entry.anonymous = req.body.anonymous;
    entry.private = req.body.private;
    entry.description = req.body.description;
    entry.personalNotes = req.body.personalNotes;
    entry.bedTime = req.body.bedTime;
    entry.wakeTime = req.body.wakeTime;

    entry.save(function(err){
      if(err)
        res.send(err);

        res.json({message: "Entry created"});
    });
  })

  /*******************************************
    GET ONE ENTRY BY USER ID
  *******************************************/

  router.route('/journals/:userid')
  .post(function(req, res) {
    console.log(User)
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
        // var entry = new Entry();
        // console.log("new entry")
        // entry._id = mongoose.Types.ObjectId();
        // entry.createdBy = req.params.userid;
        // entry.dateCreated = new Date();
        // entry.dreamDate = req.body.dreamDate;
        // entry.entryTitle = req.body.entryTitle;
        // entry.anonymous = req.body.anonymous;
        // entry.private = req.body.private;
        // entry.description = req.body.description;
        // entry.personalNotes = req.body.personalNotes;
        // entry.bedTime = req.body.bedTime;
        // entry.wakeTime = req.body.wakeTime;
        console.log(user)
        console.log(req.params.userid)
        res.json({message: 'something'})
        // user.journalEntries.push(entry);
        // user.save(function(err){
        //   if(err)
        //     res.send(err);
        //
        //     res.json({message: "journal entry added to users"});
        // });
        // entry.save(function(err){
        //   if(err)
        //     res.send(err);
        //
        //     res.json({message: "Entry created"});
        // });
    });
  })



router.route('/journals/:journalid')
  .get(function(req, res) {
    res.json({message: "got one journal entry by id by user id"})
  })

  .post(function(req, res) {
    res.json({message: "update on journal by id by user id"})
  })

  .delete(function(req, res) {
    res.json({message: "deletes one journal entry by id by user id"})
  })

app.listen(port);
