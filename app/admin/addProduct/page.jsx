"use client"
import React, { useState } from 'react'
import { assets } from '@/public/assets'
 import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image'
import axios from 'axios';
const page = () => {
   const [form, setform] = useState({
    title:"",
    description:"",
    category:"Startup",
    author:"Alex Bennet",
    authorImg:"/author_img.png"
   })
    const HandleChange=(e)=>
    {
        const name=e.target.name
        const value=e.target.value
        setform({...form,[name]:value})
    }
    const [image, setimage] = useState(false)
    const handleFilechange=(e)=>
    {
        setimage(e.target.files[0])
    }
    const onSubmitchange= async(e)=>
    {
        e.preventDefault()
       const formData= new FormData()
       formData.append('title',form.title)
       formData.append('description',form.description)
       formData.append('category',form.category)
       formData.append('author',form.author)
       formData.append('authorImg',form.authorImg)
       formData.append("image",image)
       const response=await axios.post('/api/blog',formData)
       console.log(response.data)
        if(response.data.success)
            {
                toast.success(response.data.msg)
            }
        else
            {
                toast.error("Error")
            } 

    }
  return (
    <div>
        <div className="addblogs">
            <form action="" className='ml-10 mt-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:ml-0' onSubmit={onSubmitchange}>
                <div className='font-semibold'> Upload Thumbnail</div>
                <label htmlFor="image">
                    <Image src={!image?assets.upload_area:URL.createObjectURL(image)} alt="" className='w-36 mt-5' width={50} height={30}/>
                </label>
                <input type="file" id="image" name="" hidden required onChange={(e)=>{handleFilechange(e)}}/>
                <div className='mt-5'>Blog Title</div>
                <input type="text" placeholder='Type Here' className='w-[34%] p-2 mt-5 border border-solid max-sm:w-32' name="title" value={form.title} onChange={(e)=>{HandleChange(e)}}/>
                <div className='mt-5'>Blog Description</div>
                <textarea name="description" id="" placeholder='write content here' className='w-[34%] h-44 p-2 border border-solid  max-sm:w-44' value={form.description} onChange={(e)=>{HandleChange(e)}}></textarea>
                <div className='mt-3'>Blog Category</div>
                <select name="category" id="" className='mt-3 p-2 border border-solid px-10 max-sm:px-2' value={form.category} onChange={(e)=>{HandleChange(e)}}>
                    <option value="Startup">Startup</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Technology">Technology</option>
                </select>
                <br />
                    <button className='mt-7 px-7 p-2 w-40 bg-black text-white max-sm:px-3 max-sm:w-32' type='submit'>Add</button>
                
            </form>
        </div>
    </div>
  )
}

export default page
