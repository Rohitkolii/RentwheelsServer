import mongoose from "mongoose";

// Define User Schema
const FeedbackSchema = new mongoose.Schema({
    vendor_id: String,
    User_id: String,
    User_name: String,
    Vehicle_id: String,
    Feedback_message: String,
    Feedback_date: String,
  });
  
  const Feedback = mongoose.model("Feedback", FeedbackSchema);

  export default Feedback;