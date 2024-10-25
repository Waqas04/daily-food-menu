const express = require('express');
const router = express.Router();
const FoodSelection = require('../models/FoodSelection');

// POST route to save food selection
router.post('/submit', async (req, res) => {
    try {
        const { name, food, extraFood } = req.body;

        const selection = new FoodSelection({ name, food, extraFood });
        await selection.save();

        res.status(201).json({ message: 'Selection saved' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Error saving data' });
    }
});

// GET route to fetch all selections
router.get('/results', async (req, res) => {
    try {
        const selections = await FoodSelection.find();
        res.status(200).json(selections);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

module.exports = router;
