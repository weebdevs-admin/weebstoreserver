const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSlider = new Schema({

  Image1: {
    type: String
  },
  Image2: {
    type: String
  },
  Image3: {
    type: String

  },
  Image4: {
    type: String

  }




});

module.exports = mongoose.model("ProductSlider", ProductSlider);