const catchAsync = require('../utils/catchAsync');
const {productService} = require('../services');
const httpStatus = require('http-status');


const getProducts = catchAsync(async (req, res) => {

    const result = await productService.queryProducts();
    res.send(result);

});

const getProduct = catchAsync(async (req, res) => {

});

const createProduct = catchAsync(async (req,res) => {
    const product = await productService.creatProduct(req.body);
    res.status(httpStatus.CREATED).send(product);
});


module.exports = {
    getProducts,
    getProduct,
    createProduct
}