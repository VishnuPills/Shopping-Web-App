const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, "Please enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product Price"],
    maxlength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category:{
      type:String,
      required:[true, "Please enter a product category"]
  },
  stock:{
      
      type:Number,
      required:[true, "please enter the stock"],
      maxlength:[4,"Stock cannot exceed 4 digits"],
      default:1
      
  },
  noOfReviews:{
      type:Number,
      default:0,
  },
  reviews:[
      {
          name:{
              type:String,
              required:true
          },
          rating:{
              type:Number,
              required:true,
              
          },
          comments:{
              type:String,
              required:true
          }
      }
  ],
  createdBy:{
      type:Date,
      default:Date.now
  }


},{versionKey:false});



module.exports= mongoose.model("product",productSchema);;