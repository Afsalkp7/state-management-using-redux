import React from 'react'

const AddCartButton = ({setCount}) => {
  return (
    <>
    <div>
      <button className='addToBtn' onClick={()=>{
        setCount(1)
      }}>add to cart</button>
    </div>
    </>
  )
}

export default AddCartButton