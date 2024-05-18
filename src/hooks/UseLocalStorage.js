 const UseLocalStorage=(key)=>{
    const setItem=(item,value)=>{
      localStorage.setItem(`${item}`,JSON.stringify(value))

    } 
    const getItem =()=>{
      try {

        const newValue=window.localStorage.getItem(`${key}`)
        return newValue ? JSON.parse(newValue):undefined
      } catch (error) {
        console.log("error: ",error);
      }
    }
    return{setItem,getItem}
}

export default UseLocalStorage
