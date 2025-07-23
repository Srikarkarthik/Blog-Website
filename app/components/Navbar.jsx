import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <div className="navbar font-title">
                <div className="navbardetails">
                    <div className="navbarflex flex justify-between items-center px-24 m-5 max-sm:flex-col max-sm:items-center max-sm:justify-center">
                        <div className="img">
                            <img src="/logo.png" alt="" className='w-36' />
                        </div>
                        <div className="getstartedflex flex items-center gap-3 border border-solid border-black p-2 text-md shadow-[-7px_7px_0px_#000000] max-sm:mt-5">
                            <Link href="/admin/addProduct" className='flex items-center gap-3 max-sm:flex max-sm:items-center'>
                                <div className="getstarted">
                                    <button className='max-sm:text-xs'>Get Started</button>
                                </div>
                                <div className="arrow">
                                    <img src="/arrow.png" alt=""className=' max-sm:w-3' />
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
