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

const getUserSocials = async (req,res)=>{
    const handle = request.params.handle;
    try {
        console.log(handle);
        const user = await user.findOne({handle: handle});
        const socials = user.socialMedia;
        return res.json({message: 'found', socials, status: 'success'});
        
    } catch (error) {
        return res.json({status: 'error', error: error.message});
    }
}

module.exports = {getUserData};