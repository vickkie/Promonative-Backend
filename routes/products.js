const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsControllers');

// Add middleware to parse URL-encoded parameters
router.use(express.urlencoded({ extended: true }));

// The search route
router.get('/search/:key', productController.searchProducts);

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProduct);

router.post('/', productController.createProduct);

module.exports = router;
