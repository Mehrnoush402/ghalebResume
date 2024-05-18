import React from "react";
const OrderSummery=({totals})=>{
    return(
        <>
         <div className="flex flex-col items-start justify-center gap-y-4 ml-3">
            <div className="flex justify-start items-center">
                <p className="text-black text-lg font-semibold sm:text-sm">Order Summary</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className="text-black text-[12px] sm:text-[8px] font-semibold">Products added</p>
                <p className="text-gray-500 text-[10px] sm:text-[6px] font-semibold">{totals}</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className="text-black text-[12px] sm:text-[8px]font-semibold">GST</p>
                <p className="text-gray-500 text-[10px] sm:text-[6px] font-semibold">1.25%</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className="text-black text-[12px] sm:text-[8px] font-semibold">S-GST</p>
                <p className="text-gray-500 text-[10px] sm:text-[6px] font-semibold">1.25%</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className="text-black text-[12px] sm:text-[8px] font-semibold">Total Cat Value (in $)</p>
                <p className="text-gray-500 text-[10px] sm:text-[6px] font-semibold">799$</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className="text-black text-[12px] sm:text-[8px] font-semibold">Discount (in %)</p>
                <p className="text-gray-500 text-[10px] sm:text-[6px] font-semibold">7.5%</p>
            </div>
         </div>
        
        </>
    )
}
export default OrderSummery;