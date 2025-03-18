import React from 'react'
import Logo from '/LogoMain.png'
import MoodChange from '/Moodchange.png'
import { IoIosSearch } from 'react-icons/io'
import { Link, NavLink } from 'react-router'

const Header = () => {
    return (
        <>
            <header>
                <div className="max-w-[1216px] mx-auto">
                    {/* Header_part */}
                    <div className="flex items-center justify-between h-[100px]">
                        <div className="">
                            <Link to="/"><img src={Logo} alt="" /></Link>
                        </div>
                        <div className="">
                            <ul className='flex items-center text-base leading-6 gap-x-10'>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
                                })} to="/">Home</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
                                })} to="blog">Blog</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
                                })} to="singlepost">Single Post</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
                                })} to="pages">Pages</NavLink></li>
                                <li><NavLink style={({ isActive }) => ({
                                    color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal"
                                })} to="contact">Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-x-10">
                            <div className="flex items-center pl-4 pr-2 gap-x-3 w-[166px] h-[36px] bg-[#F4F4F5] rounded-xl">
                                <input type="text" placeholder='Search' className='h-full w-full text-sm leading-5 font-inter' />
                                <IoIosSearch size={16} />
                            </div>
                            <div className="">
                                <img src={MoodChange} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header