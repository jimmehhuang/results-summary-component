import React from 'react'

const Summarycard = ({data}) => {

    const {color, icon, category, score} = data;

    const altColors = {
        lightred: {
            text: 'text-lightred',
            background: "bg-lightred"
        },
        orangey: {
            text: 'text-orangey',
            background: 'bg-orangey'
        },
        teal: {
            text: 'text-teal',
            background: 'bg-teal'
        },
        cobalt: {
            text: 'text-cobalt',
            background: 'bg-cobalt'
        }
    }

  return (
    <div className={`flex justify-between p-5 rounded-xl ${altColors[color]['background']} bg-opacity-5`}>
        <div className='flex gap-2'>
            <img src={icon} alt={category}></img>
            <h3 className={`font-semibold ${altColors[color]} text-right`}>{category}</h3>
            <p className='font-semibold text-right'><span className='text-right'>{score}</span> / 100
            </p>            
        </div>
    </div>
  )
}

export default Summarycard