import React from 'react'

const Resultscard = () => {
  return (
    <div className='flex flex-col p-6 items-center justify-center text-center gap-6 rounded-b-3xl md:rounded-3xl md:w-1/4 bg-gradient-to-b from-slateblue to-royalblue font-semibold text-white md:shadow-2xl'>
        <h3 className="p-4 text-lightlavendar text-lg md:text-xl">Your Result</h3>

        <div className="w-32 h-32 md:m-4 md:w-44 md:h-44 bg-gradient-to-b from-violetblue rounded-full ">
          <h1 className="mt-7 md:mt-12 font-semibold text-5xl md:text-6xl pb-2">76</h1>
          <p className="text-lightlavendar">of 100</p>
        </div>

        <div className="flex flex-col items-center gap-2 pb-4">
          <p className="p-2 text-2xl font-semibold">Great</p>
          <p className="text-center text-lightlavendar w-1/2 md:w-2/3">You scored higher than 65% of the people who have taken these tests.</p>
        </div>  
 
    </div>
  )
}

export default Resultscard