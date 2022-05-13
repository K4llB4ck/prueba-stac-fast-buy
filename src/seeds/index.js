const productSeed = require('./products.seed');
const categorySeed = require('./categories.seed');
const { productService, categoryService } = require('../services');



function seed() {

const registerSeed = [productSeed, categorySeed];

registerSeed.forEach((seed) => {
    seed.documents.forEach(document => {
        if (seed.model == "Category") {
            categoryService.creatCategory(document);
        }
        if (seed.model == "Product") {
            productService.creatProduct(document);
        }
    });
});
}






