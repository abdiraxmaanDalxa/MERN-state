import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();
mongoose.connect(process.env.db)

const app = express();
app.listen(3000,() =>{
    console.log("SERVER IS RUINING ON PORT 3000")
})