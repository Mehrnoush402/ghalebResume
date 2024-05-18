// import React, { useContext, useEffect, useMemo, useState } from 'react'
// import { db } from '../config/firebase' // for set data list of firestore/firebase
// import { getDocs,collection,updateDoc } from 'firebase/firestore' // for set data list of firestore/firebase
// import { DataText } from '../views/Home'
// import UseLocalStorage from './UseLocalStorage'
  
// const UseFetch =()=>{
//     const[list,setList]=useState([]) // for set data list of firestore/firebase
//     const webAppDataCollectionRef =collection(db,"webappdata") // for set data list of firestore/firebase
//     let cacheList = list //shaloww copy of list
//     const{setItem}=UseLocalStorage()
//     // useEffect(() => {
//     //   const fetchData = async()=>{
//     //    try {
//     //     const respons=await getDocs(webAppDataCollectionRef)
//     //     const filteredData=respons.docs.map((doc)=>({
//     //         ...doc.data(),
//     //         id:doc.id
           
            
            
//     //     }))
//     //     setList(filteredData)
        
//     //    } catch (error) {
//     //        console.log("error: ",error);
//     //    }
//     //   }
//     //   fetchData()
     
      
//     // }, [])

//      useEffect(() => {
//       const fetchData = async()=>{
//        try {
//         const respons=await getDocs(webAppDataCollectionRef)
//         const filteredData=respons.docs.map((doc)=>({
//             ...doc.data(),
//             id:doc.id
           
            
            
//         }))
//         setList(filteredData)
        
//        } catch (error) {
//            console.log("error: ",error);
//        }
//       }
//       fetchData()
     
      
//     }, [])

//     // Report list to localStorage
//     useEffect(() => {
//         setItem(cacheList,cacheList)
//         // localStorage.setItem('cacheList', JSON.stringify(cacheList));
//     }, [cacheList]);


    


    
   
    
//     // const cacheList=useMemo(() => list, [list])//cache list in db
//     return[list,cacheList]
// }
// export default UseFetch;