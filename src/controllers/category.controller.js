const catchAsync = require('../utils/catchAsync');
const {categoryService} = require('../services');
const httpStatus = require('http-status');
const { exist } = require('joi');


const getCategories = catchAsync(async (req, res) => {
    const result = await categoryService.queryCategories();
    res.send(result);
});

const getProduct = catchAsync(async (req, res) => {

});

const createCategory = catchAsync(async (req,res) => {

    const category = await categoryService.creatCategory(req.body);
    res.status(httpStatus.CREATED).send(category);
});


module.exports = {
    getCategories,
    getProduct,
    createCategory
}