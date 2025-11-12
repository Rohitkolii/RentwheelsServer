import User from "../models/user-model.js"
import bcrypt from "bcryptjs";


//===============
//  Home 
//===============

const home = async (req, res) => {
    try {
        res.status(200)
        .send("Welcome Router!")
    } catch (error) {
        console.log(error);
              
    }
}

//===============
//  Register 
//===============

const register = async (req, res) => {
    try {
        const {username, phone,dlnumber, adress, email, password, role, age} = req.body;
        
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg : "Email already exists"})
        }
        
        const userCreated = await User.create({username, phone,dlnumber, adress, email, password, role, age})

        res.status(201).json({
            msg: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        })
    } catch (error) {
        res.status(500).json("Internal Server error")
        // console.log(error);     
    }
}

//===============
//  Login 
//===============

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email})

        if(!userExist){
            return res.status(400).json({message : "User not exist"})
        }

        const userValid = await bcrypt.compare(password, userExist.password);

        if(userValid){
            res.status(200).json({
                msg: "Login Successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
                role: userExist.role
            })
        }else{
            res.status(401).json({message: "Invalid password"})
        }


    } catch (error) {
        res.status(500).json("Internal Server error")
    }
}

//===============
//  to send user data - User Logic
//===============

const user = async (req, res) => {
    try {
        const userData = req.user; 
        console.log(userData);
        return res.status(200).json({userData})
    } catch (error) {
        console.log(`Error from the user route ${error}`);
    }
}

const userDelete = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted');
};


// Update user by ID

    const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { username, email, phone, password, address, dlnumber, age, role } = req.body;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create an update object
        const updatedData = { username, email, phone, address, dlnumber, age, role };

        // Check if the password is being updated
        if (password) {
            const salt = await bcrypt.genSalt(0);
            updatedData.password = await bcrypt.hash(password, salt); // Hash new password
        }

        // Update user data in the database
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

        res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};



// Nav Count


const userNavCount = async (req, res) => {
    try {
        const userData = req.user; 
        console.log(userData);
        return res.status(200).json({userData})
    } catch (error) {
        console.log(`Error from the user route ${error}`);
    }
}


export {home , register, login, user, userDelete, updateUser, userNavCount}