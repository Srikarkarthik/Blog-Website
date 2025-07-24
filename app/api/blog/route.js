    const { NextResponse } = require("next/server")
    import blogModel from '@/lib/models/BlogModel.js'
    import fs, { writeFile } from 'fs/promises'
    const LoadDb= async()=>
    {
        await ConnectmongoDB()   
    }

    LoadDb()
    export async function GET(request)
    {
        const { searchParams } = new URL(request.url)
        const blogid = searchParams.get("id")
        console.log("Blog ID from query:", blogid)
        if(blogid)
        {
            const blog= await blogModel.findById(blogid)
            return NextResponse.json(blog)
        }
        else
        {
            const blogs= await blogModel.find({})
            return NextResponse.json({blogs})
        }
        
    }

    export async function POST(request) {
        const formData=await request.formData()
        const timestamp=Date.now()

        const image=formData.get("image");
        const imageBytedata=await image.arrayBuffer()
        const buffer=Buffer.from(imageBytedata)
        const path=`./public/${timestamp}_${image.name}`
        await writeFile(path,buffer)
        const imgURL=`/${timestamp}_${image.name}`
        const blogData={
            title:`${formData.get('title')}`,
            description:`${formData.get('description')}`,
            category:`${formData.get('category')}`,
            author:`${formData.get('author')}`,
            image:`${imgURL}`,
            authorImg:`${formData.get("authorImg")}`
        }

        await blogModel.create(blogData);
        return NextResponse.json({success:true,msg:"Blog"})
    } 