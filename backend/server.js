// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const foodSelectionRoutes = require('./routes/foodRoutes'); // Adjust the path as necessary
const dotenv = require('dotenv').config();

const app = express(); // Initialize express app

// Middleware
app.use(cors({
    origin: 'https://daily-food-menu-eta.vercel.app', // Your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'], // Include OPTIONS for preflight
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable pre-flight for all routes
app.options('*', cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api', foodSelectionRoutes); // Add a prefix to your routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
