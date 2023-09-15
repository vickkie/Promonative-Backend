const Product = require('../models/Products');

module.exports = {

    createProduct: async(req, res) => {
        const newProduct = new Product(req.body);
        try {
            await newProduct.save();
            res.status(200).json('Product created successfully')
        } catch (err) {
            res.status(500).json("Failed to create Product")
        }
    }
    
}