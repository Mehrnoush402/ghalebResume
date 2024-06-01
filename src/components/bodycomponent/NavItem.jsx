import React, { useContext, useEffect, useState} from 'react'
import SpanIcon from '../base/SpanIcon'
import UseModal from '../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../base/Modal'
import ProductCart from './product/ProductCart'
import DeliverInformation from './DeliverInformation'
import OrderSummery from './OrderSummery'
import DeliveryPolicy from './DeliveryPolicy'
import { loginData } from '../../App'
import { useNavigate } from 'react-router-dom'
import ModalProductCart from '../MdalProducts/ModalProductCart'
import Swal from 'sweetalert2'

const NavItem = ({parentNavItemClass,firstNavItemClass,secoundNavItemClass,hambergureIconClass}) => {
  const navigate=useNavigate()
  const [openCart,handleOpenCart]=UseModal(false)//for open modal on click cart
  const [hambergurmenue, setHambergurmenue] = UseModal(false)//for open modal on hambergure menue when window screen become little
  const{loginUser,setLoginUser}=useContext(loginData)
  const [navLogin, setNavLogin] = useState("")//for show "Account" or user.name on navItem
  const [loginUserStyle, setloginUserStyle] = useState('')//for set style for user.name on navItem
  const [status, setStatus] = useState(true)//for set true & false when on click on user.name
  const [toggele, setToggele] = useState("hidden")//for set when status is true log out div be show & inverse
  const [windowWidth, setWindowWith] = useState(0)//for set width screen of window.innerWidth
  const [sum, setSum] = useState(0)
  // const [hiddenModal, setHiddenModal] = useState("hidden")
   
  // useEffect(() => {
  //  const addListData=localStorage.getItem("basketList")
  //  setLoginUser(JSON.parse(addListData))
  // }, [loginUser])
   
   const checkCart=()=>{//if cart is empty show sweetalert
    
    if (loginUser?.id) {
      if (!loginUser?.choiceList.length) {
        Swal.fire({
         icon: "error",
         title: "Sorry...",
         text: "Your cart is empty! Please add some items to it!",
         confirmButtonColor:"#F28C28"
         
       });
     }
     else{
      handleOpenCart()
     }
    }else{
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "Please Sign In!",
        confirmButtonColor:"#F28C28"
        
      });
    }
   }

   const showHambergurMenue=()=>{
    setHambergurmenue()
    // windowWidth <=767?setHiddenModal("visible"):setHiddenModal("hidden")
   }

   useEffect(() => {//for set user.name in navItem $ Account name
    const cheackLogin=()=>{

      loginUser?.name?setNavLogin(loginUser?.name):setNavLogin("Account")
      loginUser?.name?setloginUserStyle('text-sm font-bold'):setloginUserStyle('')

     }
     cheackLogin()
   }, [loginUser?.name])

    const accountOnclick=()=>{//when click on account go to sign in page
      navigate("/sign in")
      
     
    }
    
    useEffect(() => {
      let totals=0;
     if (loginUser?.id) {
      loginUser?.choiceList.map((item)=>{
        totals+=item?.counterProduct
      })
      setSum(totals)
     }
     else{
      setSum(0)
     }
    }, [loginUser?.choiceList])
    
    
    //  useEffect(() => {//for toggle log out div on hover user.name login
    //    const handleToggle=()=>{
    //     status?setToggele("visible"):setToggele("hidden")
    //    }
    //    handleToggle()
    //  }, [status])

    const onclickUser=()=>{//when onclick to user.name log out div show & hide
      setStatus(!status)
      status?setToggele("visible"):setToggele("hidden")
    }
     
     const handleLogOut=()=>{//when click on log out loginUser becomes empty & go to sign in page
      Swal.fire({
        title: "Your Log Out wascd server successfully!",
        html: "I will close in 5 seconds.",
        timer: 2000,
        timerProgressBar: true,
        confirmButtonColor:"#F28C28",
      });
      setLoginUser({})
      localStorage.clear()
      navigate("/sign in")
     }

     useEffect(() => {//for get width screen 
       const getWidthScreen=()=>{
         setWindowWith(window.innerWidth)
        
       }
       getWidthScreen()
       
     }, [window.innerWidth])
     
     
  return (
    <>
      <div className={`${parentNavItemClass}`}>
        <nav className={`text-black list-none ${firstNavItemClass}`}>
            <li className='sm:hover:bg-gray-300 sm:w-full'>Categories</li>
            <li className='sm:hover:bg-gray-300 sm:w-full'>Deals</li>
            <li className='sm:hover:bg-gray-300 sm:w-full'>What's New</li>
            <li className='sm:hover:bg-gray-300 sm:w-full'>Delivery</li>
        </nav>
        <nav className={`text-black list-none ${secoundNavItemClass}`}>
          
            <li className='sm:hover:bg-gray-300 sm:w-full cursor-pointer relative'>
            {loginUser?.id?
            // when screen is less than 767 px,be only Log out span but when screen get bigger be only accoun or user.name with person icon
              windowWidth <= 767 ? 
              <div className='flex justify-end'>
                 <span className='text-xs font-bold' onClick={()=>handleLogOut()}>Log Out</span>
              </div>
              :<SpanIcon parentClass={"gap-x-1 sm:justify-end"} userStyle={loginUserStyle} content={`${navLogin}`} handleOnClick={()=>{onclickUser()}}>
              <div className={`${toggele} flex justify-center bg-white rounded-xl rounded-tr-none items-center absolute top-[20px] left-[20px] py-3 px-4`}>
                <span onClick={()=>handleLogOut()}>Log out</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
              </SpanIcon>
              
              :
              // when we dont have loginUser in hambergure menu we have only one person svg
              <SpanIcon parentClass={"gap-x-1 sm:justify-end"} userStyle={loginUserStyle} content={`${navLogin}`} handleOnClick={()=>{accountOnclick()}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
              </SpanIcon>}
            </li>
          
            <li className='sm:hover:bg-gray-300 sm:w-full' onClick={()=>checkCart()}>Cart</li>
        </nav>
    </div>
    <div className={`${hambergureIconClass} flex justify-center items-center`}> 
      <button className=' bg-gray-300 rounded-md w-6 h-6 flex justify-center items-center' onClick={()=>{
      showHambergurMenue() 
      }}> {/* //this button will have modal */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
    </div>
    
    {createPortal(<Modal isOpen={hambergurmenue} handleOpen={setHambergurmenue} isCartOnNav={false}
      classProps={"justify-end mt-10"}  classModal={"w-1/2 flex-col p-4 h-[30vh] md:w-1/4 md:h-[20vh]"} classModalBody={"w-full h-[95%] flex-col"} headerModalClass={"justify-end"}
    
    >
      <span className='text-xs font-bold border-b-2 border-black'>{loginUser?.name}</span>
      <NavItem parentNavItemClass={"flex flex-col w-full items-end text-xs lg:hidden gap-y-2"}
         firstNavItemClass={"w-full flex flex-col items-end gap-y-2 sm:text-end"}
         secoundNavItemClass={"w-full flex flex-col items-end gap-y-2 sm:text-end"}
         hambergureIconClass={"hidden"}/>
         

    </Modal>,document.body)}
    

      {createPortal(
      <Modal isOpen={openCart} handleOpen={handleOpenCart} isCartOnNav={false}  classProps={"justify-center items-center"}  classModal={"w-1/2 flex-col p-4 h-[80vh] lg:h-[60vh] md:h-[60vh] md:w-[70%] sm:w-[85%] sm:h-[70vh]"} classModalBody={"w-full h-[95%]"} headerModalClass={"justify-end"}>
        <div className='w-full flex justify-between gap-x-3 p-3 h-full'>
          <div className='leftDiv flex flex-col items-center w-[60%] gap-y-3 h-full'>
            <div className='topDiv h-2/3 overflow-y-scroll flex flex-col p-3 w-full border border-gray-300 rounded'>
              <p className="text-lg font-semibold sm:text-sm">Cart Details</p>
              {loginUser?.choiceList?.map((item,index)=>{
                // {setTotalItemsCounter((prev) => prev + item?.counterProduct)} 
               return (<ModalProductCart productData={item} isOpen={true} pictureStyle={"w-[25%] h-[50%] sm:mt-4 lg:w-[35%] md:w-[45%] mb-3 sm:w-[55%] sm:h-[35%] sm:mt-0"} explainStyle={"w-[75%] h-full mt-10 sm:h-[50%] sm:gap-y-0 sm:mt-2 sm:w-[90%]"} key={index} cost={item?.cost*item?.counterProduct}
                classProduc={"flex relative justify-between items-center sm:items-start w-[70%] lg:w-[90%] md:w-[95%] sm:w-[95%] sm:h-[100px] gap-x-6 sm:gap-x-4"} starClass={"sm:w-[10px] sm-h-[10px]"}>
                              <div className='rounded-full bg-gray-300 text-orange-500 absolute w-6 h-6 flex justify-center items-center top-[75px] left-[45px] lg:top-[100px] md:top-[110px] md:left-[75px] sm:top-[42px] sm:left-[35px] sm:w-4 sm:h-4 sm:text-xs'>{item?.counterProduct}</div>
                       </ModalProductCart>
                       
                       
                         
               )
              })}
              
            </div>
            <div className='bottomDiv h-1/3 w-full border border-gray-300 rounded'>
              <DeliverInformation/>
            </div>
          </div>
          <div className='rightDiv h-full flex flex-col justify-between w-[40%] border border-gray-300 rounded'>
              <OrderSummery totals={sum}/>
              <div className='bg-gray-100'>
                <DeliveryPolicy margin={"ml-3 md:ml-1 sm:gap-y-4 sm:ml-0"}/>
              </div>
          </div>
        </div>
      </Modal>
      
      ,document.body)}
    
    </>
    
  
  )
}

export default NavItem