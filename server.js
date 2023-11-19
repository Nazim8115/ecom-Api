import express from "express";
const server = express();
import productRouter from "./src/features/product/product.routes.js";
server.use("api/products", productRouter);
server.get("/", (req, res) => {
  res.send("welcome to  api");
});
server.listen(8500, () => {
  console.log("server is running at port 8500");
});
