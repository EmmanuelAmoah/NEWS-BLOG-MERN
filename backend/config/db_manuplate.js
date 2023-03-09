const dbConn = require('./db_connection');
const Post = require('../models/post');

// initialize empty db object
const db = {
    dbConn,
    Post
}

module.exports = db;
