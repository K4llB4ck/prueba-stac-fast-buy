const express = require('express');
const router = express.Router();
const { orderController } = require('../../controllers');
const {orderValidation} = require('../../validations');
const validate = require('../../middlewares/validate');
const { route } = require('.');

router.route('/')
    .get(orderController.getOrders)
    .post(validate(orderValidation.createOrder),orderController.createOrder);

router.route('/pending').post(orderController.getOrdersPending);


module.exports = router;