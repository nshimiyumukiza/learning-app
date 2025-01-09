import React from 'react'
import StudentCard from './StudentCard'

const Student = () => {
    const stundents=["erneste","alice","foustine","ramberi"]
  return (
    <div className='flex bg-green-800 text-white justify-around'>
      {/* <StudentCard name="erneste" />
      <StudentCard name="cyusa"/>
      <StudentCard name="eric"/>
      <StudentCard name="keza"/> */}
      {/* {stundents.map((student,index)=> StudentCard key={index} name={student})} */}
{/* {stundents.map((stundent, index ) => <StudentCard key={index} name={stundent}/>)} */}

    </div>
  )
}

export default Student
