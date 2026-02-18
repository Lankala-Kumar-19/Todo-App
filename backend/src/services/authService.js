require('dotenv').config();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async(user)=>{
    
    try{
        const{email,password} = user;
        // console.log(email,password);
        
        const existing = await User.findOne({email});
        // console.log(existing);
        if(!existing){
            return null;
        }
        const isMatch = await bcrypt.compare(password,existing.password);
        if(!isMatch){
            return null;
        }
        const token = jwt.sign(
            {id: existing._id},
            process.env.S,
            {expiresIn: "1h"}
        );
        return token;
    }
    catch(err){

    }
};

module.exports = {login}