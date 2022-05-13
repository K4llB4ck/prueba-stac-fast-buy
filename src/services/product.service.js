const { Product } = require('../models');


/**
 * Create a product
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const creatProduct = async (productBody) => {
    return Product.create(productBody);
};

const queryProducts = async () => {
    const products = await Product.find();
    return products;
}

module.exports = {
    creatProduct,
    queryProducts
}