import React from 'react'

const Image = ({src,width,height,imgclass}) => {
  return (
    <img src={src} width={width} height={height} className={`${imgclass}`}/>
  )
}

export default Image