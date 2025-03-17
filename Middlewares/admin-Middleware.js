const adminMiddleware = async (req, res, next) => {
    try {
        const adminRole = req.user.role;
        // console.log(adminRole);

        if(adminRole != 'admin'){
            return res.status(403).json({message: "Acces Denied! User is not an Admin!"})
        }
        next()
    } catch (error) {
        return res.status(500).json({message: "Server Error!"})
    }
}

export default adminMiddleware;