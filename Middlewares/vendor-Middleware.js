// const vendorMiddleware = async (req, res, next) => {
//     try {
//         const vendorRole = req.user.role;
//         console.log(vendorRole);

//         if(vendorRole != 'vendor'){
//             return res.status(403).json({message: "Acces Denied! User is not an Vendor!"})
//         }
//         next()
//     } catch (error) {
//         return res.status(500).json({message: "Server Error!"})
//     }
// }

// export default vendorMiddleware;