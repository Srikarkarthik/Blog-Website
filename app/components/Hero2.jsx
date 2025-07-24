import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero2 = ({ title, description, category, image, id}) => {

    return (
        <div>
                <div className="card w-[250px] relative mt-20 border border-solid border-black hover:border hover:border-solid hover:border-black text-md hover:shadow-[-7px_7px_0px_#000000]">
                     <Link href={`/blogpost/${id}`}>
                        <div className="blogpic">
                            <Image src={image} alt="" className='w-56 p-3 cursor-pointer' width={224} height={224}/>
                        </div>
                    </Link>
                    <p className='mt-4   ml-5 inline-block bg-black text-white text-sm'>{category}</p>
                    <div>
                        <h5 className='text-sm font-semibold mt-3 p-2 '>{title}</h5>
                        <p className='mt-1 text-sm/[17px] p-2 font-light'>{description}</p>
                        <Link href={`/blogpost/${id}`}>
                        <div className='flex items-center py-2 font-semibold justify-center cursor-pointer'>
                            Read more
                            <img src="/arrow.png" alt="" className='ml-2' width={12} />
                        </div>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default Hero2
