const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: "Please enter a username.",
  },
  email: {
    type: String,
    trim: true,
    require: "Please enter a valid email.",
    // eslint-disable-next-line no-useless-escape
    match: [/.+\@.+\..+/],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    require: "Please enter a valid password.",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
