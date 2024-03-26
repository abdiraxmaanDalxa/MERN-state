import  Express, { Router } from "express";
import { singup } from "../controller/singUpController.js";
const routes = Router();

routes.post("/",singup)

export default routes;