// routes/foodRoutes.js
const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// Route to create a new food selection
router.post('/submit', foodController.createSelection);

// Route to fetch all food selections
router.get('/results', foodController.getSelections);

module.exports = router;