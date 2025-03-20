import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: String, require: true},
    password: {type: String, require: true},
    adress: {type: String, require: true},
    dlnumber: {type: String, require: true},
    age: {type: String, require: true},
    role: {type: String, require: true},
})


//bcrypt hash password
userSchema.pre("save", async function(next){
    const user = this;

    if(!user.isModified("password")){
        next()
    }

    try {
        const saltRound = await bcrypt.genSalt(0)
        const hash_password = await bcrypt.hash(user.password, saltRound)
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
})

// json web token
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign(
            {
                userId : this._id.toString(),
                email : this.email,
                role : this.role
            },
            "RENTWHEELSFULLSTACKPROJECT",
            {
                expiresIn : "30d",
            }
        );
    } catch (error) {
        console.error(error);
        
    }
}

const User = new mongoose.model("Users", userSchema);

export default User;