const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    headline: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema);