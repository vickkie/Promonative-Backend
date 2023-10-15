const Product = require('../models/Products');

module.exports = {

    addToCart: async (req, res) => {
        const {userId, cartItem, quantity} = req.body;

        try {

        } catch(error) {}
    },


    getCart: async (req, res) => {},


    deleteToCartItem: async (req, res) => {},


    decrementCartItem: async (req, res) => {

        const {userId, cartItem} = req.body;

        try {

        } catch(error) {}
    }



}