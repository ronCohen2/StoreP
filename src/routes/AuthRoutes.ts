import { Router } from "express";
import * as controller from "../controllers/AuthControllers";

export const Auth = Router();
Auth.post("/registerverification", controller.registerverification);
Auth.post("/Register", controller.Register);
Auth.post("/Login", controller.login);
Auth.get("/user", controller.getUser);
