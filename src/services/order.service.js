const { Order } = require('../models');


/**
 * Create a product
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createOrder = async (orderBody) => {
    console.log(orderBody);
};

const queryOrders = async () => {
    const orders = await Order.find();
    return orders;
}

module.exports = {
    createOrder,
    queryOrders
}