import mongoose from "mongoose";
import Axios from "axios";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required :true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    Name:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    
    DOB:{
        type:Date,
        required:true,
    },
    
    Contact :{
        type:Number,
        required:true,
    }
    },

    
{
    timestamps:true
})

const User = mongoose.model("User",UserSchema);
export default User