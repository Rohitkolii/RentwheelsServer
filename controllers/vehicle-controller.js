// / POST API to add a new user with image
// const User = require("../models/userModel");
import Vehicle from "../models/vehicles-model.js"

//===============
//  to POST vehicle data - POST METHOD
//===============
const createvehicle = async (req, res) => {
  try {
    const {user_name, user_id, Vehicle_type, Vehicle_name, Vehicle_model, Vehicle_rent, Vehicle_average } = req.body;

    if (!user_name || !user_id || !Vehicle_type || !Vehicle_name || !Vehicle_model || !Vehicle_rent || !Vehicle_average || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    const newVehicle = new Vehicle({user_name, user_id, Vehicle_type, Vehicle_name, Vehicle_model, Vehicle_rent, Vehicle_average, isBooked : false ,Vehicle_image: imagePath });
    await newVehicle.save(); 

    res.status(201).json({ message: "Vehicle Added successfully", Vehicle: newVehicle });
  } catch (error) {
    console.error("Error in Adding Vehicle:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


//===============
//  to get vehicle data - GET METHOD
//===============

const getVehicle = async (req, res) => {
    try {
      const vehicleList = await Vehicle.find();
    //   const vehicleList = await Vehicle.find({}, "username age email image");
      res.json(vehicleList);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
};

const getVehicleById = async (req, res) => {
  try {
    const Singlevehicle = await Vehicle.findById(req.params.id);
    if (!Singlevehicle) {
      return res.status(404).json({ message: "vehicle not found" });
    }
    res.json(Singlevehicle);
  } catch (error) {
    console.error("Error in getVehicleById:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export {createvehicle, getVehicle, getVehicleById}


