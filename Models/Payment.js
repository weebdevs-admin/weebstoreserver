const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Payment = new Schema({
  Products: [
    {
      Img: {
        type: String,
      },
      Title: {
        type: String,
      },
      Price: {
        type: Number,
      },
      Id:{
        type: String
      }
    }
  ],
  Price: {
    type: Number,
  },
  Firstname: {
    type: String,
  },
  Phonenumber: {
    type: Number,
  },
  Address: {
    type: String,
  },
  Date: {
    type: String,
  }
});


module.exports = mongoose.model("Payment", Payment);