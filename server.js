import express from "express";
const server = express();
import bodyParser from "body-parser";
server.use(bodyParser.json());
server.use(express.json());
import basicAuthorizer from "./src/middleware/basicAuth.middleware.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import cartRouter from "./src/features/cartItems/cartItems.routes.js";

server.use("/api/users", userRouter);
server.use("/api/products", jwtAuth, productRouter);

server.use("/api/cartitems", jwtAuth, cartRouter);

server.get("/", (req, res) => {
  res.send("welcome to Ecom api");
});

server.listen(8500, () => {
  console.log("server is running at port 8500");
});


