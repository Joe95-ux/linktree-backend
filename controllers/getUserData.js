const User = require("../model/user");
const getUserData = async (req, res)=>{
    const handle = req.params.handle;
    try {
        const user = await User.findOne({handle:handle});
        console.log(user);
        const userData = {
            name:user.name,
            avatar: user.avatar,
            bio: user.bio,
            links: user.links
        }
        return res.json({message: 'found', userData, status: 'success'})
        
    } catch (error) {
        console.log(error);
        return res.json({status: 'error', error: error.message});
    }

}

module.exports = {getUserData};