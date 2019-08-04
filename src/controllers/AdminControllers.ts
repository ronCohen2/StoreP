import { Request, Response } from "express";
import * as mongoose from "mongoose";
import Products from "../model/ProuductSchema";
import { IProduct } from "../model/modelInterfece";

export let allProducts = async (req: Request, res: Response) => {
  const products = await Products.find();
  res.send(products);
};
export let addProducts = async (req: Request, res: Response) => {
  const { productName, categoryId, price, image } = req.body;
  const newProduct = new Products({
    productName: productName,
    categoryId: categoryId,
    price: price,
    image: image
  });
  try {
    await newProduct.save();
    res.status(200).send({ msg: `success add : ${newProduct._id}` });
  } catch (err) {
    res.status(400).send({ msg: "error in add products ", err });
  }
};

export let editProducts = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (id) {
    const products = await Products.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "product updated" });
  } else {
    res.status(400).send({ msg: "error in update product" });
  }
};

export let removeProducts = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const products = await Products.findByIdAndRemove({ _id: id });
    res.status(200).send({ msg: "product removed" });
  } catch (err) {
    res.status(400).send({ msg: "error in remove product " });
  }
};
