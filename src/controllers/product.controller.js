
const { listProduct, searchProductById, newProduct, updateProduct, blockOrActive } = require('../services/product.service');
const requestResponse = require('../models/request-response');

exports.getAllProduct = async (req, res) => {
    //...
    const allProduct = await listProduct();
    if(allProduct != null){
        res.status(200).send(requestResponse("Exito", allProduct));
    }else{
        res.status(404).send(requestResponse("No se encontro información.", null));
    }
}

exports.getProduct = async (req, res) => {
    //...
    const productDetails = await searchProductById(req.params.productId);
    if(productDetails != null){
        res.status(200).send(requestResponse("Exito", productDetails));
    }else{
        res.status(404).send(requestResponse("No se encontro información.", null));
    }
}

exports.addProduct = async (req, res) => {
    //...
    const resp = await newProduct(req.body);
    if(resp != null){
        res.status(200).send(requestResponse("Exito", resp));
    }else{
        res.status(404).send(requestResponse("No se encontro información.", null));
    }
}

exports.editProduct = async (req, res) => {
    //...
    const resp = await updateProduct(req.body, req.params.productId);
    if(resp != null){
        res.status(200).send(requestResponse("Exito", resp));
    }else{
        res.status(404).send(requestResponse("No se encontro información.", null));
    }
}

exports.blockOrHability = async (req, res) => {
    //...
    const resp = await blockOrActive(req.params.productId);
    if(resp != null){
        res.status(200).send(requestResponse("Exito", "Datos eliminados"));
    }else{
        res.status(404).send(requestResponse("No se encontro información.", null));
    }
}