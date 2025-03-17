import React from 'react'
import Logo from '/LogoMain.png'
import { IoIosSearch } from 'react-icons/io'

const Header = () => {
    return (
        <>
            <header>
                <div className="max-w-[1216px] mx-auto">
                    {/* Header_part */}
                    <div className="flex items-center justify-between">
                        <div className="">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="">
                            <ul className='flex items-center text-base leading-6 gap-x-10'>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>Single Post</li>
                                <li>Pages</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="">
                                <input type="text" placeholder='Search' className='text-sm leading-5 font-inter' />
                                <IoIosSearch />
                            </div>
                            <div className="">
                                
                            </div>
                        </div>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header