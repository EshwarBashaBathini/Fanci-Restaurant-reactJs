import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import CartContext from './context/CartContext'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const [cartList, setCartList] = useState([])

  const addCartItem = product => {
    const alreadyExists = cartList.find(item => item.dishId === product.dishId)

    if (!alreadyExists) {
      const newDish = [...cartList, product]
      console.log(newDish)
      setCartList(newDish)
    } else {
      setCartList(prevCartList =>
        prevCartList.map(item =>
          item.dishId === product.dishId
            ? {...item, quantity: product.quantity}
            : item,
        ),
      )
    }
  }

  const removeCartItem = id => {
    const filteredList = cartList.filter(item => item.dishId !== id)
    setCartList(filteredList)
  }

  const incrementCartItemQuantity = itemData => {
    setCartList(prevCartList =>
      prevCartList.map(item =>
        item.dishId === itemData.dishId
          ? {...item, quantity: item.quantity + 1}
          : item,
      ),
    )
  }

  const decrementCartItemQuantity = itemData => {
    setCartList(prevCartList =>
      prevCartList
        .map(item =>
          item.dishId === itemData.dishId
            ? {...item, quantity: item.quantity - 1}
            : item,
        )
        .filter(item => item.quantity > 0),
    )
  }

  const removeAllCartItems = () => {
    setCartList([])
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        removeAllCartItems,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={Home} />} />
        <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App
