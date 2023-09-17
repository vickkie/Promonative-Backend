const express = require('express'); // Import Express.js
const router = express.Router(); // Create a new router instance
const productController = require('../controllers/productsControllers');

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProduct);
router.get('/search', productController.searchProducts);
router.post('/search', productController.createProduct);

module.exports = router;
