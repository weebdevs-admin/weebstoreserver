const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let registerSchema = new Schema({
  Firstname: {
    type: String,
  },
  Username: {
    type: String,
  },
  Email: {
    type: String,
    unique: true
  },
  Password: {
    type: String,
  }

});

module.exports = mongoose.model("Register", registerSchema);