const Products = require("../models/products.models");

module.exports.findAllProducts = (req, res) => {
    Products.find()
        .then(allProducts => res.json({allProducts: allProducts}))
        .catch(err => res.json({message: "error occured finding all Products", error: err}))
}

module.exports.findOne = (req, res) => {
    Products.find({_id: req.params._id})
        .then(oneProduct => res.json({oneProduct: oneProduct}))
        .catch(err => res.json({message: "error occured while retrieving a product", error: err}))
}

module.exports.createProduct = (req, res) => {
    Products.create(req.body)
        .then(newProduct => res.json({newProduct: newProduct}))
        .catch(err => res.json({message: "error occured while creating a new product", error: err}))
}

module.exports.deleteProduct = (req, res) => {
    Products.remove({_id: req.params._id})
        .then(res.json({message: "Product was removed"}))
        .catch(err => res.json({message: "error occured while attempting to remove a product", error: err}))
}

module.exports.updateProduct = (req, res) => {
    Products.updateOne({_id: req.params._id}, {
        $set: {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        }
    }, {runValidators: true})
        .then(updateProduct => res.json({updateProduct: updateProduct}))
        .catch(err => res.json({message: "error occured while updating product", error: err}))
}