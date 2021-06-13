const router = require("express").Router();
const Bean = require("../models/Bean");
const Shot = require("../models/Shot");

// get beans by user
router.get("/", async (req, res) => {
  try {
    const beanData = await Bean.find({ user: req.session.passport.user });
    res.json(beanData);
  } catch (err) {
    res.send({ error: "Cannot Get Beans." });
  }
});

// create bean
router.post("/", async (req, res) => {
  req.body.user = req.session.passport.user;
  const beanData = await Bean.create(req.body);
  if (!beanData[0]) res.json(beanData);
  else res.json("Bean Not Added.");
});

// delete bean

// update bean

// POST create shot by bean
/* 
{
  "date": "",
  "grindWeight": 16,
  "outputWeight": 33.2,
  "grindSetting": 2.1,
  "brewTime": 30,
  "flavorProfile": {
    "bitterness": 6,
    "acidity": 7,
    "sweetness": 9    
  },
  "bean": "60c57b49752cb328f45f1539"
}
*/
router.post("/shots", async (req, res) => {
  const shotData = await Shot.create(req.body);
  res.json(shotData);
});

// GET get shots by bean
// TODO get data from front end
/* 
{
  "bean": "60c57b49752cb328f45f1539"
}
*/
router.get("/shots", async (req, res) => {
  // TODO aggregate this method
  const shotData = await Shot.find(/* { bean: req.body.bean } */);
  if (shotData) return res.json(shotData);
  res.status(500).send({ error: "Bean Not Found." });
});

module.exports = router;
