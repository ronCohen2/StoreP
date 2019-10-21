import { Request, Response } from "express";
import * as mongoose from "mongoose";
import Products from "../model/ProuductSchema";
import category from "../model/categorySchema";
import * as express from "express";
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req: any, file: any, callback: any) {
    callback(null, "public/image");
  },
  filename: function(req: any, file: any, callback: any) {
    callback(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage: storage }).single("file");

interface IUserRequest extends express.Request {
  file: any;
}
export let uploadImage = (req: IUserRequest, res: Response) => {
  upload(req, res, function(err: any) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
};

export let allProducts = async (req: Request, res: Response) => {
  const products = await Products.find();
  res.send(products);
};

export let allProductsByCategory = async (req: Request, res: Response) => {
  console.log(req.body);
  const { categoryId } = req.body;
  const products = await Products.find({ categoryId });
  res.send(products);
};
export let addProducts = async (req: Request, res: Response) => {
  try {
    const { productName, categoryId, price, image } = req.body;
    const newProduct = new Products({
      productName: productName,
      categoryId: categoryId,
      price: price,
      image: image
    });
    await newProduct.save();
    res.status(200).send({ msg: `success`, newProduct });
  } catch (err) {
    res.status(500).send({ err });
  }
};

export let editProducts = async (req: Request, res: Response) => {
  const { id, obj } = req.body;
  if (id) {
    const products = await Products.findByIdAndUpdate({ _id: id }, obj);
    res.status(200).send({ msg: "product updated" });
  } else {
    res.status(400).send({ msg: "error in update product" });
  }
};

export let removeProducts = async (req: Request, res: Response) => {
  const id: String = req.params.id;
  try {
    const products = await Products.findByIdAndRemove({ _id: id });
    res.status(200).send({ msg: "product removed" });
  } catch (err) {
    res.status(500).send({ msg: "error in remove product " });
  }
};

export let addCategory = async (req: Request, res: Response) => {
  const { categoryName, image } = req.body;
  const newCategory = new category({
    categoryName,
    image
  });
  try {
    await newCategory.save();
    res.status(200).json({ msg: `success add category` });
  } catch (err) {
    res.status(400).send({ msg: "error in add category ", err });
  }
};
