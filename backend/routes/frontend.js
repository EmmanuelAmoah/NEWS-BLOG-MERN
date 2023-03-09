const express = require('express')
const db = require('../config/db_manuplate')

// create a router
const app = express.Router()

app.get('/',(req, res)=>{
    res.send("It's Working!!!!")
});

// creating  a resources in db
app.post('/posts/create', async(req, res)=>{
    
    // extract user data
    const {title, sub_title, description} = req.body;
    // save post data
    try {
    const createdPost = await db.Post.create({title, sub_title, description})
        res.status(200).json({message: 'Post created successfully'})
    } catch (err) {
        res.status(500).json({message: 'Error creating post'})
    }
})

// creating a resource to get all posts
app.get('/posts', (req, res)=>{
    res.send('All Posts')
})

// export routes
module.exports = app;