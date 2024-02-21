// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import AddCartButton from './components/AddCartButton'
// import MinusButton from './components/MinusButton'
// import Classcomp from './components/Classcomp'
import CartComponent from './components/CartComponent'
import ButtonToCart from './components/ButtonToCart'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
function App() {

  return (
    <>
    <Provider store={appStore}>

     {/* {count==0?<AddCartButton setCount = {setCount}/>:<MinusButton />} */}
     <CartComponent />
     <ButtonToCart />
     </ Provider>
    </>
  )
}

export default App
