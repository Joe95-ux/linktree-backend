const registerUser = (req, res)=>{
    res.send('register from callback');
}

const loginUser = (req, res)=>{
    res.send('login from callback');
}


module.exports = {registerUser, loginUser};

