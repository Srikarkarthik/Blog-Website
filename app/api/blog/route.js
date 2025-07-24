// app/api/blog/route.js
import { NextResponse } from "next/server";
import blogModel from "@/lib/models/BlogModel.js";
import { writeFile } from "fs/promises";
import ConnectmongoDB from "@/lib/config/d"; // Your DB connection (to love)

export async function GET(request) {
  await ConnectmongoDB();

  try {
    const { searchParams } = new URL(request.url);
    const blogid = searchParams.get("id");
    console.log("Blog ID from query:", blogid);

    if (blogid) {
      const blog = await blogModel.findById(blogid);
      return NextResponse.json(blog);
    } else {
      const blogs = await blogModel.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: "Error fetching blog(s)" }, { status: 500 });
  }
}

export async function POST(request) {
  await ConnectmongoDB();

  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");

    // If no image uploaded
    if (!image || !image.name) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    const imageBytedata = await image.arrayBuffer();
    const buffer = Buffer.from(imageBytedata);
    const filename = `${timestamp}_${image.name}`;
    const path = `./public/${filename}`;

    await writeFile(path, buffer);

    const imgURL = `/${filename}`;
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgURL,
      authorImg: formData.get("authorImg"),
    };

    const created = await blogModel.create(blogData);
    return NextResponse.json({ success: true, blog: created });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
