import React from 'react'
import PrimaryLayout from '../components/PrimaryLayout'
import Body from '../components/origincomponent/Body'
import { useState , createContext } from 'react';


export const  DataText = createContext({addListId: [],setCount:()=>{}, setAddListId:()=>{},fixStar: true , setFixStar:()=>{},productData: {} , setProductData:()=>{}, list: [] , setList:()=>{},inputValue: 0 , setInputValue:()=>{}, count: 0 , increaseCount:()=>{} ,decreaseCount:()=>{},sizeList:[],setSizeList:()=>{},totalCounterCost:0,setTotalCounterCost:()=>{},color:-1,setColor:()=>{},addList:[],setAddList:()=>{},modalId:"", setModalId:()=>{}});

const Home = () => {
  const [count, setCount] = useState(0)
  const [productData,setProductData]=useState({})
  const [sizeList,setSizeList]=useState(['S','M','L','XL','XXL'])//for set content size in db
  const [color, setColor] = useState(-1)//for set index of Size component for set index size and set to db,onclick to cancel button modal
  const [totalCounterCost, setTotalCounterCost] = useState(0)
  const [addList,setAddList]=useState([])
  const[list,setList]=useState([])
  const [addListId,setAddListId]=useState([])
  const [modalId, setModalId] = useState("")
  const [inputValue, setInputValue] = useState(0)
  const [fixStar, setFixStar] = useState(false)
 

 
  
  const increaseCount =()=>{
    setCount(count+1)
  }

  const decreaseCount =()=>{
    setCount(count-1)
  }

  
  return (
    <>
    <DataText.Provider value={{addListId,setAddListId,fixStar, setFixStar,productData,setProductData,inputValue,setInputValue,list,setList,count,setCount,increaseCount,decreaseCount,sizeList,setSizeList,totalCounterCost,setTotalCounterCost,color,setColor,addList,setAddList,modalId, setModalId}}>
       <PrimaryLayout>
          <Body/>
       </PrimaryLayout>
    </DataText.Provider>
   
      
    </>
  )
}

export default Home