import { Request, Response } from "express";
import CartItem from "../model/cartItemSchema";
import Products from "../model/ProuductSchema";
import Cart from "../model/cartSchema";
import { Schema } from "mongoose";
export let GetCartItems = async (req: Request, res: Response) => {
  const { cartId } = req.body;
  const item = await CartItem.find({ cartId });
  res.status(200).send(item);
};

export let addItem = async (req: Request, res: Response) => {
  const { cartId, productId, quantity } = req.body;
  try {
    const cart = await Cart.find({ _id: cartId });
    const product = await Products.find({ _id: productId });
    const { price }: any = product;
    const newItem = new CartItem({
      cartId,
      product: productId,
      quantity,
      totalPrice: price * quantity
    });
    res.status(200).send();
  } catch {
    res.status(400).send({ err: "Error in add item to the cart." });
  }
};

export let deleteItem = async (req: Request, res: Response) => {};

export let empty = async (req: Request, res: Response) => {};
