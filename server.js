import express from "express";
const server = express();
import * as ProductRouter from "./src/features/product/product.routes";
server.use("api/products", ProductRouter);
server.get("/", (req, res) => {
  res.send("welcome to api");
});
server.listen(8500, () => {
  console.log("server is running at port 8500");
});
