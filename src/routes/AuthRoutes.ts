import { Router } from "express";
import * as controller from "../controllers/AuthControllers";
import { format } from "morgan";

export const Auth = Router();
Auth.post("/registerStep1", controller.registerStep1);
Auth.post("/registerStep2", controller.registerStep2);
Auth.post("/registerStep3", controller.registerStep3);
Auth.post("/CheckCode", controller.CheckVerfication);
Auth.post("/Login", controller.login);
Auth.post("/getPhone", controller.getPhone);
