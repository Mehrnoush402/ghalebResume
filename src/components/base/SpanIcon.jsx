import React from 'react'

const SpanIcon = ({children,content,costOrCount,parentClass,spanClass,handleOnClick,userStyle,onmouse,outmouse}) => {
  return (
    <div className={`flex items-center ${parentClass}`} onClick={handleOnClick}>
        {children}
        <span className={`${spanClass}`}>{costOrCount}</span><span className= {`sm:hidden ${userStyle}`}>{content}</span>
    </div>
  )
}

export default SpanIcon