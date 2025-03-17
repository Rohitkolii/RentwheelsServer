import express from "express"
const router = express.Router();

// import path from "path"
import {addBooking, getBooking} from "../controllers/booking-controller.js"

// Define routes
router.post("/add", addBooking);
router.get("/get", getBooking);
// router.get("/:id", getVehicleById);

export default router;