const express = require("express");
const { getallproducts,createProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getallproducts);
// router.route("/product/new").post(createProduct);


module.exports=router;