import express from "express";

import productController from "./product.controller";
const router = express.Router();
const ProductController = new productController();
// all the paths to controller methods
// localhost:/api/products

router.get("/", ProductController.getAllProducts);
