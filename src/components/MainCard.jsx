import React from 'react'
import Summarycard from './Summarycard'

const MainCard = ({data}) => {
  return (
    <div class='bg-gradient-to-b from-slateblue to-royalblue text-white text-center rounded-xl max-w-lg'>
        <div class="p-5 text-gray-300">
          Your Result
        </div>
        <div class="mx-48 p-5 bg-gradient-to-b from-violetblue to-persianblue rounded-full">
          <p class="font-bold text-4xl text-white">76</p>
          <p class="text-gray-300">of 100</p>
        </div>
        <div class="py-5 max-w-md">
          <p class="p-5 text-white text-4xl font-semibold">Great</p>
          <p class="text-center text-gray-300">You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div>
          <div>
            <h3>Summary</h3>
            {data.map(entered => (
              <Summarycard key={entered.id} entered={entered}/>
            ))}
          </div>
          <button>Continue</button>
        </div>       
    </div>
  )
}

export default MainCard