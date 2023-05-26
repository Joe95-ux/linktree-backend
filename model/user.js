const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema ({
    name: {type: String},
    bio: {type: String},
    email: {type: String, required: true, unique: true},
    avatar: {type: String},
    password: {type: String, required: true},
    role: {type: String, enum: ['Creator', 'Brand', 'Agency', 'admin'], default: 'Creator'},
    links: [{
        url: {type: String},
        title: {type: String},
        icon: {type: String},
    }],
    socialMedia:{
        facebook: {type: String},
        twitter: {type: String},
        instagram: {type: String},
        youtube: {type: String},
        tiktok: {type: String},
        onlyfans: {type: String},
        linkedin: {type: String},
        github: {type: String},
    },


}, {collection: 'user-data-linktree'});

const userModel = model('User', userSchema);

module.exports = userModel;