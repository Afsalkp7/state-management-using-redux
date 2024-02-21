import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const CartComponent = () => {
    const cartCount = useSelector((store)=>store.cart.cartCount)
  return (
    <div>Cart {cartCount}</div>
  )
}

export default CartComponent