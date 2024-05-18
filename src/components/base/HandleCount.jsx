import React, { useContext,useRef } from 'react'
import SvgIcon from './SvgIcon'
import { DataText } from '../../views/Home'



const HandleCount = ({handleCountClass}) => {
    const{inputValue,setInputValue}=useContext(DataText)
    const inputref=useRef(null)
    
    
    const increaseCounter =()=>{
      setInputValue(parseInt(inputref?.current?.value)+1)
  
     }
     const decreaseCounter =()=>{
      if (inputValue>0) {
        setInputValue(parseInt(inputref?.current?.value)-1)
      }
  
     }
    const setInputVal =(props)=>{
     
     setInputValue(props)
    }   
  return (
    <div className={`rounded-lg border border-gray-300 flex mt-4 ${handleCountClass}`}>
        <button className='border-r-[1px] border-gray-300 flex items-center justify-center w-1/3'>
            <SvgIcon position={""} handleOpenCart={()=>decreaseCounter()}>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-dash-circle" viewBox="0 0 16 16">
               <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
               <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
            </svg>
            </SvgIcon>
        </button>
        <input className='cursor-auto flex text-center justify-center w-1/3 text-sm font-semibold text-gray-500 outline-0'  ref={inputref} value={inputValue} onChange={(e)=>{setInputVal(e.target.value)}}></input>
        <button className='border-l-[1px] border-gray-300 flex justify-center items-center w-1/3' >
          <SvgIcon position={""} handleOpenCart={()=>increaseCounter()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-plus-circle" viewBox="0 0 16 16">
                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
          </SvgIcon>
        </button>
    </div>
  )
}

export default HandleCount