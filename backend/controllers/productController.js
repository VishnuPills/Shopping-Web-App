const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorhandler');
const catchAsyncErrors= require("../middleware/catchasyncerror");


//Adding a product - Admin 
exports.createProduct= catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })  
})

//Getting all the products
exports.getallproducts=catchAsyncErrors( async(req,res)=>{
    const allproducts= await Product.find();
    res.status(200).json({success:true,allproducts})
});

//Getting a product - Admin
exports.getoneproduct= catchAsyncErrors(async(req,res)=>{
    const oneproduct = await Product.findById(req.params.id)
    res.status(200).json({success:true,oneproduct})
    
});


//Update product - Admin
exports.updateProduct= catchAsyncErrors(async(req,res,next)=>{
    let product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHander("Product not found",404))
    }
    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        product,
    })

});

//Deleting a product - Admin

exports.deleteProduct = catchAsyncErrors(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }
    
    await product.remove();
    res.status(200).json({
        success:true,
        message:"Product deleted successfully",
       
    })
});