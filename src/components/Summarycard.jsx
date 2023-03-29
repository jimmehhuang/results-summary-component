import React from 'react'
import data from '../../data.json'

const Summarycard = () => {
    console.log(data)

    const table = data;

  return (
    <div class="flex flex-col p-5 items-center justify-center">
        <div>
            Summary
        </div>
            
        <div>
            Reaction
            80 / 100
        </div>
        <div>
            Memory
            92 / 100
        </div>
        <div>
            Verbal
            61 / 100
        </div>
        <div>
            Visual
            72 / 100
        </div>
        <div>
            Continue 
        </div>

    </div>
  )
}

export default Summarycard