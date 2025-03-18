import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import SingleLogo from '/singleLogo.png'

const Footer = () => {
  return (
    <>
      <section className='bg-[#F6F6F7]'>
        <div className="max-w-[1216px] mx-auto font-plusjakartasans">
          <div className="flex items-center justify-between py-16 border-b border-[#DCDDDF]">
            {/* About_part */}
            <div className="w-[280px]">
              <h6 className='font-semibold text-lg leading-7 mb-3'>About</h6>
              <p className='text-base leading-6 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <h5 className='text-base leading-6 mb-1'><span className='font-semibold'>Email :</span> info@jstemplate.net</h5>
              <h5 className='text-base leading-6'><span className='font-semibold'>Phone :</span>880 123 456 789</h5>
            </div>
            {/* Link_part */}
            <div className="flex items-center gap-x-20">
              <div className="">
                <h6 className='font-semibold text-lg leading-7 mb-6'>Quick Link</h6>
                <ul className='gap-y-2'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Archived</li>
                  <li>Author</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="">
                <h6 className='font-semibold text-lg leading-7 mb-6'>Category</h6>
                <ul className='gap-y-2'>
                  <li>Lifestyle</li>
                  <li>Technology</li>
                  <li>Travel</li>
                  <li>Business</li>
                  <li>Economy</li>
                  <li>Sports</li>
                </ul>
              </div>
            </div>
            {/* Subscribe_part */}
            <div className="bg-white w-[392px] flex flex-col items-center py-8 rounded-xl ">
              <h4 className='font-semibold text-xl leading-6 mb-2'>Weekly Newsletter</h4>
              <p className='text-base leading-6 mb-7'>Get blog articles and offers via email</p>
              <div className="flex items-center justify-between w-[320px] border border-[#DCDDDF]  px-4 py-3 mb-2">
                <input type="email" placeholder='Your Email' className='text-base leading-6 w-[258px] outline-none' />
                <MdOutlineMail size={20} />
              </div>
              <button className='py-3 w-[320px] text-base leading-6 font-medium bg-[#4B6BFB] rounded-xl text-white cursor-pointer'>Subscribe</button>
            </div>
          </div>
          {/* Footer_End_Part */}
          <div className="flex items-center  justify-between py-8">
            <div className="flex items-center gap-x-2.5">
              <img src={SingleLogo} alt="" />
              <div className=""><h4 className='text-xl leading-7'>Meta<span className='font-extrabold'>Blog</span></h4>
                <p className='text-base leading-6'>© JS Template 2023. All Rights Reserved.</p></div>
            </div>
            <div className="">
              <ul className='gap-x-4 text-base leading-6 flex items-center'>
                <li className='border-r pr-4 border-[#DCDDDF]'>Terms of Use</li>
                <li className='border-r pr-4 border-[#DCDDDF]'>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer