//using express in node
const express = require('express');
const app = express();
const connectToDB = require('./db_files');

//invoking conn to db
connectToDB();

app.get("/", (req, res) => {
    res.json({
        "name": "namra",
        "job":"merner", 
    })
    
})

app.listen(3000, () => {
    console.log("node.js listening at port 3000")
})


