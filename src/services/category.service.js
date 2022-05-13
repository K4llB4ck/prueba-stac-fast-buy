const { Category } = require('../models');


/**
 * Create a product
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const creatCategory = async (categoryBody) => {
    return Category.create(categoryBody);
};

const queryCategories = async  () => {
    const categories = await Category.find();
    return categories;
}

module.exports = {
    creatCategory,
    queryCategories
}