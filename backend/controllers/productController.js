const Product = require('../models/productModel')

//Adding a product - Admin 
exports.createProduct= async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}


//Getting all the products
exports.getallproducts= async(req,res)=>{
    const allproducts= await Product.find();
    res.status(200).json({success:true,allproducts})
}

//Update product - Admin
exports.updateProduct= async(req,res)=>{
    let product = Product.findById(req.param.id)
}

//Deleting a product - Admin

exports.deleteProduct = async(req,res)=>{

}