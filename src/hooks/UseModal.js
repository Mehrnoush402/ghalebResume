import React, { useState } from 'react'


const UseModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
   
    setOpen(!open)
  }
  return [open,handleOpen]
}

export default UseModal