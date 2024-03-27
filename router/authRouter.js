import  Express, { Router } from "express";
import { getall, singup } from "../controller/authController.js";
const routes = Router();

routes.post("/singup",singup)
routes.post("/singin",singup)
routes.get("/",getall)

export default routes;