import React, { useContext, useEffect, useReducer, useState } from 'react'
import SvgIcon from '../../base/SvgIcon'
import Image from '../../base/Image'
import { DataText } from '../../../views/Home'
import { updateProduct,getProduct, updateUser } from '../../../servicies/productsServicies'
import { updateReducer } from '../../../reducers/updateReducer'
import { loginData } from '../../../App'
import Swal from 'sweetalert2'



const ProductPicture = ({productData,pictureStyle,isOpen,handleOpen}) => {
   const [color, setColor] = useState(false)//for set red heart on every product 
   const {increaseCount,decreaseCount,setModalId,fixStar, setFixStar,list}=useContext(DataText)
   const [showSvg, setShowSvg] = useState(false)//for show & hide svg on center of evrey picture on hover it
   const [productInfo, setProductInfo] = useState()// empty object for set item that get of database by id
   const [isAddedInfo, setIsAddedInfo] = useState(false)//this boolean is for set trah icon & green background on every picture that is in choiceList for every user
   const[state,dispatch]=useReducer(updateReducer,list)
   const{loginUser,setLoginUser}=useContext(loginData)
  //  const [fixHeart, setFixHeart] = useState(false)
  //  const [calbackBoolean, setCalbackBoolean] = useState(true)
 
   
  // useEffect(() => { //calback for return boolean of childComponent(pictureProduct) to parent component(products)
  //   setProductInfo(productData)
    
  // }, [productData])

  

  
  useEffect(() => {
    const handleFixHeart=()=>{
      if (loginUser?.id) {
       const checkRedHeart=loginUser?.wishLists.find((item)=>item===productData?.id)
       checkRedHeart?setColor(true):setColor(false)
      }
      else{
       setColor(false)
      }
      
     }
     handleFixHeart()
  }, [])

  useEffect(() => {//for set trash icon when Add to cart in modal in the same time on every product that added to cart we need get data of database again in useEffect
    //if we dont get productInfo of db cant set trash icon and green background in same time on every picture
 
    if (loginUser?.id) {
      const isAdded=  loginUser?.choiceList.find((item)=>item.id===productData?.id)
       isAdded?setIsAddedInfo(true):setIsAddedInfo(false)
     }
     else{
       setIsAddedInfo(false)
     }
  
   
   
 }, [loginUser?.choiceList])

  const handleShowSvg =()=>{
    setShowSvg(!showSvg)
    
   }
  
  const handleCount = async() =>{//increase & decrease number of colored hearts
    // color ? decreaseCount():increaseCount()
if (loginUser?.id) {
  setColor(!color)
  
  
    
    if (color) {
      decreaseCount()
      const deleteIndex=loginUser?.wishLists.findIndex((item)=>{return item.id==productData?.id})//set every id for product that has red heart icon in wishList for every user in db
      loginUser?.wishLists.splice(deleteIndex,1)
      await updateUser(loginUser,loginUser?.id).then(result=>{//when we do updateUser,if dont write then & catch ,dont wait to set in loginUser whithout refresh,so when we dont set at same time we need then & catch
        setLoginUser(result?.data)
      }).catch(err=>{
        console.log("err",err);
      })

   }
  else{
    increaseCount()
    loginUser?.wishLists.push(productData?.id)
    await updateUser(loginUser,loginUser?.id).then(result=>{
      setLoginUser(result?.data)
    }).catch(err=>{
      console.log("err",err);
    })
  }
  
}else{
 Swal.fire({
    icon: "error",
    title: "Sorry...",
    text: "Please sign in!",
    confirmButtonColor:"#F28C28"
    
  });
}

  }


  // useEffect(() => { //important point:when we want to send boolean as an calback we must set  it in useEffect
  //   setCalbackBoolean(false);
  // }, [calbackBoolean])


  const Delete=async()=>{//for every update you dont need to get it of batabase at first time because you have id &  can access to it with id
   
    // const updatedData= await updateProduct({...productInfo,isAddedInCart:false},keyid)
    // dispatch({type:"update",data:updatedData.data})
    const deleteIndex=loginUser?.choiceList.findIndex((item)=>{return item.id==productData?.id})//for delete choicelist in user
    loginUser?.choiceList.splice(deleteIndex,1)
    await updateUser(loginUser,loginUser?.id).then(result=>{
      setLoginUser(result?.data)
    }).catch(err=>{
      console.log("err",err);
    })
    // localStorage.setItem("basketList",JSON.stringify(loginUser))
    
  }

  
  const testFunction =()=>{//for open modal on every product that is not in choiceList of every user
    handleOpen()
    setModalId(productData?.id) //for open & close just one modal[set by customizeIndex that comese of db and in products in createPortal open just one modal]
    setFixStar(!fixStar)//for set false for fixStar in modal
   
  }

  

  
  
  return (
    <div className={`relative ${pictureStyle} rounded-lg`} onMouseEnter={handleShowSvg} onMouseLeave={()=>setShowSvg(false)}>

      {/* // for toggle & show heart svg ,bi-cart2 svg in modal and without modal */}
          {!isOpen ?
            //if the item added to cart on every picture trash & tik icon set & else set heart and bag icon set on every picture
            isAddedInfo? <><div className='absolute rounded-lg inset-0 bg-green-200 opacity-25'></div>
            <Image src={productData?.src} width={""} height={""} imgclass={"w-full h-full"}/>
      
            <div onClick={()=>{Delete()}} className='absolute top-3 right-3'>
              <SvgIcon position={"absolute top-1 right-1 bg-red-500"}>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
               </svg>
              </SvgIcon>
              
            </div>
            <SvgIcon position={"absolute top-[45%] right-[45%] bg-white"}>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
             </svg>
            </SvgIcon>
            </>:<><div className='absolute rounded-lg inset-0 hover:bg-black hover:opacity-25'></div>
      <Image src={productData?.src} width={""} height={""} imgclass={"w-full h-full"}/>

      <div onClick={()=>{handleCount()}} className='absolute top-3 right-3'>

        {color? <SvgIcon position={"absolute top-1 right-1 bg-white"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
      </SvgIcon> : <SvgIcon position={"absolute top-1 right-1 bg-white"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
      </SvgIcon>}
      </div>
      {  showSvg?<SvgIcon position={"absolute top-[45%] right-[45%] bg-white"} handleOpenCart={()=>{testFunction()}} >
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" class="bi bi-cart2" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg>
  </SvgIcon>:null}
      </>:
            <><Image src={productData?.src} width={""} height={""} imgclass={"w-full h-full"}/>
            </> 
          }
        
        
      
    </div>
  )
}

export default ProductPicture