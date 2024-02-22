import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartCount:0
    },
    reducers:{
        addToCart:(state)=>{
            state.cartCount = state.cartCount+1
        },
        removeCart : (state) =>{
            state.cartCount = state.cartCount-1
        },
        clearCart : (state) => {
            state.cartCount = 0
        }
    }

})
export const {addToCart,removeCart,clearCart} = cartSlice.actions
export default cartSlice.reducer
