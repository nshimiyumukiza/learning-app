import React from 'react'
import Name from './Name'

const Hero = () => {
  return (
    <section className='bg-[#006266] text-gray-50 border-t border-gray-100 py-5'>
        <div className='w-11/12 text-center'>
      <h2 className='text-xl fort-semibold'>take your skills to the next level</h2>
      <p>choose the right course to make your dream come true</p>
      </div>
       <Name text="erneste"/>
       <Name text="eugide"/>
       <Name text="issabela"/>
    </section>
  )
}

export default Hero
