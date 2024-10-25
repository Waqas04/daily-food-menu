const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const foodRoutes = require('./routes/foodRoutes');
const dotenv = require('dotenv')

const app = express();
const port = 3000;

dotenv.config()

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // For parsing application/json

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Serves the index.html file
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Use routes
app.use('/', foodRoutes); // Mount the food routes

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
