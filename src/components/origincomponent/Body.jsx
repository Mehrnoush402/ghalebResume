import React from 'react'
import NavComponent from '../bodycomponent/NavComponent'
import Discount from '../bodycomponent/Discount'
import Products from '../bodycomponent/product/Products'



const Body = () => {
   return (
    <div  className='w-4/6 bg-gray-200 px-4 h-fit xl:h-fit xl:w-[80%] lg:h-screen lg-w-[80%] md:w-5/6 md:h-fit sm:px-3 sm:py-1 sm:w-full sm:h-fit'>
     
        <NavComponent/>
        <Discount/>
        <Products/>
     
    </div>
  )
}

export default Body