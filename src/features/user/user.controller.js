import userModel from "./user.model.js";
import jwt from "jsonwebtoken";
export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const user = userModel.signUp(name, email, password, type);
    if (user) {
      return res.status(201).send(user);
    } else {
      return res.status(400).send("Error in Signup");
    }
  }
  signIn(req, res) {
    const result = userModel.signIn(req.body.email, req.body.password);
    if (!result) {
      return res.status(400).send("Incorrect Credentials");
    } else {
      const token = jwt.sign(
        { userID: result.id, email: result.email },
        "ZV2GUFPm1kUpaZGEUl6pHXeHdzvgK8Jm",
        { expiresIn: "1h" }
      );
      return res.status(200).send(token);
    }
  }
}
