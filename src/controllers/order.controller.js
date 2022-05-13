const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');
const httpStatus = require('http-status');


const createOrder = catchAsync(async (req, res) => {
    const order = await orderService.createOrder(req.body);
    res.status(httpStatus.CREATED).send(order);
});

const getOrders = catchAsync(async (req, res) => {
    const result = await orderService.queryOrders();
    res.send(result);
});

/**
 * Devuelve las ordenes pendientes para entrega- para los repartidores
 */
const getOrdersPending =  catchAsync(async(req,res) =>{
    const result = await orderService.getOrdersPending();
    res.send(result);
});



module.exports = {
    createOrder,
    getOrders,
    getOrdersPending
}