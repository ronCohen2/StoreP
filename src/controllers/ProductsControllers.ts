import { Request, Response } from "express";
import Products from "../model/ProuductSchema";
import Category from "../model/categorySchema";
import Contact from "../model/contactSchema";

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
  const category = await Category.find({ _id: categoryId });
  if (products.length > 0) {
    res.status(200).send({
      products,
      category
    });
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
export let contact = async (req: Request, res: Response) => {
  const { name, email, text } = req.body;
  try {
    const newContact = await new Contact({
      name,
      email,
      text
    });
    await newContact.save();
    res.status(200).send(newContact);
  } catch {
    res.status(400).send("err in add contact");
  }
};

export let getAllOpenContactUsMessage = async (req: Request, res: Response) => {
  try {
    const OpenMessage = await Contact.find({ status: false });
    res.status(200).send(OpenMessage);
  } catch (error) {
    res.status(400).send({ err: "error to get message" });
  }
};

export let getMoreProductByCategory = async (req: Request, res: Response) => {
  const { id, ProductId } = req.body;
  try {
    const products = await Products.find({
      categoryId: id,
      _id: { $ne: ProductId }
    }).limit(3);
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({ err: "err to get product" });
  }
};
