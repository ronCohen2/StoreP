import { Router } from "express";
import * as controller from "../controllers/CartControllers";
import cart from "../model/cartSchema";

export const Cart = Router();

// get all cart items
// -> cartId
Cart.get("/getItems", controller.GetCartItems);

//add item to cart
//->cartId,productId,quantity
Cart.post("/addItem", controller.addItem);

//delte item from cart
Cart.delete("/deleteItem", controller.deleteItem);

//delete all items from cart
Cart.delete("/removeAllItems", controller.empty);

//->userId 
Cart.get("/cartStatus", controller.CartStatus);

Cart.post("/CreateCart", controller.CreateCart);

Cart.get("/GetCart", controller.GetCart);
