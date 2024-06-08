import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //  1. Read the token
  const token = req.headers["authorization"];

  //  2. if no token return the error

  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  //   3.Check if token is valid
  try {
    const payload = jwt.verify(token, "ZV2GUFPm1kUpaZGEUl6pHXeHdzvgK8Jm");
    console.log(payload);
  } catch (error) {
    //    4. return error
    return res.status(401).send("Unauthorized");
  }

  //   call next middleware
  next();
};
export default jwtAuth;
