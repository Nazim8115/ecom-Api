import userModel from "./user.model.js";
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
      return res.send("User Login Successfully!");
    }
  }
}
