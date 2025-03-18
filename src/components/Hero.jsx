import React from 'react'
import Benner from "/HeroBg.png"
import User1 from "/User1.png"
import IconLogo from './IconLogo'

const Hero = () => {
  return (
    <>
      <section>
        <div className="max-w-[1216px] mx-auto">
          <div className="relative pb-20">
              <img src={Benner} alt="" className='w-full h-auto ' />
             <div className="w-[598px] p-10 bg-white rounded-2xl absolute left-[64px] top-[360px] shadow-lg">
              <IconLogo/>
              <h1 className='text-4xl leading-10 font-semibold w-[518px] mb-6'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
              <div className="gap-x-5 flex items-center">
                <div className="gap-x-3 flex items-center">
                  <img src={User1} alt="" />
                  <p className='text-base leading-6 font-medium text-[#97989F]'>Jason Francisco</p>
                </div>
                <span className='text-base leading-6 text-[#97989F]'>August 20, 2024</span>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero