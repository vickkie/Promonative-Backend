const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

}, { timestamps: true })

module.exports = mongoose.model("Order", OrderSchema);

