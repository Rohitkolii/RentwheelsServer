
import express from "express"
const router = express.Router();
import multer from "multer"

import path from "path"
import {createvehicle, getVehicle, getVehicleById, vehicleDelete, vehicleStatusUpdate} from "../controllers/vehicle-controller.js"

// Multer storage setup
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Define routes
router.post("/add", upload.single("image"), createvehicle);
router.get("/get", getVehicle);
router.get("/:id", getVehicleById);
router.delete("/delete/:id", vehicleDelete);
router.put("/updatestatus/:id", vehicleStatusUpdate);

export default router;
