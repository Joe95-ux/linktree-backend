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

const loginUser = (req, res) => {
  res.send("login from callback");
};

module.exports = { registerUser, loginUser };
