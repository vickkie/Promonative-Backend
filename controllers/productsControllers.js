const Product = require('../models/Products');

module.exports = {

    createProduct: async (req, res) => {
        const newProduct = new Product(req.body);
        try {
            await newProduct.save();
            res.status(200).json('Product created successfully')
        } catch (err) {
            res.status(500).json("Failed to create Product")
        }
    },

    getAllProduct: async (req, res) => {
        try {
            const products = await Product.find().sort({ createAt: -1 });
            res.send(200).json(products)
        } catch (error) {
            res.status(500).json("Failed to get Product")
        }
    },

    getProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json("Failed to get Product")
        }
    }

}