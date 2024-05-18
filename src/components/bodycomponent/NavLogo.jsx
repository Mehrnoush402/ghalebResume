import React from 'react'
import Image from '../base/Image'

const NavLogo = () => {
  return (
    <div className='flex w-1/4 justify-start items-center'>
        <Image src={require("../../assets/images/logo.png")} width={"50px"} height={"50px"}/>
        <p className='text-orange-500 text-lg font-semibold pl-2 sm:hidden'>Minimal <span className='text-rose-500'>Shop</span>ping</p>
    </div>
  )
}

export default NavLogo