import { NextResponse } from "next/server";
import blogModel from "@/lib/models/BlogModel.js";
import cloudinary from "@/lib/config/cloudinary";
import ConnectmongoDB from "@/lib/config/email";
import mongoose from "mongoose";
import { Readable } from "stream";

// Load DB
const LoadDb = async () => {
  await ConnectmongoDB();
};

LoadDb();

// 📌 GET handler
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const blogid = searchParams.get("id");

  if (blogid) {
    if (!mongoose.Types.ObjectId.isValid(blogid)) {
      return NextResponse.json({ error: "Invalid Blog ID" }, { status: 400 });
    }

    const blog = await blogModel.findById(blogid);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  }

  const blogs = await blogModel.find({});
  return NextResponse.json({ blogs });
}

// 📌 POST handler (without try-catch)
export async function POST(request) {
  await ConnectmongoDB();
  const formData = await request.formData();
  const file = formData.get("image");
  const buffer = Buffer.from(await file.arrayBuffer());

  const cloudinaryUpload = () =>
    new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "blog_images",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      Readable.from(buffer).pipe(stream);
    });

  const result = await cloudinaryUpload(); // let error propagate

  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    author: formData.get("author"),
    image: result.secure_url, // Cloudinary URL
    authorImg: formData.get("authorImg"),
  };

  await blogModel.create(blogData);

  return NextResponse.json({ success: true, msg: "Blog created" });
}
