// empty array for our products, require model
const Product = require("../models/product.json");

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Wszystkie produkty",
    path: "/products",
  });
};
