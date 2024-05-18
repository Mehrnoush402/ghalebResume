import React from 'react'
import Star from '../../base/Star'

const ProducsExplain = ({starClass,productData,explainStyle,fixStar}) => {
 
  return (
    <div className={`rounded flex flex-col ${explainStyle}`}>
      <div className='flex justify-between'>
        <span className='text-[12px] sm:text-[8px] md:text-[12px] font-semibold w-2/3'>{productData?.name}</span>
        <span className='text-[16px] sm:text-[8px] md:text-[14px] font-semibold'>{productData?.cost}$</span>
      </div>
      <div className='sm:flex'>
        <span className='text-[10px] sm:text-[6px] md:text-[10px] font-semibold text-gray-600'>{productData?.material}</span>
      </div>
      <div className='flex'>
      <Star productData={productData} fixStar={fixStar} starClass={starClass}/>
      </div>
    </div>
      

      
  )
}

export default ProducsExplain