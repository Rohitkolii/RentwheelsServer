import express from "express"
const router = express.Router();

// import path from "path"
import {addBooking, getBooking} from "../controllers/booking-controller.js"
import authMiddleware from "../Middlewares/auth-Middleware.js"

// Define routes
router.post("/add", addBooking);
router.route("/get").get(authMiddleware, getBooking);
// router.get("/:id", getVehicleById);

export default router;