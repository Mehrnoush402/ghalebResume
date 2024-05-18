import React from 'react'
import clsx from 'clsx'
import { useContext } from 'react'
import { DataText } from '../../views/Home'

const Size = ({onEvent,sizeClass,textSizeClass}) => {
    
  const{sizeList,color,setColor}=useContext(DataText)
     
  const handleIndex = (index)=>{ //callback to send index to parent(Products component)
    setColor(index)//is context state for set index of every button  that when is same with index div button beckground becomes orange & other buttons background
    // become white
    return index
  }
 

    
  return (
    <div className={`parent flex justify-between gap-x-1 mt-5 ${sizeClass}`}>
      {[...Array(5)].map((btn, index) => {
        return (
          <div key={index} className="w-1/5 flex justify-between items-center"onClick={()=>onEvent(handleIndex(index))}>
          
           {color==index?<button className={clsx(` border border-orange-500 rounded w-full ${textSizeClass} font-semibold py-2 bg-orange-500 text-white`)}>{sizeList[index]}</button>
            :<button className={clsx(` border border-orange-500 rounded text-orange-500 w-full ${textSizeClass} font-semibold py-2`)}>{sizeList[index]}</button>}
          
          </div>
        )
      })}
       
    </div>
  )
}

export default Size