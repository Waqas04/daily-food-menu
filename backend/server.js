// server.js

// server.js

const express = require('express'); // Ensure this is only declared once
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const foodSelectionRoutes = require('./routes/foodRoutes.js'); // Adjust the path as necessary
const dotenv = require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
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
app.use('/', foodSelectionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
