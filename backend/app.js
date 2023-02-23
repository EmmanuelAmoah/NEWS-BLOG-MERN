const express = require('express');
require('dotenv').config();


const app = express();


const port = process.env.PORT || 9090;


app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})