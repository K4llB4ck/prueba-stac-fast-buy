const { Item, Order } = require('../models');
const { statusOrder } = require('../config/statusOrder');



const getTotalProducts = (products = []) => products.reduce((prev, current) => {
    const price = Number(current.price);
    return prev + price;
}, 0);

//Guarda una orden en el sistema
const saveOrder = async (idClient, total, status, products = []) => {


        const order = await Order.create({
            total,
            clientId: idClient,
            status: statusOrder.OPEN

        });

        for (let i = 0; i < products.length; i++) {
            const currentProduct = products[i];
            Item.create({
                orderId: order._id,
                productId: currentProduct._id,
                quanty: 1,
                price: currentProduct.price
            });
        }

        return order;
}


module.exports = {
    getTotalProducts,
    saveOrder
}