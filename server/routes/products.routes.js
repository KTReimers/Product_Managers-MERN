const ProductsController = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api/products", ProductsController.findAllProducts);
    app.get("/api/products/:_id", ProductsController.findOne);
    app.post("/api/products/new", ProductsController.createProduct);
    app.delete("/api/products/delete/:_id", ProductsController.deleteProduct);
    app.put("/api/products/update/:_id", ProductsController.updateProduct)
}