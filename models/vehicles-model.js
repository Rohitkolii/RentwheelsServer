import mongoose from "mongoose";

// Define User Schema
const VehicleSchema = new mongoose.Schema({
    user_id: String,
    user_name: String,
    Vehicle_type: String,
    Vehicle_name: String,
    Vehicle_model: String,
    Vehicle_rent: String,
    Vehicle_average: String,
    isBooked: Boolean,
    Vehicle_image: String, // Store image path
  });
  
  const Vehicle = mongoose.model("Vehicle", VehicleSchema);

  export default Vehicle;