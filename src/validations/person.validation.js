const Joi = require('joi');


const validationPerson = Joi.object().keys({
    firstname:Joi.string().required(),
    lastname:Joi.string().required(),
    identification: Joi.number().required(),
    street:Joi.string().required()
 });

const createPerson = {
    body: validationPerson
};


module.exports ={
    createPerson,
    validationPerson  
}