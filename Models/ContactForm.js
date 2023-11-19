const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ContactForm = new Schema({
  Firstname: {
    type: String,
  },
  Email: {
    type: String,
  },
  Message: {
    type: String,
  }

});

module.exports = mongoose.model("ContactForm", ContactForm);