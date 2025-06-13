import React from 'react'

const Square = (props) => {
  return (




    <>
   
    <div>
        
        
        <div onClick={props.onClick}
        style={{border:"1px solid", height:"100px", width:"100px" 
            , alignItems:"center" ,textAlign:"center"
        }} className='square'> 
      <h5>{props.value}</h5>
    </div>
    </div>
    
    </>
  )
}

export default Square
