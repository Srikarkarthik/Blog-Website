"use client"
import { blog_data } from '@/public/assets'
import React, { useState } from 'react'
import Hero2 from './Hero2'
import { useEffect } from 'react'
import axios from 'axios'
const Bloglist = () => {
    const [menu, setmenu] = useState("All")
    const [blogs, setblogs] = useState([])
    const fetchblog=async()=>
    {
        const response=await axios.get("/api/blog")
        setblogs(response.data.blogs)
        console.log(response.data)
    }
    useEffect(() => {
        fetchblog()
    }, [])
    return (
        <div>
            <div className="selections">
                <div className={"selectoptions flex items-center justify-center mt-20 gap-5"}>
                    <div onClick={()=>{setmenu("All")}} className={ menu==="All"?"bg-black p-2 px-4 text-white cursor-pointer":"cursor-pointer"}>
                        All
                    </div>
                    <div onClick={()=>{setmenu("Technology")}} className={ menu==="Technology"?"bg-black p-2 px-4 text-white cursor-pointer":"cursor-pointer"}>
                        Technology
                    </div>
                    <div onClick={()=>{setmenu("Startup")}} className={ menu==="Startup"?"bg-black p-2 px-4 text-white cursor-pointer":"cursor-pointer"}>
                        Startup
                    </div>
                    <div onClick={()=>{setmenu("Lifestyle")}} className={ menu==="Lifestyle"?"bg-black p-2 px-4 text-white cursor-pointer":"cursor-pointer"}>
                        Lifestyle
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {blogs.filter((item)=>menu==="All"?true:item.category===menu).map((item,index)=>{
                    return <Hero2  key ={index} image={item.image} title={item.title} description={item.description} category={item.category} id={item._id}/>
                })}
            </div>
        </div>
    )
}

export default Bloglist
