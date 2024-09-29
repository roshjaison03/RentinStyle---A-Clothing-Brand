import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab modi suscipit fuga odio molestiae maxime soluta quis corrupti ipsa ratione</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique cupiditate eos odio sed maxime. Earum reiciendis totam ad perferendis excepturi.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis quidem. Officia sit expedita, ullam, sed itaque repellat dolorum cupiditate unde libero delectus modi minima.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ratione molestiae labore eligendi atque nihil praesentium incidunt velit eveniet asperiores?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ratione molestiae labore eligendi atque nihil praesentium incidunt velit eveniet asperiores?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ratione molestiae labore eligendi atque nihil praesentium incidunt velit eveniet asperiores?</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About