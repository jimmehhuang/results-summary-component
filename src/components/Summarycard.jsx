import React from 'react'
import data from '../../data.json'

const Summarycard = () => {

    const {color, icon, category, score} = data;

  return (
    <div className='flex flex-col justify-between p-5 rounded-xl bg-opacity-5'>
        <div>
            Summary
        </div>
        {data.map(data => {
            return (
            <div className={`flex gap-2 bg-${data.color} bg-opacity-5`}>
                <img src={data.icon} alt={data.category}></img>
                <h3 className={`font-semibold text-right text-${data.color}`}>{data.category}</h3>
                <p className='text-right'><span className='font-semibold text-right'>{data.score}</span> / 100
                </p>            
            </div>
            )
        })}
        <button>Continue</button>        
    </div>
  )
}

export default Summarycard