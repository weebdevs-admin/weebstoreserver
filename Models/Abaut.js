const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Abaut = new Schema({
  Img: {
    type: String,
  },
  Title: {
    type: String,
  },
  Desc: {
    type: String,
  }

});

module.exports = mongoose.model("Abaut", Abaut);