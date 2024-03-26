import express from 'express';
import  singUpRouter from './router/singUpRouter.js'

const app = express();
app.use(express.json());


app.use("/api/v1/user",singUpRouter)

app.listen(3000,() =>{
    console.log("SERVER IS RUINING ON PORT 3000")
})