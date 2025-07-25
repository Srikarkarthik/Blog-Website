import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero2 = ({ title, description, category, image, id }) => {
  return (
    <div className="w-[280px] sm:w-[300px] rounded-2xl overflow-hidden border border-black bg-white shadow-md hover:shadow-[-8px_8px_0px_#000] transition-all duration-300 ease-in-out mt-14">
      <Link href={`/blogpost/${id}`}>
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="w-full h-[180px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full mb-2">{category}</span>
        <h3 className="text-lg font-bold mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>

        <Link href={`/blogpost/${id}`}>
          <div className="flex items-center text-sm font-semibold text-black hover:underline">
            Read more
            <img src="/arrow.png" alt="arrow" className="ml-2 w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero2
