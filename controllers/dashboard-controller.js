import Booking from "../models/booking-model.js";
import Feedback from "../models/feedback-model.js";
import User from "../models/user-model.js";
import Vehicle from "../models/vehicles-model.js"

export const dasboarddata = async (req, res) => {
    console.log(req.user.role)
    try {
   const Earnings = req.user.role === 'admin' ? await Booking.find() : await Booking.find({Vendor_id : req.userId});
    const Total_Vehicle = req.user.role === 'admin' ? await Vehicle.find().countDocuments() : await Vehicle.find({user_id : req.userId}).countDocuments();
    const Total_Users = await User.find({role : "user"}).countDocuments();
    const Total_Vendors = await User.find({role : "vendor"}).countDocuments();
    const Total_Bookings =  req.user.role === 'admin' ? await Booking.find().countDocuments() : await Booking.find({Vendor_id : req.userId}).countDocuments({});

    const Total_Feedbacks = req.user.role === 'vendor' ? 
    await Feedback.find({ vendor_id : req.userId}).countDocuments()
    :
    await Feedback.find().countDocuments();



    const Total_Earnings = Earnings.reduce((acc, elm)=> acc + Number(elm.Vehicle_rent), 0)

   res.status(200).json({Total_Vehicle, Total_Users, Total_Vendors,Total_Bookings, Total_Earnings, Total_Feedbacks})
   } catch (error) {
    res.status(500).json({message : "Server Error"})
   }
}