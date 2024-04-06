import React from 'react'


const Spinner = () => {
  return (
    <div className='w-screen flex justify-center items-center h-full gap-2 '>
      <div className='loader'> </div>
      <div className="font-bold text-2xl">
      Loading
      </div>
    </div>
  )
}

export default Spinner
