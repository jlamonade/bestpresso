const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const beanSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: "Please enter a valid bean name",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Bean = mongoose.model("Bean", beanSchema)

module.exports = Bean