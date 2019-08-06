import { Router } from "express";
import * as controller from "../controllers/AdminControllers";

export const Admin = Router();

Admin.get("/", controller.allProducts);
Admin.post("/", controller.addProducts);
Admin.put("/", controller.editProducts);
Admin.delete("/", controller.removeProducts);
Admin.post("/category", controller.addCategory);
