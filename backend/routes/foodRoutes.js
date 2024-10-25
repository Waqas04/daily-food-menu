// routes/foodRoutes.js

const express = require('express');
const router = express.Router();
const FoodSelection = require('../models/FoodSelection');

// POST route to submit a selection
router.post('/submit', async (req, res) => {
    const { name, food } = req.body;
    if (!name || !food) {
        return res.status(400).json({ message: 'Name and food selection are required' });
    }
    try {
        const newSelection = new FoodSelection({ name, food });
        await newSelection.save();
        res.status(200).json({ message: 'Selection submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting selection', error });
    }
});

// GET route to retrieve all selections
router.get('/results', async (req, res) => {
    try {
        const selections = await FoodSelection.find({});
        res.status(200).json(selections);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving selections', error });
    }
});

module.exports = router;
