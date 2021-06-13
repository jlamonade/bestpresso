const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shotSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  grindWeight: {
    type: Number,
    trim: true,
  },
  outputWeight: {
    type: Number,
    trim: true,
  },
  grindSetting: {
    type: String,
    trim: true,
  },
  brewRatio: this.outputWeight / this.grindWeight,
  brewTime: {
    type: Number,
    trim: true,
  },
  flavorProfile: {
    bitterness: {
      type: Number,
      trim: true,
    },
    acidity: {
      type: Number,
      trim: true,
    },
    sweetness: {
      type: Number,
      trim: true,
    },
    bean: {
      type: Schema.Types.ObjectId,
      ref: "Bean",
    },
  },
});

const Shot = mongoose.model("Shot", shotSchema);

module.exports = Shot;
