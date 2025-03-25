const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config();


const port = process.env.port || 3306;

// MongoDB connection

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log('Connected to MongoDB');
            console.log(`Server is running on port ${port}`);
        })
        
})
    .catch((err) => {
        console.log('Error connecting to MongoDB ${port}', err);
    });



