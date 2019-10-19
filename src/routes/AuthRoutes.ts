import { Router } from "express";
import * as controller from "../controllers/AuthControllers";

export const Auth = Router();
Auth.post("/registerStep1", controller.registerStep1);
Auth.post("/registerStep2", controller.registerStep2);
Auth.get("/registerStep3", controller.registerStep3);
Auth.post("/Login", controller.login);
Auth.get("/user", controller.getUser);
