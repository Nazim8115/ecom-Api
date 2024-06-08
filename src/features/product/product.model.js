import userModel from "../user/user.model.js";
export default class ProductModel {
  constructor(id, name, desc, price, imageUrl, category, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }
  // get all products
  static GetAll() {
    return products;
  }

  // get single product by using id
  static findProductById(id) {
    return products.find((p) => p.id == id);
  }

  //  add product in products ..
  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }

  // filter products ............
  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category == category)
      );
    });
    return result;
  }
  // more features like rate product etc ...
  static rateProduct(userID, productID, rating) {
    // 1-validate user and product
    const user = userModel.getAll().find((u) => u.id == userID);
    if (!user) {
      return "user not found !";
    }

    const product = products.find((p) => p.id == productID);
    if (!product) {
      return "product not found !";
    }
    // 2. check if theare any ratings if not then add ratings array
    if (!product.ratings) {
      product.ratings = [];
      product.ratings.push({ userID: userID, rating: rating });
    } else {
      // 3.check if user rating is already available
      const existingRatingIndex = product.ratings.findIndex(
        (r) => r.userID == userID
      );
      if (existingRatingIndex >= 0) {
        product.ratings[existingRatingIndex] = {
          userID: userID,
          rating: rating,
        };
      } else {
        // 4. if no existing rating, then add new rating
        product.ratings.push({
          userID: userID,
          rating: rating,
        });
      }
    }
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    "Cateogory1",
    ["M", "X", "Xl"]
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    "Cateogory2",
    ["M", "XL"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg",
    "Cateogory3",
    ["M", "XL", "S"]
  ),
];
