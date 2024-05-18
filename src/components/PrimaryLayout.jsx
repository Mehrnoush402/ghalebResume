import React, { useContext, useEffect } from 'react'
import Header from './origincomponent/Header'
import Footer from './origincomponent/Footer' 
import { getUser } from '../servicies/productsServicies'
import { loginData } from '../App'


const PrimaryLayout = ({children}) => {

  const{loginUser,setLoginUser}=useContext(loginData)
  useEffect(() => {
    const handleUserLocal=async()=>{
      const userLocal=JSON.parse(localStorage.getItem('user_local'))
      if (userLocal) {
        const user=await getUser(userLocal?.id)
        setLoginUser(user?.data)
      }
    }
    handleUserLocal()
  }, [])
  
  return (
    //set h-screen for parent & child to scroll child wid sticky header & footer 
    <div className='flex flex-col items-center h-screen'> 

    <header className='w-full'>
      <Header/>
    </header>
    <main className='w-full flex justify-center h-screen overflow-y-scroll scrollbar-medium'>
      {children} 
    </main>
    <footer className='w-full'>
      <Footer/>
    </footer>
    
    </div>
  )
}

export default PrimaryLayout