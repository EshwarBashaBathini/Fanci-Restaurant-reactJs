import Cookies from 'js-cookie'
import {useNavigate, Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import './index.css'

const Head = props => {
  const {list, details, isLoader} = props
  const navigation = useNavigate()
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigation('/login')
  }

  const getCartItemsCounter = () =>
    list.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className="nav-container">
      <h1 className="h1">
        <Link to="/">{details.restaurantName}</Link>
      </h1>
      <div className="div">
        {!isLoader && <p className="myorder">My Orders</p>}
        <div className="div-container">
          <Link to="/cart">
            <FiShoppingCart color="#6e6565" size={40} />
            <div className="div-container2">
              <p className="p">{getCartItemsCounter()}</p>
            </div>
          </Link>
        </div>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Head
