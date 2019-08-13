import { Router } from "express";
import * as controller from "../controllers/CartControllers";
import cart from "../model/cartSchema";

export const Cart = Router();

Cart.get("/getItems", controller.GetCartItems);

Cart.post("/addItem", controller.addItem);

Cart.delete("/deleteItem", controller.deleteItem);

Cart.delete("/removeAllItems", controller.empty);

// Cart.get("/cartStatus", controller.CartStatus);

Cart.post("/createOrder", controller.createOrder);

Cart.post("/CreateCart", controller.CreateCart);

Cart.get("/GetCart", controller.GetCart);

Cart.get("/getOrders", controller.getOrders);
