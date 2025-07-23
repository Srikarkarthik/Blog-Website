import mongoose from "mongoose";
export const ConnectemailDB= async()=>
{
    await mongoose.connect('mongodb://localhost:27017/email');
    console.log("DB Connected")
}
