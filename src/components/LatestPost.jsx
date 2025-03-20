import React from 'react'
import Ads from './Ads'
import Image1 from '/image1.png'
import User1 from '/User1.png'
import IconLogo from './IconLogo'
import PostCard from './PostCard'

const LatestPost = () => {
  return (
    <>
      <section>
        <div className="max-w-[1216px] mx-auto">
          <div className="pt-20 grid place-content-center">
            <Ads />
          </div>
          {/* Image_Part */}

          <div className="py-20">
            <div className="text-2xl leading-7 font-bold mb-8">Latest Post</div>
            {/* single_img */}
            <div className="flex items-center flex-wrap gap-5 mb-8">
             <PostCard/>
             <PostCard/>
             <PostCard/>
             <PostCard/>
             <PostCard/>
             <PostCard/>
             <PostCard/>
             <PostCard/>
             <PostCard/>
            </div>
            <div className="grid place-content-center">
            <button className='px-5 py-3 border border-[#696A75] text-[#696A75] text-base leading-6 font-medium rounded-lg'>View All Post</button>
            </div>
          </div>
          <div className="pb-[100px] grid place-content-center">
            <Ads />
          </div>
        </div>
      </section>
    </>
  )
}

export default LatestPost