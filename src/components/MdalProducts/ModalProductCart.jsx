import React from 'react'
import  ModalProductExplain from './ModalProductExplain'
import ProductPicture from '../bodycomponent/product/ProductPicture'

const ModalProductCart = ({children,starClass,cost,productData,classProduc,pictureStyle,explainStyle,isOpen,handleOpen}) => {
  return (
    <>
    <div className={`${classProduc} md:w-[45%] md:items-center md:p-3 sm:w-[50%] rounded`}>
      <ProductPicture isOpen={isOpen} productData={productData}
      pictureStyle={pictureStyle} handleOpen={handleOpen}/>
      <ModalProductExplain starClass={starClass} cost={cost} productData={productData} explainStyle={explainStyle}/>
      {children}
    </div>
   
   </>
  )
}

export default ModalProductCart