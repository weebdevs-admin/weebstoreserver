const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema({
  Img: [
    {
        type: Object,
        Image1:{
            type: String,
        },
        image2:{
            type: String,
        },
        Image3:{
            type: String,
        },
        Image4:{
            type: String,
        }
    }
  ],
  Title: {
    type: String,
  },
  Desc: {
    type: String,
  },
  Price: {
    type: Number,
  },
  Sales: {                       
    type: Number,
  },
  Category: {
    type: String,
  }


});

module.exports = mongoose.model("Product", productSchema);


