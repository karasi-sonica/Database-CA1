const express = require('express');
const mongoose = require('mongoose');
const PORT = 8000;
const app = express();
app.use(express.json());

const{Restaurant,Items} = require('./schema');

mongoose.connect('mongodb+srv://karasisonica:Database@databaseca1.vmuh8.mongodb.net/?retryWrites=true&w=majority&appName=DatabaseCA1')
    .then(() => {
        console.log('Database is succesfully connected!!');
    })
    .catch((err) => {
        console.error('Failed to connect to Database!!');
    })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})