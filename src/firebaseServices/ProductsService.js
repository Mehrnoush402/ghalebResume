
// import React, { useContext, useEffect, useMemo, useState } from 'react'
// import { db } from '../config/firebase' // for set data list of firestore/firebase
// import { getDocs,collection,updateDoc } from 'firebase/firestore' // for set data list of firestore/firebase
// import { DataText } from '../views/Home'
// const[list,setList]=useState([]) // for set data list of firestore/firebase
// const{counter,sizeList}=useContext(DataText)
//  export const reciveData = async()=>{

//     const webAppDataCollectionRef =collection(db,"webappdata")
//         try {
//          const respons=await getDocs(webAppDataCollectionRef)
//          const filteredData=respons.docs.map((doc)=>({
//              ...doc.data(),
//              id:doc.id
            
             
             
//          }))
//          setList(filteredData)
         
//         } catch (error) {
//             console.log("error: ",error);
//         }

       
     
//      const cacheList=useMemo(() => list, [list])//cache list in db
//      return cacheList

// }
// export const update = async(id,sizeIndex) =>{
 
//   const newCounter= doc(db,"webappdata",id)
//  await updateDoc(newCounter,{counterProduct:counter,size:sizeList[sizeIndex]})

// ;
 
// }


