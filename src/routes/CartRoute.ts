import { Router } from "express";
import * as controller from "../controllers/CartControllers";
import cart from "src/model/cartSchema";

export const Cart = Router();

// get all cart items
Cart.get("/getItems", controller.GetCartItems);

//add item to cart
Cart.post("addItem", controller.addItem);

//delte item from cart
Cart.delete("/deleteItem", controller.deleteItem);

//delete all items from cart
cart.delete("/removeAllItems", controller.empty);
