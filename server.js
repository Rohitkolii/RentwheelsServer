import express from "express"
import authRoute from "./router/auth-router.js"
import connectDb from "./utils/db.js";
import adminRoute from "./router/admin-router.js"
import vehicleRoute from "./router/vehicle-router.js"
import bookingRoute from "./router/booking-router.js"
import feedbackRoute from "./router/feedback-router.js"
import dashboardRoute from "./router/dash-router.js"
import cors from "cors"
const app = express();

// origin: "https://rentwheelss.vercel.app",
//Cors Error Handled
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials:true
}
app.use(cors(corsOptions));

app.use(express.json())
app.use("/api/auth", authRoute);


//Admin Routes
app.use("/api/admin", adminRoute);


//Vehicle Routes
app.use("/uploads", express.static("uploads")); // Serve uploaded images
app.use("/api/vehicle", vehicleRoute);

//Booking Routes
app.use("/api/booking", bookingRoute);

//Booking Routes
app.use("/api/feedback", feedbackRoute);

//Booking Routes
app.use("/api/dashboard", dashboardRoute);
  
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, ()=> {
        console.log(`Listening on PORT ${PORT}`);
    });
});