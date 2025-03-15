import express from "express"
import authRoute from "./router/auth-router.js"
import connectDb from "./utils/db.js";
import adminRoute from "./router/admin-router.js"
import cors from "cors"
const app = express();

//Cors Error Handled
const corsOptions = {
    origin: "http://localhost:5173",
    // origin: "https://rentwheelss.vercel.app",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials:true
}
app.use(cors(corsOptions));

app.use(express.json())
app.use("/api/auth", authRoute);


//Admin Routes
app.use("/api/admin", adminRoute);


const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, ()=> {
        console.log(`Listening on PORT ${PORT}`);
    });
});