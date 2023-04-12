import React from 'react'

const MainCard = () => {
  return (
    <div className='flex flex-col p-6 items-center justify-center text-center gap-6 rounded-b-3xl md:rounded-3xl md:w-1/2 bg-gradient-to-b from-slateblue to-royalblue font-semibold text-white'>
        <h3 className="p-5 text-gray-300 text-lg md:text-xl">Your Result</h3>

        <div className="w-32 h-32 md:m-4 md:w-44 md:h-44 bg-gradient-to-b from-violetblue to-persianblue rounded-full">
          <h1 className="font-bold text-5xl md:text-6xl pb-2">76</h1>
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