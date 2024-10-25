// server.js

const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const foodSelectionRoutes = require('./routes/foodRoutes'); 
const dotenv = require('dotenv').config();

const app = express(); 

// Middleware
// app.use(cors({
//     // origin: 'https://daily-food-menu-eta.vercel.app', // Allow requests from your frontend
//     origin: 'https://daily-food-menu-production.up.railway.app', // For testing only
//     methods: ['GET', 'POST', 'OPTIONS'], // Allow methods
//     credentials: true // Enable set cookie
// }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Handle preflight requests for all routes
app.options('*', cors());

// Routes
app.use('/api', foodSelectionRoutes); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
