const User = require("../model/user");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { handle, email, password, category } = req.body;
  const defaultLink = { url: "", title: "social", icon: "" };
  try {
    const user = await User.create({
      handle,
      email,
      password,
      role: category,
      link: [defaultLink]
    });
    const token = jwt.sign({ email: email }, process.env.SECRET_JWT_KEY);
    return res.json({
      message: "User was created successfully!",
      status: "success",
      token: token,
      id: user._id
    });
  } catch (error) {
    if(error.code === '11000'){
        return res.json({message: 'Try a different handle or email', status: 'error'});
    }
    return res.json({message: err.message, status: 'error'});
  }
};

const loginUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({email:email, password:password});
    if(!user){
      return res.json({status: 'not found', error:'Invalid credentials'});
    }
    const token = jwt.sign({email:email}, process.env.SECRET_JWT_KEY);
    return res.json({message: 'user found', status: 'success', 'token': token, id: user._id});
  } catch (error) {
    return res.json({message: error.message, status: 'error'});
  }
  res.send("login from callback");
};

const dashBoardData = async(req, res)=>{
  const {tokenMail } = req.body;
  console.log(tokenMail);
  try {
      const decodedTokenMail = jwt_decode(tokenMail, process.env.SECRET_JWT);
      const email = decodedTokenMail.email;
      console.log('decoded email', email)
      const user = await User.findOne({email: email});
      const userData = {
          name: user.name,
          role: user.role,
          bio: user.bio,
          avatar: user.avatar,
          handle: user.handle,
          links: user.links.length
      }
      return res.json({message: 'User loaded', userData, status: 'Okay'})
  } catch (err) {
      return res.json({status: 'error', error: err.message})
  }
}

module.exports = { registerUser, loginUser, dashboardData };
