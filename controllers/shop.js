// empty array for our products, require model
const Product = require("../models/products.json");

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Wszystkie produkty",
    path: "/products",
  });
};
