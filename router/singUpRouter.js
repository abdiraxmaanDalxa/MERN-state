import  Express, { Router } from "express";
import { getall, singup } from "../controller/singUpController.js";
const routes = Router();

routes.post("/",singup)
routes.get("/",getall)

export default routes;