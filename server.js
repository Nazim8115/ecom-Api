import express from "express";
const server = express();
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
server.use(bodyParser.json());
server.use("/api/products", productRouter);
server.use("/api/users", userRouter);
server.get("/", (req, res) => {
  res.send("welcome to Ecom api");
});

server.listen(8500, () => {
  console.log("server is running at port 8500");
});
