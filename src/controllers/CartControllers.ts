import { Request, Response } from "express";
import CartItem from "../model/cartItemSchema";
import Products from "../model/ProuductSchema";
import Cart from "../model/cartSchema";
import Order from "../model/orederSchema";

export let GetCartItems = async (req: Request, res: Response) => {
  const { cartId } = req.body;
  try {
    const item = await CartItem.find({ cartId });
    res.status(200).send(item);
  } catch {
    res.status(400).send("no");
  }
};

export let addItem = async (req: Request, res: Response) => {
  const { name, cartId, productId, quantity } = req.body;
  try {
    const cart = await Cart.find({ _id: cartId });
    const product = await Products.find({ _id: productId }).select("price");
    let price: any = product[0].price;
    const newItem = new CartItem({
      name,
      cartId,
      product: productId,
      quantity,
      totalPrice: price * quantity
    });
    newItem.save();
    res.status(200).send(newItem);
  } catch {
    res.status(400).send({ err: "Error in add item to the cart." });
  }
};

export let deleteItem = async (req: Request, res: Response) => {
  const { cartId, productId } = req.body;

  const removeItem = await CartItem.deleteMany({
    cartId: cartId,
    product: productId
  });
  const { deletedCount }: any = removeItem;
  if (deletedCount > 0) {
    res.status(200).send({ msg: "delete item success." });
  } else {
    res.status(400).send({ err: "Error in delete item from the cart." });
  }
};

export let empty = async (req: Request, res: Response) => {
  const { cartId } = req.body;
  const cart = await CartItem.deleteMany({ cartId: cartId });
  const { deletedCount }: any = cart;
  if (deletedCount > 0) {
    res.status(200).send({ msg: "delete all items success." });
  } else {
    res.status(400).send({ msg: "error in empty cart." });
  }
};

export const CartStatus = async (req: Request, res: Response) => {
  const { UserId } = req.body;
  try {
    const cart = await Cart.findOne({ UserId });
    if (cart.status === 1) {
      console.log("open cart");
      res.status(200).send({ status: 1, cart: cart });
    }
    if (cart.status === 2) {
      const newCart = await createCart(UserId);
      console.log("lastcard");
      res.status(200).send({ status: 2, lastCart: cart, cart: newCart });
    }
  } catch (err) {
    const newCart = await createCart(UserId);
    res.status(200).send({ status: 3, cart: newCart });
  }
};

export let createOrder = async (req: Request, res: Response) => {
  const {
    userId,
    cartId,
    totalPrice,
    city,
    street,
    shipDate,
    creditCard
  } = req.body;

  const newOrder = new Order({
    userId,
    cartId,
    totalPrice,
    city,
    street,
    shipDate,
    creditCard
  });
  try {
    await newOrder.save();
    res.status(200).send({ msg: "Order success.", Order: newOrder });
  } catch (err) {
    res.status(400).send({ msg: err });
  }
};

const createCart = async (UserId: String) => {
  try {
    const newCart = await new Cart({
      UserId,
      status: true
    });
    await newCart.save();
    return newCart;
  } catch {}
};
export let GetCart = async (req: Request, res: Response) => {
  const { cartId } = req.body;
  const item = await Cart.find();
  try {
    res.status(200).send(item);
  } catch {
    res.status(400).send("no");
  }
};

export let getOrders = async (req: Request, res: Response) => {
  const item = await Order.find();
  try {
    res.status(200).send(item);
  } catch {
    res.status(400).send("no");
  }
};

export let checkDate = async (req: Request, res: Response) => {
  const { shipDate } = req.body;
  const checkDate = await Order.find({ shipDate });
  if (checkDate.length < 4) {
    return res.status(200).send({ msg: true });
  } else {
    return res.status(400).send({ msg: false });
  }
};
