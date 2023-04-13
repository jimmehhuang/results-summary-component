import React from 'react'
// import data from '../../data.json'

const Summarycard = ({data}) => {

  return (
    <div className='flex flex-col justify-between p-5 rounded-xl md:shadow-2xl md:rounded-3xl md:w-1/4 md:h-2/3'>
        <div className='mb-4 font-bold text-lg md:text-2xl'>
            Summary
        </div>
        <div className='py-4'>
            {data.map(data => {
            return (
            <div key={data.id} className={`flex text-lg gap-2 bg-${data.color} bg-opacity-5`}>
                <img src={data.icon} alt={data.category}></img>
                <h3 className={`font-semibold text-${data.color}`}>{data.category}</h3>
                <p className='text-lg'><span className='font-semibold text-darkgrayblue'>{data.score}</span> / 100
                </p>            
            </div>
            )
        })}
        </div>
        
        <button className='text-white text-lg p-2 rounded-full bg-darkgrayblue hover:bg-gradient-to-b hover:from-slateblue hover:to-royalblue'>
            Continue
        </button>        
    </div>
  )
}

export default Summarycard