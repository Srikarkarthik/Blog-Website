"use client"
import axios from 'axios'
import React, { useState } from 'react'
const Hero = () => {
    const [store, setstore] = useState(
        {
            email:"",
        } 
    )
    const handleinput=(e)=>
        {
            let name=e.target.name
            let value=e.target.value
            setstore({...store,[name]:value})   
            console.log(store)
        }
    const handlesubmit=async()=>
    {
        const response=await axios.post("/api/email",store)
        console.log(response.data)
    }
    return (
        <div>
            <div className="hero font-title">
                <div className="herosection flex justify-center items-center w-[43vw] mx-auto">
                    <div className="LatestBlog flex justify-center mt-10 text-4xl font-semibold max-md:text-xl max-md:font-medium">
                        Latest Blogs
                    </div>
                </div>
                <p className='mt-8 ml-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam soluta reiciendis mollitia debitis quae perspiciatis.</p>
                <div className="userselection">
                    <div className="user">
                        <div className="userflex flex justify-center items-center mt-10">
                            <div className="userbox flex w-[100%] justify-center max-sm:flex-col max-sm:items-center max-sm:justify-center">
                                <div className="input w-[30%] max-sm:w-[160px]">
                                    <input type="text" placeholder='Enter your email' className='p-3  w-[100%] border border-solid border-black  text-md shadow-[-7px_7px_0px_#000000]'name="email" value={store.email} onChange={(e)=>{handleinput(e)}}/>
                                </div>
                                <div className="button max-sm:mt-5">
                                    <button className='p-3 border border-solid border-black  text-md shadow-[0px_7px_0px_#000000]' onClick={handlesubmit}>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
