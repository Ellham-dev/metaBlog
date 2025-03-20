import React from 'react'
import IconLogo from './IconLogo'
import Image1 from '/image1.png'
import User1 from '/User1.png'

const PostCard = () => {
  return (
    <>
        <div className="p-4 border border-[#E8E8EA] rounded-2xl w-[392px]">
                <img src={Image1} alt="" className='mb-4' />
                <IconLogo />
                <h2 className='text-2xl leading-7 font-semibold text-[#181A2A] mb-5 w-[344px]'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                <div className="gap-x-5 flex items-center">
                  <div className="gap-x-3 flex items-center">
                    <img src={User1} alt="" />
                    <p className='text-base leading-6 font-medium text-[#97989F]'>Jason Francisco</p>
                  </div>
                  <span className='text-base leading-6 text-[#97989F]'>August 20, 2024</span>
                </div>
              </div>
    </>
  )
}

export default PostCard