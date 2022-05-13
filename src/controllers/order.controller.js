const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');
const httpStatus = require('http-status');


const createOrder = catchAsync(async (req, res) => {
    const order = await orderService.createOrder(req.body);
    res.status(httpStatus.CREATED).send(order);
});


module.exports = {
    createOrder
}