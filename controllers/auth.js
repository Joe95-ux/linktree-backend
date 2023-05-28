const User = require('../model/user');
const registerUser = (req, res)=>{
    const {handle, email, password, category} = req.body;
    console.log(req.body);
}

const loginUser = (req, res)=>{
    res.send('login from callback');
}


module.exports = {registerUser, loginUser};

