import { Request, Response } from "express";
import Products from "../model/ProuductSchema";
import Category from "../model/categorySchema";

export let getAllProducts = async (req: Request, res: Response) => {
  const products = await Products.find();
  res.send(products);
};

export let getProductDetails = async (req: Request, res: Response) => {
  const id = req.params.product;
  console.log(id);
  try {
    const products = await Products.find({ _id: id });
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send({ msg: "Product not exist ." });
  }
};
export let getAllCategoty = async (req: Request, res: Response) => {
  const products = await Category.find();
  res.send(products);
};
export let getProductsByCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const products = await Products.find({ categoryId: categoryId });
  if (products.length > 0) {
    res.status(200).send(products);
  } else {
    res.status(400).send({ msg: "category is  empty" });
  }
};

export let searchProduct = async (req: Request, res: Response) => {
  const productText = req.params.product;
  const products = await Products.find({
    productName: { $regex: "^" + productText }
  });
  if (products.length > 0) {
    res.status(200).send(products);
  } else {
    res.status(400).send({ msg: "not products similer" });
  }
};
