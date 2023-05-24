require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const mongoose = require("mongoose");

// connect to db
connectDB();
app.get('/', (req, res)=>{
    res.send("Hello World");
})


const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log("server has started on port" + port));