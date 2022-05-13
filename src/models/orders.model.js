const mongoose = require('mongoose');
const Schemas = mongoose.SchemaTypes;
const { statusOrder } = require('../config/statusOrder');

const orderSchema = mongoose.Schema({
    clientId: {
        type: Schemas.ObjectId,
        ref: 'Client',
        required: true
    },
    deliveryId: {
        type: Schemas.ObjectId,
        ref: 'Dealer',
        default: 0
    },
    status: {
        type: String,
        enum: [statusOrder.OPEN, statusOrder.CLOSE],
        default: statusOrder.OPEN
    },
    total: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;