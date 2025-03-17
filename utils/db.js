import mongoose from "mongoose";
const URI = "mongodb://127.0.0.1/rentwheels_db"
// const URI = "mongodb+srv://rohitkoli:Rohitkoli@cluster0.g3taq.mongodb.net/rentwheels_db?retryWrites=true&w=majority&appName=Cluster0"


const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection Successfull");
    } catch (error) {
        console.error("database connection failed");
        console.log(error);
        
        process.exit(0)
    }
}

export default connectDb;




// const {MongoClient} = require("mongodb");
// import { MongoClient } from "mongodb";

// const clinet = new MongoClient("mongodb://127.0.0.1")
// await clinet.connect();

// const db = clinet.db("rentwheel_db")
// const userCollection = db.collection("users");

// userCollection.insertOne({name : "Kamal koli", age : 28});