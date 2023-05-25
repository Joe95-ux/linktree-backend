require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const mongoose = require("mongoose");
const {registerUser, loginUser} = require('./controllers/auth');

// connect to db
connectDB();
app.get('/api/register', registerUser);
app.get('/api/login', loginUser);




const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log("server has started on port" + port));