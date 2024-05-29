export default class userModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }
  // signUp user
  static signUp(name, email, password, type) {
    const newUser = new userModel(name, email, password, type);
    newUser.id = users.length + 1;
    users.push(newUser);
  }

  static signIn(email, password) {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    return user;
  }
}
var users = [
  {
    id: 1,
    name: "seller user",
    email: "nazim.nn459@gmail.com",
    password: "password1",
    type: "seller",
  },
];
