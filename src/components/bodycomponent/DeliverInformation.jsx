import React from "react";

const DeliverInformation=()=>{
    return(
        <>
          <div className="flex flex-col items-start justify-center p-3 gap-y-4">
            <div className="flex justify-between items-center w-full">
                <p className="text-black text-lg sm:text-sm font-semibold">Delivery Information</p>
                <button className="border rounded-xl px-5 border-orange-500 text-orange-500 flex justify-center items-center text-[10px] sm:text-[6px]">Edit</button>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className="text-gray-500 text-[12px] sm:text-[8px] font-semibold">Wade  John Smith</p>
                <p className="text-gray-500 text-[12px] sm:text-[6px] font-semibold">New Zealand - 2nd Cross</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <p className="text-gray-500 text-[12px] sm:text-[6px] font-semibold">Cross raod - Po 25698</p>
                <p className="text-gray-500 text-[12px] sm:text-[6px] font-semibold">United States</p>
            </div>
          </div>
        </>
    )
}
export default DeliverInformation;