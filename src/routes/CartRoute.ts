import { Router } from "express";
import * as controller from "../controllers/CartControllers";
import cart from "../model/cartSchema";

export const Cart = Router();

Cart.get("/getItems", controller.GetCartItems);

Cart.post("/addItem", controller.addItem);

Cart.post("/deleteItem", controller.deleteItem);

Cart.post("/removeAllItems", controller.empty);

// Cart.get("/cartStatus", controller.CartStatus);

Cart.post("/createOrder", controller.createOrder);

//dev
Cart.post("/CreateCart", controller.CreateCart);

Cart.get("/GetCart", controller.GetCart);

Cart.get("/getOrders", controller.getOrders);
