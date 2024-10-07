const mongoose = require("mongoose");

const ConnectionString = "mongodb+srv://arman:<passwd>@cluster0-mern2.trvmj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-mern2"

async function connectToDB() {
    await mongoose.connect(ConnectionString);
    console.log("Connected to database successfully");   
}

module.exports = connectToDB;
