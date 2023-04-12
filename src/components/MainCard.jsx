import React from 'react'

const MainCard = () => {
  return (
    <div className='bg-gradient-to-b from-slateblue to-royalblue text-white text-center rounded-xl max-w-lg'>
        <div className="p-5 text-gray-300">
          Your Result
        </div>
        <div className="mx-48 p-5 bg-gradient-to-b from-violetblue to-persianblue rounded-full">
          <p className="font-bold text-4xl text-white">76</p>
          <p className="text-gray-300">of 100</p>
        </div>
        <div className="py-5 max-w-md">
          <p className="p-5 text-white text-4xl font-semibold">Great</p>
          <p className="text-center text-gray-300">You scored higher than 65% of the people who have taken these tests.</p>
        </div>    
    </div>
  )
}

export default MainCard