// server.js

const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const foodSelectionRoutes = require('./routes/foodRoutes'); 
const dotenv = require('dotenv').config();

const app = express(); 

// Middleware
app.use(cors({
    origin: 'https://daily-food-menu-eta.vercel.app/', 
    credentials: true 
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));



// Routes
app.use('/api', foodSelectionRoutes); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
