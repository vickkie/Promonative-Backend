const Product = require('../models/Products');
const Cart = require('../models/Cart');

module.exports = {

    addToCart: async (req, res) => {

        const { userId, cartItem, quantity } = req.body;

        try {
            const cart = await Cart.findOne({ userId });
            if (cart) {
                const existingProduct = cart.products.find(
                    (product) => product.cartItem.toString() === cartItem
                );

                if (existingProduct) {
                    existingProduct.quantity += 1
                } else {
                    cart.products.push({ cartItem, quantity })
                }

                await cart.save();
                res.status(200).json("Product added to cart")
            } else {
                const newCart = newCart({
                    userId,
                    products: [{
                        cartItem, quantity: quantity
                    }]
                });
                await newCart.save();
                res.status(200).json("Product added to cart")
            }

        } catch (error) {
            res.status(500).json(error)
        }


    },


    getCart: async (req, res) => { },


    deleteToCartItem: async (req, res) => {
        const { userId, cartItem } = req.body;
    },


    decrementCartItem: async (req, res) => {

        const { userId, cartItem } = req.body;

        try {

        } catch (error) { }
    }



}
