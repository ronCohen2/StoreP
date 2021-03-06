import { Request, Response } from "express";
import CartItem from "../model/CartItemSchema";
import Products from "../model/ProuductSchema";
import Cart from "../model/cartSchema";
import Order from "../model/orederSchema";
import * as mongoose from "mongoose";
import { object } from "prop-types";

export let GetCartItems = async (req: Request, res: Response) => {
  const { cartId } = req.body;
  try {
    const item = await CartItem.find({ cartId }).populate("image");
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
    const productInCart = await CartItem.find({ cartId, product: productId });
    if (productInCart.length === 0) {
      let price: any = product[0].price;
      const newItem = new CartItem({
        name,
        cartId,
        product: productId,
        quantity: quantity,
        totalPrice: price * quantity
      });
      newItem.save();
      res.status(200).send({ update: false, newItem });
    } else if (productInCart.length > 0) {
      const UpdateQuantity = await CartItem.findByIdAndUpdate(
        productInCart[0]._id,
        {
          $inc: {
            quantity: req.body.quantity
          }
        }
      );
      await UpdateQuantity.save();
      console.log({ update: true, UpdateQuantity });
      res.status(200).send({ update: true, UpdateQuantity });
    }
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
    const cart = await Cart.findOne({ UserId })
      .sort({ _id: -1 })
      .limit(1);
    console.log(cart);
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

  const checkDate = await Order.find({ shipDate });
  if (checkDate.length > 3) {
    return res
      .status(400)
      .send(["this ship date is full ,please try another day"]);
  }

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
    closeCart(cartId);
    res.status(200).send({ Success: true, Order: newOrder });
  } catch (err) {
    let error: any = [];
    for (let field in err.errors) {
      error.push(err.errors[field].message);
    }
    res.status(400).send(error);
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

export let closeCart = async (cartId: String) => {
  try {
    const cart = await Cart.findByIdAndUpdate(cartId, {
      $set: {
        status: 2
      }
    });
  } catch {
    return false;
  }
};
