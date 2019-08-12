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
  const { cartId, productId, quantity } = req.body;
  try {
    const cart = await Cart.find({ _id: cartId });
    const product = await Products.find({ _id: productId }).select("price");
    let price: any = product[0].price;
    const newItem = new CartItem({
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
    res.status(400).send({ err: "Error in delete item to the cart." });
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

// export const CartStatus = async (req: Request, res: Response) => {
//   const { UserId } = req.body;
//   if (!UserId) {
//     res.status(400).send({ err: "Please enter user id ." });
//   }
//   try {
//     const cart = await Cart.find({ UserId });
//     console.log(cart);
//     if (cart.length === 0) {
//       // const newCart = new Cart({
//       //   UserId,
//       //   status: true
//       // });
//       // await newCart.save();
//       res.send({ msg: "Welcome to youe first cart" });
//     }
//     const status = cart.map(elm => {
//       if (elm.status === true) {
//         res.status(200).send({ msg: "open Cart.", elm });
//       }
//     });
//     // const status = cart[0].status;
//     // switch (status) {
//     //   case true:
//     //     res.status(200).send({ msg: "open Cart.", id: cart[0]._id });
//     //     break;
//     //   case false:
//     //     res.status(400).send({ msg: "close Cart.", id: cart[0]._id });
//     //     break;
//     // }
//   } catch (err) {
//     // const newCart = new Cart({
//     //   UserId,
//     //   status: true
//     // });
//     // await newCart.save();
//     // res.send({ msg: "Welcome to youe first cart", cart: newCart });
//   }
// };

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
  console.log(checkDate);
  if (checkDate.length < 3) {
    const newOrder = new Order({
      userId,
      cartId,
      totalPrice,
      city,
      street,
      shipDate,
      creditCard
    });
    await newOrder.save();
    res.status(200).send({ msg: "Order success.", Order: newOrder });
  } else {
    res.status(400).send({ Err: "Delivery date full." });
  }
};

export let CreateCart = async (req: Request, res: Response) => {
  const { UserId } = req.body;

  try {
    const newCart = new Cart({
      UserId,
      status: true
    });
    newCart.save();
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
