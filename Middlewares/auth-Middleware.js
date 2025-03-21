import jwt from "jsonwebtoken"
import User from "../models/user-model.js";

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({message : "Unauthorized HTTP, Token not provided"})
    }
    
    const jwtToken = token.replace("Bearer", "").trim();
    // console.log(jwtToken);
    

    try {
        const isVerified = jwt.verify(jwtToken, "RENTWHEELSFULLSTACKPROJECT")
        // console.log(isVerified);
        
        const userData = await User.findOne({email : isVerified.email}).select({
            password : 0,
        });
        
        // console.log(userData);
        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        next();
    } catch (error) {
        return res.status(401).json({message : "Unauthorized invalid token"})
    }
}

export default authMiddleware