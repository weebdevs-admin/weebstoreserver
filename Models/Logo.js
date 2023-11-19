const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Logo = new Schema({
  Img: {
    type: String,
  },
  Title: {
    type: String,
  }

});

module.exports = mongoose.model("Logo", Logo);