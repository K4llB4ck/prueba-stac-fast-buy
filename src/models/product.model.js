const { mongo, SchemaTypes } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.SchemaTypes;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sku: {
        type: String
    },
    description: {
        type: String
    },
    categoryId: {
        type: SchemaTypes.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
});

productSchema.statics.getByIds = async function (ids = []) {
    const products = [];
    for (let i = 0; i < ids.length; i++) {
        const product = await this.findById(ids[i]);
        products.push(product);
    }
    return products;
}



const Product = mongoose.model('Product', productSchema);

module.exports = Product;