const express = require('express')

// create a router
const app = express.Router()

app.get('/',(req, res)=>{
    res.send("It's Working!!!!")
});

// creating  a resources in db
app.post('/posts/create',(req, res)=>{
    res.json(req.body)
})

// creating a resource to get all posts
app.get('/posts', (req, res)=>{
    res.send('All Posts')
})

// export routes
module.exports = app;