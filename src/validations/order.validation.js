const Joi = require('joi');
const { validationPerson } = require('./person.validation');

const createOrder = {
    body: Joi.object().keys({
        products: Joi.array().required(),
        client: validationPerson
    })
};


module.exports = {
    createOrder
}