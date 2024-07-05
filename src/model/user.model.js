import mongoose, { Schema } from "mongoose";


const urlSchema = new Schema({
  shorturl: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true,
    index: true,
  },
  longurl: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true,
  },
  counter: {
    type: String,
  
  },

 
});


export const Url = mongoose.model("Url", urlSchema);


