const express = require('express');
require('dotenv').config();
const frontendRoute = require('./routes/frontend')


const app = express();

// using express bodyParser
app.use(express.urlencoded({ extended: false }));

// app port number
const port = process.env.PORT || 9090;

// frontend route   
app.use('/', frontendRoute)

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})