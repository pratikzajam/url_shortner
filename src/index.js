import dotenv from "dotenv";
import {app} from './app.js';
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({
    path: "./.env",
  });

  import mongoose from "mongoose";


  connectDB()
.then(()=>{
  app.listen(process.env.port||8000,()=>{
    console.log(`Server is running at port:${process.env.PORT}`)
  });  
  })
.catch((err)=>{
console.log("Mongo Connection failed!",err);
});
