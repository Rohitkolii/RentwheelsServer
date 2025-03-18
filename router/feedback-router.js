createFeedback


import express from "express"
const router = express.Router();

import {createFeedback, getFeedback} from "../controllers/feedback-controller.js"

// Define routes
router.post("/add", createFeedback);
router.get("/get", getFeedback);
// router.get("/get", getVehicle);
// router.get("/:id", getVehicleById);
// router.delete("/delete/:id", vehicleDelete);
// router.put("/updatestatus/:id", vehicleStatusUpdate);

export default router;
