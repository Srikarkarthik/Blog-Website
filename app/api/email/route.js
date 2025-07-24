import { NextResponse } from "next/server";
import emailModel from "@/lib/models/emailrequest";
import ConnectmongoDB from "@/lib/config/email";
import mongoose from "mongoose";
 const LoadDb= async()=>
    {
        await ConnectmongoDB()   
    }
    console.log(mongoose.connection.name); 
    LoadDb()
    export async function GET(request)
 {
   const emails = await emailModel.find().sort({ date: -1 }); // get ALL emails, newest first

    return NextResponse.json({emails})
 }
 export async function POST(request)
 {
    const body= await request.json()
    const {email} = body
    await emailModel.create({email})
    console.log("Email received and stored:", email);
    return NextResponse.json({ message: "Email stored successfully" }, { status: 200 });
 }