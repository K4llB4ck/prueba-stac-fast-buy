const express = require('express');
const router = express.Router();
const { productController } = require('../../controllers');


router.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct);

router.route('/:productId')
    .get(productController.getProduct);


module.exports = router;