// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const foodSelectionRoutes = require('./routes/foodRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'https://daily-food-menu-eta.vercel.app', // Your frontend URL
    methods: ['GET', 'POST'],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api', foodSelectionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
