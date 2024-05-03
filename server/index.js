import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import {UserRouter} from './routes/user.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';


dotenv.config()

let url="mongodb+srv://maradadivyasree:kaMkHt6lw5mZPt1x@cluster0.2abgm7s.mongodb.net/"

const app=express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))
app.use('/auth',UserRouter)
app.use(cookieParser())
mongoose.connect(url)

app.listen(process.env.PORT,()=>{
    console.log("Server is ")
})


// kaMkHt6lw5mZPt1x