import mongoose from "mongoose";
export const ConnectDB= async()=>
{
    await mongoose.connect('mongodb+srv://srikarkarthik93:SSsb70iwbBOH23jQ@cluster0.xrkzxj0.mongodb.net/blog-app');
    console.log("DB Connected")
}
