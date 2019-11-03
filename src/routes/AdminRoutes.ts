import { Router } from "express";
import * as controller from "../controllers/AdminControllers";
import admin from "../middlewares/admin";
import auth from "../middlewares/auth";
import { getAllOpenContactUsMessage } from "../controllers/ProductsControllers";

// import { Request, Response } from "express";

export const Admin = Router();

Admin.get("/", controller.allProducts);

Admin.post("/ProductsByCategory", controller.allProductsByCategory);

Admin.post("/", [auth, admin], controller.addProducts);

Admin.post("/edit", [auth, admin], controller.editProducts);

Admin.get("/removeProduct/:id", [auth, admin], controller.removeProducts);

Admin.post("/category", [auth, admin], controller.addCategory);

Admin.post("/Upload", [auth, admin], controller.uploadImage);

Admin.get("/OpenUserMessage", [auth, admin], getAllOpenContactUsMessage);

Admin.post("/sendMail", [auth, admin], controller.sendMail);

Admin.post(
  "/ChangeStatusMessage",
  [auth, admin],
  controller.ChangeStatusMessage
);
