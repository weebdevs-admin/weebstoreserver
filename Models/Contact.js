const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Contact = new Schema({
  MapURL: {
    type: String,
  },
  Address: {
    type: String,
  },
  Emailcontact: {
    type: String,
  },
  Phonecontact: {
    type: String,
  }

});

module.exports = mongoose.model("Contact", Contact);