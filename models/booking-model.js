import mongoose from "mongoose";

// Define User Schema
const BookingSchema = new mongoose.Schema({
    Vehicle_id: String,
    Vendor_id: String,
    Booking_User_id: String,
    Vehicle_type: String,
    Vehicle_name: String,
    Vehicle_model: String,
    Vehicle_rent: String,
    Vehicle_average: String,
    Vehicle_image: String, // Store image path
    Vehicle_Booking_Date: String,
    Vehicle_Dropof_Date: String,
  });
  
  const Booking = mongoose.model("Booking", BookingSchema);

  export default Booking;