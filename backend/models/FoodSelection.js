// models/FoodSelection.js

const mongoose = require('mongoose');

const foodSelectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    food: { type: String, required: true },
});

module.exports = mongoose.model('FoodSelection', foodSelectionSchema);
