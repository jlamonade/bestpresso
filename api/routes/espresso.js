const router = require('express').Router()
const Bean = require('../models/Bean')

// get beans by user
router.get('/', async (req, res) => {
  const beanData = await Bean.find({ user: req.session.passport.user })
  res.json(beanData)
})

// create bean
router.post('/', async (req, res) => {
  req.body.user = req.session.passport.user
  const beanData = await Bean.create(req.body)
  if (!beanData[0]) res.json(beanData)
  else res.json("Bean Not Added.")
})

module.exports = router