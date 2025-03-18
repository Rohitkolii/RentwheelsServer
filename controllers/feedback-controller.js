import Feedback from "../models/feedback-model.js"

//===============
//  to POST vehicle data - POST METHOD
//===============
const createFeedback = async (req, res) => {
  try {
    const {vendor_id, User_id, Vehicle_id, Feedback_message, Feedback_date, User_name } = req.body;

    if (!vendor_id || !User_id || !Vehicle_id || !Feedback_message || !Feedback_date || !User_name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFeedback = new Feedback({vendor_id, User_id, Vehicle_id, Feedback_message, Feedback_date, User_name });
    await newFeedback.save(); 

    res.status(201).json({ message: "Feedback Added successfully", Feedback: newFeedback });
  } catch (error) {
    console.error("Error in Adding Feedback:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


//===============
//  to get vehicle data - GET METHOD
//===============

const getFeedback = async (req, res) => {
    try {
      const FeedbackList = await Feedback.find();
    //   const vehicleList = await Vehicle.find({}, "username age email image");
      res.json(FeedbackList);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
};

// const getVehicleById = async (req, res) => {
//   try {
//     const Singlevehicle = await Vehicle.findById(req.params.id);
//     if (!Singlevehicle) {
//       return res.status(404).json({ message: "vehicle not found" });
//     }
//     res.json(Singlevehicle);
//   } catch (error) {
//     console.error("Error in getVehicleById:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// const vehicleDelete = async (req, res) => {
//     await Vehicle.findByIdAndDelete(req.params.id);
//     res.send('Vehicle deleted');
// };


export {createFeedback, getFeedback}


