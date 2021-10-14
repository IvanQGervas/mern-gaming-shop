const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')


const providerSchema = new Schema({
    platform: {
        type: String,
        required: true
    },
    cif: {
        type: String,
        required: true
    },
    games: {
        type: [String],
        required: true,
        ref: 'Game'
    }
}, {
    versionKey: false
})

const Provider = model('Provider', providerSchema);


module.exports = Provider