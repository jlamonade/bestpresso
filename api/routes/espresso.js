const router = require('express').Router()
const Bean = require('../models/Bean')

// get beans by user
router.get('/', async (req, res) => {
  const beanData = await Bean.find({ user: req.session.passport.user })
  res.json(beanData)
})

// create bean
router.post('/', async (req, res) => {

})

module.exports = router