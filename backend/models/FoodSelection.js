const mongoose = require('mongoose');

const foodSelectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    food: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '22h' } // Automatically remove documents after 22 hours
});

const FoodSelection = mongoose.model('FoodSelection', foodSelectionSchema);

module.exports = FoodSelection;
