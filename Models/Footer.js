const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Footer = new Schema({
  Title: {
    type: String,
  },
  Desc: {
    type: String,
  },
  Telegram: {
    type: String,
  },
  Instagram: {
    type: String,
  },
  Facebook: {
    type: String,
  }

});

module.exports = mongoose.model("Footer", Footer);