const User = require('../model/user');
const registerUser = async (req, res)=>{
    const {handle, email, password, category} = req.body;
    const defaultLink = {url:"", title:"social", icon:""};
    const user = await User.create({handle, email, password, role:category, link:[defaultLink]});






    res.json({message: 'Success', status: '200'});
    
}

const loginUser = (req, res)=>{
    res.send('login from callback');
}


module.exports = {registerUser, loginUser};

