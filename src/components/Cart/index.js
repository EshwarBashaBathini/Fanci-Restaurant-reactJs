import Head from '../Head'
import CartList from '../CartList'
import CartContext from '../../context/CartContext'
import EmptyCart from '../EmptyCart'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmpty = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }
      const details = {
        restaurantName: 'UNI Resto Cafe',
      }
      return (
        <>
          <Head list={cartList} details={details} />
          <div className="cart-container">
            {showEmpty ? (
              <EmptyCart />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>

                <CartList />

                {/* TODO: Add your code for Cart Summary here */}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
