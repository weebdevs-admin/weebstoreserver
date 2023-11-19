const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MainPage = new Schema({
  Title: {
    type: String,
  },
  Desc: {
    type: String,
  },
  Button: {
    type: String,
  },
  

});

module.exports = mongoose.model("MainPage", MainPage);