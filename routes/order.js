const router = require("express").Router();
const orderController = require("../controllers/ordersController");

router.get('/:id', orderController.getUserOrder);

module.exports = router;