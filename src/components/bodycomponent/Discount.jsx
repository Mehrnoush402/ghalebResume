import React from 'react'
import Image from '../base/Image'
import icons from '../../assets/images/icons.png'
import {useSelector} from 'react-redux'; 

const Discount = () => {
  const users=useSelector(state=>state.usersList.usersList)
  return (
    //
    <div className="flex justify-between items-center bg-orange-500 w-full mt-2 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${icons})` }}> 
        <div className='w-1/5 h-full flex justify-start items-center sm:hidden'>
            <Image src={require("../../assets/images/left-img.png")} width={"140px"} height={"220px"}/></div>
        <div className='flex flex-col justify-center items-center'>
            <span className='text-lg font-bold text-white hidden sm:flex sm:font-light sm:text-sm'>Get 50%  Off</span>
            <span className='text-lg font-bold text-white sm:hidden'>Get 50%  Off on</span>
            <span className='text-lg font-bold text-white sm:hidden'>Selected categories</span>
            <button className='btn rounded-xl bg-white text-rose-500 px-4 text-xs font-bold mt-6'>Shop Now</button>
        </div>
        <div className='w-1/5 h-full flex justify-end items-center'>
            <Image src={require("../../assets/images/right-img.png")} width={"140px"} height={"220px"}/>
        </div>
    </div>
  )
}

export default Discount