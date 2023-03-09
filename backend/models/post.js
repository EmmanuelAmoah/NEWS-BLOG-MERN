const dbConn = require('../config/db_connection')
const {DataTypes} = require('sequelize')

// 
const Post = dbConn.define('Post',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    sub_title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},
// define table name
{
    tableName:'posts'
})

// 
Post.sync()

module.exports = Post