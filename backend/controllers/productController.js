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

//Getting a product - Admin
exports.getoneproduct= async(req,res)=>{
    const oneproduct = await Product.findById(req.params.id)
    res.status(200).json({success:true,oneproduct})
    
}


//Update product - Admin
exports.updateProduct= async(req,res)=>{
    let product = await Product.findById(req.params.id)

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
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

}

//Deleting a product - Admin

exports.deleteProduct = async(req,res)=>{
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
}