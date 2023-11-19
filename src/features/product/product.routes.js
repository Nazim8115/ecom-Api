import express from "express";

import ProductController from "./product.controller.js";

const productController = new ProductController();
// all the paths to controller methods
// localhost:/api/products
const productRouter = express.Router();
productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.addProduct);
export default productRouter;
