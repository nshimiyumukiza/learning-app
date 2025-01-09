import React from 'react'
import Card from './Card'

const HomeCard = () => {
  return (
    
     <div className='bg-gray-200'>
    <div className='grid grid-cols-2 py-32 gap-20 w-4/5 mx-auto flex-col items-center  rounded-md p-5'>
      <div className='bg-green-800 px-4 py-3 rounded '>
        <h2>for students</h2>
        <p>check out some coolcourses to perfect your craft</p>
        <a className='border-2 hover:bg-orange-300' href="#">veiw courses</a>
  
        </div>
        

        <div className='bg-blue-800 text-white rounded flex flex-col items-center mx-auto p-5'>
            <h2>for teachers</h2>
            <p>show case your best courses to attract world-class learners</p>
            <a className='border-2 hover:bg-orenge-300' href="">publish course</a>
            
      </div>
    </div>
    </div>
  )
}

export default HomeCard
