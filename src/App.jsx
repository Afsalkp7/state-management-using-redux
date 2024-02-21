import './App.css'
import CartComponent from './components/CartComponent'
import ButtonToCart from './components/ButtonToCart'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
function App() {

  return (
    <>
    <Provider store={appStore}>
     <CartComponent />
     <ButtonToCart />
     </ Provider>
    </>
  )
}

export default App
