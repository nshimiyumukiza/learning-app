import React from 'react'
const Footer = () => {
  return (
    < div className='bg-black text-white py-10 '>
      <div className=' flex justify-between w-11/12'>
      <h1 className="font-extrabold text-3xl">Smart<span className="text-[#1B1464]">Learn</span></h1>
        <h1>@{new Date().getFullYear()}
            ,<span>all right reserved</span>
        </h1>
      </div>
      
    </div>
  )
}

export default Footer
