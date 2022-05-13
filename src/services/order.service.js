const { Order, Person, Client, Product, Item } = require('../models');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const { getTotalProducts, saveOrder } = require('../services/cart.service');
const { statusOrder } = require('../config/statusOrder');
const moment = require('moment')
const today = moment().startOf('day');


/**
 * Create a product
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createOrder = async (orderBody) => {

    const { client, products } = orderBody;
    let clientPerson;
    let person = await Person.findOne({ identification: client.identification });

    if (!person) {
        //creamos la persona y el cliente
        person = await Person.create(client);
        clientPerson = await Client.create({
            personId: person._id,
            active: true
        });
    } else {
        //obtenemos el id del cliente
        clientPerson = await Client.findOne({ personId: person._id });
    }

    const productsCollection = await Product.getByIds(products);
    const total = getTotalProducts(productsCollection);
    const order = await saveOrder(clientPerson._id, total, statusOrder.OPEN, productsCollection);

    return order;





};

const queryOrders = async () => {
    const orders = await Order.find();
        return orders;
}

const getOrdersPending = async () => {
    return Order.find({
        createdAt: {
            $gte: today.toDate(),
            $lte: moment(today).endOf('day').toDate()
        }
    }).populate('clientId');

}

module.exports = {
    createOrder,
    queryOrders,
    getOrdersPending
}