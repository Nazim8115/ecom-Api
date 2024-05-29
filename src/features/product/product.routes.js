import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middleware/fileupload.middleware.js";

const productRouter = express.Router();
const productController = new ProductController();
// all the paths to controller methods
// localhost:/api/products
productRouter.get("/filter", productController.filterProducts);
productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getOneProduct);

productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
export default productRouter;
