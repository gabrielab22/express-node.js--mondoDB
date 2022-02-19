const mongoose = require('mongoose')
const { float } = require('webidl-conversions')


const manufacturerShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    founded: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('manufacturer', manufacturerShema)