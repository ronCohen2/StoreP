import { Router } from "express";
import * as controllear from "../controllers/ProductsControllers";
export const Products = Router();

//All products
Products.get("/", controllear.getAllProducts);
//get product details
Products.get("/productDetails/:product", controllear.getProductDetails);
//All category
Products.get("/allCategory", controllear.getAllCategoty);
//Get products by category
Products.get("/category/:id", controllear.getProductsByCategory);
//search product
Products.get("/search/:product", controllear.searchProduct);

Products.post("/MoreProduct", controllear.getMoreProductByCategory);

Products.post("/contact", controllear.contact);
