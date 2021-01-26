const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A Title is required"],
        minlength: [3, "Title must be more than 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [4, "Description must be at least 5 characters long"]
    }
}, {timestamp: true})

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;