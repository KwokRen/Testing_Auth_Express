const dotenv = require('dotenv')
require("dotenv").config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Importing the route
const authRoute = require('./routes/auth');

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, 
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
    () => {
    console.log('Connected to DB')
})

app.use(express.json())

// Route Middleware
app.use('/api', authRoute)


app.listen(3000, () => {
    console.log('Server is running!')
});