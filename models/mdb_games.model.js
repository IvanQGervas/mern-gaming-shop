const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')


const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    ,
    price: {
        type: String,
        required: true
    }
    ,
    platform: {
        type: [Schema.Types.ObjectId],
        ref: 'Provider',
        required: true
    }
    ,
    tags: {
        type: [String],
        required: true
    }
    ,
    rating: {
        type: String,
        required: true
    }

}, {
    versionKey: false
})

const Game = model('Game', gameSchema);


module.exports = Game