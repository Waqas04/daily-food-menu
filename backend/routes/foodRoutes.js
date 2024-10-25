// foodRoutes.js

const express = require('express');
const router = express.Router();
const FoodSelection = require('../models/FoodSelection'); 

// Endpoint to submit food selections
router.post('/submit', async (req, res) => {
    try {
        const { name, food, extraFood } = req.body;

        // Validate inputs
        if (!name || (!food && !extraFood)) {
            return res.status(400).json({ message: 'Name is required and at least one food option must be provided.' });
        }

        // Create a new selection
        const newSelection = new FoodSelection({
            name,
            food,
            extraFood
        });

        // Save selection to the database
        await newSelection.save();
        res.status(201).json({ message: 'Food selection submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error submitting selection' });
    }
});

// Endpoint to get all food selections
router.get('/results', async (req, res) => {
    try {
        const selections = await FoodSelection.find({});
        res.json(selections);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching selections' });
    }
});

module.exports = router;
