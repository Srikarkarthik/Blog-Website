import mongoose from "mongoose";
export const ConnectemailDB= async()=>
{
    await mongoose.connect('mongodb://localhost:27017/');
    console.log("DB Connected")
}
