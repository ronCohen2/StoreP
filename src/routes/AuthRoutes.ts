import { Router } from "express";
import * as controller from "../controllers/AuthControllers";

export const Auth = Router();
Auth.post("/registerverification", controller.registerverification);
