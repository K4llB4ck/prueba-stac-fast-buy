const express = require('express');
const router = express.Router();
const { categoryController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { categoryValidation } = require('../../validations');

router.route('/')
    .post(validate(categoryValidation.createCategory), categoryController.createCategory)
    .get(categoryController.getCategories);


module.exports = router;