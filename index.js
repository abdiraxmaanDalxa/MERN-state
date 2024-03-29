import express from 'express';
import  singUpRouter from './router/authRouter.js'
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/auth",singUpRouter)

app.listen(3000,() =>{
    console.log("SERVER IS RUINING ON PORT 3000")
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });