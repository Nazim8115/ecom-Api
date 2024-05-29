import userModel from "./user.model.js";
export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    console.log(name, email, password);
    const user = userModel.signUp(name, email, password, type);
    return res.status(201).send(user);
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
