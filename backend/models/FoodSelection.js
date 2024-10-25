// models/FoodSelection.js

const mongoose = require('mongoose');

const foodSelectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    food: {
        type: String,
        default: ''
    },
    extraFood: {
        type: String,
        default: ''
    }
}, { timestamps: true }); // Optional: Adds createdAt and updatedAt timestamps

const FoodSelection = mongoose.model('FoodSelection', foodSelectionSchema);
module.exports = FoodSelection;

