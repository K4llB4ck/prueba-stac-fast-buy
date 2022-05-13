const mongoose = require('mongoose');
const Schemas = mongoose.SchemaTypes;

const itemSchema = mongoose.Schema({

    orderId: {
        type: Schemas.ObjectId,
        ref: 'Order',
        required: true
    },
    productId: {
        type: Schemas.ObjectId,
        ref: 'Product',
        required: true
    },
    quanty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true

});



const Item = mongoose.model('Item', itemSchema);

module.exports = Item;