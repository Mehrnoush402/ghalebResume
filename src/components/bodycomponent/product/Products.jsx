import React, { useContext, useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import { DataText } from '../../../views/Home'
import UseModal from '../../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../../base/Modal'
import HandleCount from '../../base/HandleCount'
import Size from '../../base/Size'
import DeliveryPolicy from '../DeliveryPolicy'
import { getProducts } from '../../../servicies/productsServicies'
import { loginData } from '../../../App'
import ModalProductCart from '../../MdalProducts/ModalProductCart'



const Products = () => {
  const {modalId,list,setList}=useContext(DataText)
  const [openCart,handleOpenCart]=UseModal(false)
  const [sizeIndex, setIndex] = useState(0)// sizeIndex is for set size to db in modal & setIndex uses as a calback in getIndex for get index in Size component 


  
  

  useEffect(() => {//fetchAllDataProduct of db & set in setList 
     const fetchAllProducts=async()=>{
      try {
        const{data:allProductsData}=await getProducts()
        setList(allProductsData)

      } catch (error) {
        console.log("error",error);
      }
     }
     fetchAllProducts();

     
  }, [])
  
 

  // useEffect(() => { // for set img list of sorage
  //   listAll(imagesListRef).then((response)=>{response.items.forEach((item)=>{
  //     getDownloadURL(item).then((url)=>{
  //       setImageList((prev)=>([...prev,url]))
  //     })
  //   })})
  
   
  // }, [])
   
  const getIndex = (index) =>{ //calback for get index of Size component
    setIndex(index)
 }

  
  return (
    <div className='w-full flex flex-wrap gap-y-4 mt-6 justify-between'>

      {list?.map((item,index)=>{ 
      //  if (addListId.includes(item.id)) {
        return(
          <ProductCart 
            fixStar={false} productData={item} pictureStyle={"w-full h-2/3 md:w-[60%] sm:w-[70%]"} 
            // cartIndex={item.productId}
            handleOpen={()=>handleOpenCart()}//for open modal 
            explainStyle={"w-full mt-2 md:w-[80%] sm:w-[90%]"} 
            // key={item?.id} productCartId={item?.id} src={item?.src} cost={item?.cost} 
            classProduc={"flex flex-col items-center w-[23%]"}
            // productName={item?.name} materialProduct={item?.material}
           
          />
      )
      //  }
    //    else{
    //     return(//if  
    //     <ProductCart 
    //       fixStar={false}  isAdded={item?.isAddedInCart} productData={item} pictureStyle={"w-full h-2/3 md:w-[60%] sm:w-[70%]"} 
    //       cartIndex={item.productId}
    //       handleOpen={()=>handleOpenCart()} 
    //       explainStyle={"w-full mt-2 md:w-[80%] sm:w-[90%]"} key={item?.id}
    //       productCartId={item?.id} src={item?.src} cost={item?.cost} 
    //       classProduc={"flex flex-col items-center w-[23%]"}
    //       productName={item?.name} materialProduct={item?.material}
       

    //     />
    // )}
        })}

       {/* //important point:iterate two list for return one component
        {list?.map((item,index)=>{
        const imgUrl=imageList[index]
        return(
          <ProductCart  key={index} src={imgUrl} cost={item.cost} classProduc={"w-[23%]"} productName={item.name} materialProduct={item.material}/>
      )})} */}

      {list?.map((item,index)=>{
          if (item?.id==modalId) {//this if is for build just one modal in project[modalIndex set in productPicture with cartIndex that is item?.productId ]
            return(
              createPortal(
                <Modal keyid={list[index].id} productData={item} sizeIndex={sizeIndex} isOpen={openCart} handleOpen={handleOpenCart} isCartOnNav={true}  classModal={"w-[30%] h-[95%] p-3  flex-wrap flex-row-reverse justify-between lg:w-[50%] md:w-[50%] md:h-[60%] sm:w-[85%] sm:h-[60%]"} classProps={"justify-end items-start"} classModalBody={""} sendCount={""}>
                     {/* fixStar is for set star fix in modal that goes with props diraling in Star component*/}
                     {/* isOpen is for show productCart in Modal whithout trash icon and green effect */}
                     <ModalProductCart productData={item} isOpen={true} pictureStyle={"w-full h-2/3 md:w-[90%] md:h-[55%] sm:w-[50%] sm:h-[40%] lg:w-[60%] lg:h-[55%]"} 
                     explainStyle={"w-full mt-2 md:w-[90%] md:h-[35%] sm:w-[70%] sm:h-[20%]"}
                     classProduc={"flex flex-col items-center w-[70%]"} cost={item?.cost}/>
                     <HandleCount handleCountClass={"w-[35%] h-10 sm:w-[25%] h-6"}/>
                     <Size onEvent={getIndex} sizeClass={"w-[60%] sm:w-[40%]"} textSizeClass={"text-xs sm:text-xs sm:py-1"}/>
                     <DeliveryPolicy margin={"mt-20 sm:mt-10"}/>
                     
                  
                </Modal>
                
                ,document.body)

                
            )
          }else{
            return null
          }
      })}
        

    </div>
  )
}

export default Products