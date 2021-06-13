const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shotSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  dose: {
    type: Number,
    trim: true,
    required: "Dosage is required",
  },
  yield: {
    type: Number,
    trim: true,
    required: "Yield is required",
  },
  grind: {
    type: String,
    trim: true,
  },
  extractionTime: {
    type: Number,
    trim: true,
  },
  flavor: {
    bitter: {
      type: Number,
      trim: true,
    },
    sour: {
      type: Number,
      trim: true,
    },
    sweet: {
      type: Number,
      trim: true,
    },
    salty: {
      type: Number,
      trim: true,
    },
  },
  bean: {
    type: Schema.Types.ObjectId,
    ref: "Bean",
  },
});

const Shot = mongoose.model("Shot", shotSchema);

module.exports = Shot;
