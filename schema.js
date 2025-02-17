const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    items:[itemSchema]
});

const itemSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Items = mongoose.model('Items', itemSchema);

module.exports = {
    Restaurant,
    Items
}