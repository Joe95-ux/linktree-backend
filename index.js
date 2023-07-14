require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const {registerUser, loginUser} = require('./controllers/auth');
const {dashBoardData} = require('./controllers/dashboard');

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connect to db
connectDB();
app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

app.post('/data/dashboard', dashBoardData);





const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log("server has started on port" + port));