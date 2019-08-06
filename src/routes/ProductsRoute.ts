import { Router } from "express";
import * as controllear from "../controllers/ProductsControllers";
export const Products = Router();

//All products
Products.get("/", controllear.getAllProducts);
//get product details
// Products.get("/:product", controllear.getProductDetails);
//All category
Products.get("/category", controllear.getAllCategoty);
//Get products by category
Products.get("/category/:id", controllear.getProductsByCategory);
//search product
Products.get("/srearch/:product", controllear.searchProduct);
