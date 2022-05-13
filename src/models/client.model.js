const mongoose = require('mongoose');
const Schemas = mongoose.SchemaTypes;

const ClientSchema = mongoose.Schema({
    personId: {
        type: SchemaTypes.ObjectId,
        ref: 'Category',
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true

});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;