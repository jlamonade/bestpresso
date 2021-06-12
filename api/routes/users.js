var express = require('express');
var router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')

/* POST users listing. */
/* for registering users */
router.post('/register', async (req, res, next) => {
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
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(400).send({ message: 'User does not exist' })
    }
    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).send({ message: 'Incorrect password'})
    }
    // if email and password are correct then
    res.send({ message: 'Username and password are correct!' })
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/', async (req, res) => {
  const userData = await User.find({})
  res.json(userData)
})

module.exports = router;
