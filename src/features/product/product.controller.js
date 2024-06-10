import ProductModel from "./product.model.js";
export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.GetAll();
    return res.status(200).send(products);
  }

  addProduct(req, res) {
    const { name, desc, price, category, sizes } = req.body;

    const newProduct = {
      name,
      desc,
      category,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: req.file.filename,
    };
    const createRecord = ProductModel.add(newProduct);
    return res.status(201).send(createRecord);
  }

  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.findProductById(id);
    if (product) {
      return res.status(200).send(product);
    } else {
      res.status(404).send("Product not found");
    }
  }

  // filter products...............
  filterProducts(req, res) {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    console.log(minPrice);
    const result = ProductModel.filter(minPrice, maxPrice, category);
    res.status(200).send(result);
  }
  // Rate product.....
  rateProduct(req, res) {
    const userID = req.query.userID;
    const productID = req.query.productID;
    const rating = req.query.rating;
    const error = ProductModel.rateProduct(userID, productID, rating);
    if (error) {
      return res.status(400).send(error);
    } else {
      return res.status(200).send("Successfully Rated");
    }
  }
}
