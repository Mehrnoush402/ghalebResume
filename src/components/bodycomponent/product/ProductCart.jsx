import React from 'react'
import ProductPicture from './ProductPicture'
import ProducsExplain from './ProducsExplain'

const ProductCart = ({starClass,productData,fixStar,children,classProduc,pictureStyle,explainStyle,isOpen,handleOpen}) => {
 
  return (
   <>
    <div className={`${classProduc} md:w-[45%] md:items-center md:p-3 sm:w-[50%] rounded`}>
      <ProductPicture isOpen={isOpen} productData={productData}
      pictureStyle={pictureStyle} handleOpen={handleOpen}/>
      <ProducsExplain starClass={starClass} fixStar={fixStar} productData={productData} explainStyle={explainStyle}/>
      {children}
    </div>
   
   </>
  )
}

export default ProductCart