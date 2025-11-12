import express from "express"
const router = express.Router();

// import path from "path"
import {dasboarddata} from "../controllers/dashboard-controller.js"
import authMiddleware from "../Middlewares/auth-Middleware.js";

// Define routes
router.get("/dashboarddata",authMiddleware, dasboarddata);
// router.get("/get", getBooking);
// router.get("/:id", getVehicleById);

export default router;