import User from "../models/user-model.js"

const getAllUsers = async (req, res) => {
    try {
        const userslist = await User.find({}, {password:0});
        console.log(userslist);

        if(!userslist){
            return res.status(404).json({message : "No Users Found"})
        }
        
        return res.status(200).json({userslist})
    } catch (error) {
        return res.json(500).json({message : "Internal Server Error"})
    }
}


const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id : id});
        res.status(200).json({message : "USer Deleted Successfully"})
    } catch (error) {
        res.status(500).json({message: "Server Error!"})
    }
};

export {getAllUsers, deleteUserById};