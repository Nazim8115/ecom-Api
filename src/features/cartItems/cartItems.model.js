// productID, userID, quantity
export default class CartItemModel {
  constructor(productID, userID, quantity, id) {
    this.productID = productID;
    this.userID = userID;
    this.quantity = quantity;
    this.id = id;
  }

  static add(productID, userID, quantity) {
    const existCardItem = cartItems.find(
      (item) => item.userID == userID && item.productID == productID
    );

    if (existCardItem) {
      const q = Number(existCardItem.quantity);
      existCardItem.quantity = q + Number(quantity);
      return existCardItem;
    } else {
      const cartItem = new CartItemModel(productID, userID, quantity);
      cartItem.id = cartItems.length + 1;
      cartItems.push(cartItem);
      return cartItem;
    }
  }

  static get(userID) {
    return cartItems.filter((u) => u.userID === userID);
  }
}

var cartItems = [new CartItemModel(1, 1, 3, 1)];
