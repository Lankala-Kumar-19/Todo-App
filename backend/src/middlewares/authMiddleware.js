require('dotenv').config()
const jwt = require('jsonwebtoken')

const verify = async(req,res,next) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if(!token){
        return res.status(401).json({msg:" no token, access denied"});
    }

    try{
        const decoded = jwt.verify(token,process.env.S);
        console.log(decoded);
        
        req.user = decoded;

        next();
    }catch(err){
        res.status(401).json({msg:"token invalid"});
    }
}

module.exports = {verify}