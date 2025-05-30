import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo is connected");
    }
    catch(error){
        console.log("mongo is not connected",error)
    }

    
}
export default connectDB