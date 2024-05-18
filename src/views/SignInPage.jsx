import React from 'react'
import SignIn from '../components/base/SignIn'
import Header from '../components/origincomponent/Header'
import icons from '../assets/images/icons-croped.png'
import '../../src/index.css'
import Image from '../components/base/Image'
// import { NavLink } from 'react-router-dom'

const SignInPage = () => {
  return (
    <div>
        {/* <NavLink to={"/register"}>
          <button className='bg-blue-500 rounded-2 flex justify-center items-center text-white cursor-pointer'>Register</button>
        </NavLink> */}
        <div className='flex flex-col items-center h-screen'> 

          <header className='w-full'>
            <Header/>
          </header>
          <main className='w-full flex justify-around items-center h-screen sm:flex sm:flex-col sm:items-center sm:justify-evenly md:flex md:flex-col md:items-center'>
            <Image src={require("../assets/images/shopCart.gif")} width={"600px"} height={"600px"} imgclass={"sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px]"}/>
            <SignIn/>
          </main>
          {/* <footer className='w-full h-[40%]'>
            <div className='w-full h-full bg-contain bg-repeat-x relative  before:content-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:to-orange-500 ' style={{ backgroundImage: `url(${icons})` }}></div>
            
          </footer> */}
    
        </div>
    </div>
  )
}

export default SignInPage