require("dotenv").config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Importing the route
const authRoute = require('./routes/auth');

// Connect to DB
mongoose.connect()

// Route Middleware
app.use('/api', authRoute)


app.listen(3000, () => {
    console.log('Server is running!')
});