const express = require("express");
const { getallproducts,createProduct, updateProduct, deleteProduct, getoneproduct } = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getallproducts);
router.route("/product/new").post(createProduct);
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getoneproduct);


module.exports=router;