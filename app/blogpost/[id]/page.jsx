"use client"
import { assets, blog_data } from '@/public/assets'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
const Page = ({ params }) => {
  const [data, setdata] = useState(null)
  const fetchblogdata = async () => {
    const response = await axios.get("/api/blog", {
      params:
      {
        id: params.id
      }
    })
    setdata(response.data)
    console.log(data)
  }
  useEffect(() => {
    fetchblogdata();
  }, []);

  if (!data) return <div className="text-center py-20 text-gray-600 text-xl">Loading blog post...</div>

  return (
    <div>
      <div className="font-title" >
        <div className='bg-gray-200  py-5'>
          <div className='flex items-center justify-between px-24 font-title max-sm:flex-col max-sm:gap-3 max-sm:items-center'>
            <Link href="/" className=''>
              <div className="img">
                <img src="/logo.png" alt="" className='w-36' />
              </div>
            </Link>
            <div className="flex items-center gap-3 border border-solid border-black p-2 text-md shadow-[-7px_7px_0px_#000000] ">
              <Link href="/admin/addProduct" className='flex items-center gap-3'>
                <div>Get Started</div>
                <img src="/arrow.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="title text-center my-10">
            <div className="titletext text-4xl font-bold max-w-[700px] mx-auto">
              {data.title}
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src="/profile_icon.png" alt="" className='w-14' />
          </div>
          <div className="author text-center mt-3 pb-10">
            {data.author}
          </div>
        </div>
        <div className="image max-w-[700px] mx-auto ">
          <Image src={`${data.image}`} width={1380} height={1380} alt=""></Image>
          <div className='hi max-sm:ml-6'>
            <div className="introduction text-xl font-bold">
              Introduction:
            </div>
            <p className='mt-5'>{data.description}</p>
            <div className=' mt-3 text-base font-semibold'>Step 1:Self-Reflection and Goal Setting</div>
            <p className='my-3'>before you can manage your lifestyle you must have a a clear understanding of what you want to achieve.Start by reflectiong on your values,aspirations and long-term goals</p>
            <p className='my-3'>before you can manage your lifestyle you must have a a clear understanding of what you want to achieve.Start by reflectiong on your values,aspirations and long-term goals</p>
            <div className='text-base font-semibold'>Step 2:Self-Reflection and Goal Setting</div>
            <p className='my-3'>before you can manage your lifestyle you must have a a clear understanding of what you want to achieve.Start by reflectiong on your values,aspirations and long-term goals</p>
            <p className='my-3'>before you can manage your lifestyle you must have a a clear understanding of what you want to achieve.Start by reflectiong on your values,aspirations and long-term goals</p>
            <div className='text-base font-semibold'>Step 3:Self-Reflection and Goal Setting</div>
            <p className='my-3'>before you can manage your lifestyle you must have a a clear understanding of what you want to achieve.Start by reflectiong on your values,aspirations and long-term goals</p>
            <p className='my-3'>before you can manage your lifestyle you must have a a clear understanding of what you want to achieve.Start by reflectiong on your values,aspirations and long-term goals</p>
            <div className='text-base font-semibold'>Step 4:Self-Reflection and Goal Setting</div>
            <p className='my-3'>before you can manage your lifestyle you must have a a clear understanding of what you want to achieve.Start by reflectiong on your values,aspirations and long-term goals</p>
            <p className='my-3'>before you can manage your lifestyle you must have a a clear understanding of what you want to achieve.Start by reflectiong on your values,aspirations and long-term goals</p>
            <div className='text-base font-semibold'>
              Conclusion:
            </div>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam, explicabo ratione earum inventore fuga suscipit unde officiis fugiat accusamus quibusdam mollitia a nesciunt repellat alias ab culpa dicta dolores!
            </p>
            <div>
              <div className="sharethis mt-20 font-semibold">
                Share this article on social media
              </div>
              <div className="icons flex items-center gap-3 mt-3">
                <a href="https://www.facebook.com/"><Image src={assets.facebook_icon} className='w-12 cursor-pointer' alt=''></Image></a>
                <a href="https://x.com/"><Image src={assets.twitter_icon} className='w-12 cursor-pointer' alt=''></Image></a>
                <a href="https://www.google.com/"><Image src={assets.googleplus_icon} className='w-12 cursor-pointer' alt=''></Image></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Page
