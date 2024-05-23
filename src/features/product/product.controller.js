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

  rateProduct(req, res) {}

  getOneProduct(req, res) {
    const id = req.params.id;
    console.log(id);
    const product = ProductModel.findProductById(id);
    if (product) {
      return res.status(200).send(product);
    } else {
      res.status(404).send("Product not found");
    }
  }
}
