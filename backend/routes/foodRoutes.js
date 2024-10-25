// backend/routes/foodSelections.js

const express = require('express');
const router = express.Router();
const FoodSelection = require('../models/FoodSelection.js'); // Adjust the path as necessary

// POST route to submit food selections
router.post('/submit', async (req, res) => {
    try {
        const { name, food, extraFood } = req.body;
        const selection = new FoodSelection({ name, food, extraFood });
        await selection.save();
        res.status(201).json({ message: 'Food selection saved successfully!' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'Error saving data' });
    }
});

// GET route to fetch food selections
router.get('/results', async (req, res) => {
    try {
        const selections = await FoodSelection.find();
        res.json(selections);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

module.exports = router;
