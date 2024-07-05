import express from "express"
import { fileURLToPath } from 'url';
import cors from "cors"
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credientials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))




app.get('/index', (req, res) => {
    res.render('index');
  });



import userRouter from './routes/url.routes.js'

app.use("",userRouter);

export {app};