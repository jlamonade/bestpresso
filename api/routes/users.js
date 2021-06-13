const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

/* 
serializes the user data into the user session
saving user info into the user session
this is triggered upon successful invocation of the LocalStrategy
*/
passport.serializeUser((user, done) => done(null, user.id))

/* 
deserializes user info from the session 
basically retrieving user info from the session
this is triggered when server receives a request with attached session cookie 
containing user id
*/
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

/* 
using local strategy which means comparing login info with info in the database

find user by email then use bcrypt compare to see if passwords are a match

if passwords match then return the user object
*/
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => { 
  User.findOne({ email: email }, (err, user) => {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }
    if (!bcrypt.compareSync(password, user.password)) { return done(null, false) }
    return done(null, user)
  })
}))

/* POST users listing. */
/* for registering users */
router.post('/register', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const result = await User.create(req.body)
    res.send(result)
  } catch (err) {
    if (err) res.status(500).send(err)
  }
});

/* POST users listing. */
/* Logging in route */
router.post('/login', async (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(400).jason({ errors: err })
    }
    if (!user) {
      return res.status(400).json({ errors: 'No User Found.'})
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(400).json({ errors: err })
      }
      return res.status(200).json({ success: `Now logged in as ${user.name}`})
    })
  })(req, res)
})

module.exports = router;
