const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send("Hellp World");
})


const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log("server has started on port" + port));