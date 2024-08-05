import {useRef, useState} from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

function App() {
  const products = useRef([
      {id:1,name:'iphone',price:5600},
      {id:2,name:'xiaomi',price:5000},
      {id:3,name:'huawei',price:5100},
      {id:4,name:'oppo',price:5200}
  ])
  const [cart, setCart] = useState([])

  const addOrRemoveCart = (product) => {
      let newCart = []
      const cartIndex = cart.findIndex((item) => item === product);
      if(cartIndex >= 0){
          newCart = cart.filter(item => item!== product)
      }else{
          newCart = [...cart,product]
      }
      setCart(newCart)

  }
  return (
    <>
      <ProductList products={products.current} cart={cart} addOrRemoveCart={addOrRemoveCart}></ProductList>
      <Cart cart={cart}></Cart>
    </>
  )
}

export default App
