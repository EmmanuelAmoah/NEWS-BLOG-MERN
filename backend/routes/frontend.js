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

// updating a post in db
app.put('/posts/:id', async(req, res)=>{
    
    // extract post id and updated data from the request body
    const postId = req.params.id;
    const {title, sub_title, description} = req.body;
    
    // update post data
    try {
        const updatedPost = await db.Post.update({title, sub_title, description}, {where: {id: postId}})
        res.status(200).json({message: 'Post updated successfully'})
    } catch (err) {
        res.status(500).json({message: 'Error updating post'})
    }
})


// deleting a post in db
app.delete('/posts/delete/:id', async(req, res)=>{
    try{
        const postId = req.params;
        const recordDelete = await db.Post.destroy({where:{id: postId}})
        if (recordDelete > 0)
        res.status(200).json({message: 'Post deleted successfully'})
        else
        res.json({})
    } catch (err) {
        res.status(500).json({message: 'Error deleting post'})
    }
})

// creating a resource to get all posts
// get all posts
app.get('/posts', async (req, res) => {
    try {
      const posts = await db.Post.findAll()
      res.json(posts)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error retrieving posts' })
    }
  })

// export routes
module.exports = app;