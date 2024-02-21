import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart,removeCart,clearCart } from '../utils/cartSlice'
const ButtonToCart = () => {
    const dispatch = useDispatch()
    const addToCartItem = () => {
        dispatch(addToCart())
    }
    const removeCartItem = () => {
        dispatch(removeCart())
    }
    const clearCartItem = () => {
        dispatch(clearCart())
    }
  return (
    <>
    <button onClick={clearCartItem}>Clear cart</button>
    <button onClick={removeCartItem}>Remove form cart</button>
    <button onClick={addToCartItem}>ButtonToCart</button>
    </>
    
  )
}

export default ButtonToCart