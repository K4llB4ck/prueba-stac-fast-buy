const mongoose = require('mongoose');

const personSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true

    },
    identification: {
        type: Number,
        required: true,
        unique: true
    },
    street: {
        type: String,
        required: true
    }

});

personSchema.static.isTaken = async function(identification) {
    const person = await this.findOne({identification});
    return !!person;
}

const Person = mongoose.model('Person', personSchema);

module.exports = Person;