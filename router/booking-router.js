import express from "express"
const router = express.Router();
// import multer from "multer"

// import path from "path"
import {addBooking, getBooking} from "../controllers/booking-controller.js"

// Multer storage setup
// const storage = multer.diskStorage({
//   destination: "./uploads/",
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// Define routes
router.post("/add", addBooking);
router.get("/get", getBooking);
// router.get("/:id", getVehicleById);

export default router;




// import express from "express"
// import { vehicle } from "../controllers/vehicle-controller.js";

// const router = express.Router();

// router.route("/add").post(vehicle);

// export default router;