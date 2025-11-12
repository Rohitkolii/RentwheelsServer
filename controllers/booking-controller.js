// / POST API to add a new user with image
// const User = require("../models/userModel");
import Booking from "../models/booking-model.js"
import Vehicle from "../models/vehicles-model.js";

//===============
//  Booking vehicle - POST METHOD
//===============
const addBooking = async (req, res) => {
  try {
    const {Vehicle_id, 
        Vendor_id, 
        Booking_User_id,
        Vehicle_type, 
        Vehicle_name, 
        Vehicle_model, 
        Vehicle_rent, 
        Vehicle_average, 
        Vehicle_image, 
        Vehicle_Booking_Date, 
        Vehicle_Dropof_Date 
    } = req.body;

    if (!Vehicle_id || !Vendor_id || !Booking_User_id || !Vehicle_type || !Vehicle_name || !Vehicle_model || !Vehicle_rent || !Vehicle_average || !Vehicle_image || !Vehicle_Booking_Date || !Vehicle_Dropof_Date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //to update vehicle booking Status
    await Vehicle.findByIdAndUpdate(
      Vehicle_id,
      { isBooked : true }, // Update username
      { new: true } // Return updated document
  );
    

    const newBooking = new Booking({Vehicle_id, Vendor_id, Booking_User_id, Vehicle_type, Vehicle_name, Vehicle_model, Vehicle_rent , Vehicle_average, Vehicle_image, Vehicle_Booking_Date, Vehicle_Dropof_Date });
    await newBooking.save(); 

    res.status(201).json({ message: "Vehicle Booked successfully", Booking: newBooking });
  } catch (error) {
    console.error("Error in Booking Vehicle:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


//===============
//  to get Booked vehicle data data - GET METHOD
//===============

const getBooking = async (req, res) => {
    try {
      console.log("id", req.userId)
      // const bookingList = await Booking.find();
      const bookingList = await Booking.find({Booking_User_id : req.userId});
      // const bookingList = await Vehicle.find({}, "username age email image");
    console.log("Bookings", bookingList)
      res.json(bookingList);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }

};


// const getBookingById = async (req, res) => {
//   try {
//     const Singlevehicle = await Vehicle.findById(req.params.id);
//     if (!Singlevehicle) {
//       return res.status(404).json({ message: "vehicle not found" });
//     }
//     res.json(Singlevehicle);
//   } catch (error) {
//     console.error("Error in getBookingById:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


export {addBooking, getBooking}


