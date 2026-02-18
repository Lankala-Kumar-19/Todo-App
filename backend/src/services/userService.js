const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const createUser = async(user) => {

    const {name,email,password} = user 
    const existing = await User.findOne({email});
    if(existing){
        throw new Error('user already exist');
        return;
    }
    
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password,salt);
    newUser = new User({
        name,
        email,
        password:pass,
    });

    return newUser.save();
}

const getAllUsers = async()=>{
    return await User.find();
}

module.exports={createUser,getAllUsers};