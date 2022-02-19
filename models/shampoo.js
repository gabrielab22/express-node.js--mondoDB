const mongoose = require('mongoose')
const { float } = require('webidl-conversions')


const shampooShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    aroma: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Shampoo', shampooShema)