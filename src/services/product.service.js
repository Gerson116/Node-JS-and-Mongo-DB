
const Product = require('../models/product');

const listProduct = async () => {
    //....
    try{
        const allProduct = await Product.find({ enable: true });
        if(allProduct != null){
            return allProduct;
        }
    }catch(error){
        return null;
    }
    return null;
}

const searchProductById = async (productId) => {
    //...
    try{
        const product = await Product.findOne({ _id: productId });
        if(product != null){
            return product;
        }
    }catch(error){
        return null;
    }
    return null;
}

const newProduct = async (data) => {
    //...
    try{
        //...
        const product = new Product(data);
        await product.save();
        return product;
    }catch(error){
        return null;
    }
    return null;
}

const updateProduct = async (data, productId) => {
    //...
    try{
        //...
        const productExist = await searchProductById(productId);
        if(productExist != null){
            const product = Product.findByIdAndUpdate(productId, data);
            product.exec( (error, data) => {
                if(error) throw error;
            });
            return data;
        }
    }catch(error){
        return null;
    }
    return null;
}

const blockOrActive = async (productId) => {
    try{
        //...
        const productExist = await searchProductById(productId);
        if(productExist != null){
            productExist.enable = (productExist.enable == true) ? false : true;
            const product = Product.findByIdAndUpdate(productId, productExist);
            product.exec( (error, productExist) => {
                if(error) throw error;
            });
            return productExist;
        }
    }catch(error){
        return null;
    }
}

module.exports = {
    listProduct,
    searchProductById,
    newProduct,
    updateProduct,
    blockOrActive
}