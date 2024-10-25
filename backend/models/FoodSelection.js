// backend/models/FoodSelection.js

const mongoose = require('mongoose');

const foodSelectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    food: { type: String, required: true },
    extraFood: { type: String } // Field for extra food options
});

module.exports = mongoose.model('FoodSelection', foodSelectionSchema);
