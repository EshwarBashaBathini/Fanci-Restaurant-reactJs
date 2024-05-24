import {FiShoppingCart} from 'react-icons/fi'
import './index.css'

const Head = props => {
  const {list, details, isLoader} = props

  const getCartItemsCounter = () =>
    list.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className="nav-container">
      <h1 className="h1">{details.restaurantName}</h1>
      <div className="div">
        {!isLoader && <p className="myorder">My Orders</p>}
        <div className="div-container">
          <FiShoppingCart color="#6e6565" size={40} />
          <div className="div-container2">
            <p className="p">{getCartItemsCounter()}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Head
