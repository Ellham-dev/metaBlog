import React from 'react'
import User1 from "/User1.png"
import IconLogo from '../components/IconLogo'


const SinglePost = () => {
  return (
    <>
      <section>
        <div className="max-w-[800px] mx-auto">
          <div className="">
            <div className="mt-8">
              <IconLogo />
              <h1 className='text-4xl leading-10 font-semibold mb-6'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
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

export default SinglePost