import { Router } from "express";
import * as controller from "../controllers/CartControllers";
import cart from "../model/cartSchema";
import auth from "../middlewares/auth";

export const Cart = Router();

Cart.post("/getItems", [auth], controller.GetCartItems);

Cart.post("/addItem", [auth], controller.addItem);

Cart.post("/deleteItem", [auth], controller.deleteItem);

Cart.post("/removeAllItems", [auth], controller.empty);

Cart.post("/cartStatus", controller.CartStatus);

Cart.post("/createOrder", [auth], controller.createOrder);

Cart.post("/checkDate", [auth], controller.checkDate);

//dev
// Cart.post("/CreateCart", controller.CreateCart);

Cart.get("/GetCart", [auth], controller.GetCart);

Cart.get("/getOrders", [auth], controller.getOrders);
