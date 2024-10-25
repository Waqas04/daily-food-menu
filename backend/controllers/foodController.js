const FoodSelection = require('../models/FoodSelection');

// Create a new food selection
exports.createSelection = (req, res) => {
    const { name, food } = req.body;

    const newSelection = new FoodSelection({ name, food });

    newSelection.save()
        .then(() => {
            console.log('Data saved to MongoDB');
            res.redirect('/results'); // Redirect to results after submission
        })
        .catch(err => {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        });
};

// Fetch all food selections
exports.getSelections = (req, res) => {
    FoodSelection.find()
        .then(selections => {
            res.json(selections); // Send the selections as a JSON response
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        });
};
