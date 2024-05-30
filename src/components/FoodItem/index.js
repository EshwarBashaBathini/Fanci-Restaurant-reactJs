import './index.css'
import CartContext from '../../context/CartContext'
const FoodItem = props => {
  return (
    <CartContext.Consumer>
      {value => {
        const {addCartItem} = value
        const {itemData, decrement, increment, addCartIt} = props
        const {
          dishId,
          dishAvailability,
          dishCalories,
          dishType,
          dishDescription,
          dishImage,
          dishName,
          quantity,
          dishPrice,
          dishCurrency,
        } = itemData
        const onDecrement = () => {
          decrement(dishId)
        }
        const onIncrement = () => {
          increment(dishId)
        }
        const onClickAddToCart = () => {
          addCartItem(itemData)
          addCartIt(itemData)
        }
        return (
          <li className="list-item">
            <div className="div1">
              <h1 className="h11">{dishName}</h1>
              <p className="p1">{`${dishCurrency} ${dishPrice}`}</p>
              <p className="pdescr">{dishDescription}</p>
              {dishAvailability ? (
                <div>
                  <div className="button-container">
                    <button
                      type="button"
                      disabled={quantity === 0}
                      className="button"
                      onClick={onDecrement}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                      type="button"
                      className="button"
                      onClick={onIncrement}
                    >
                      +
                    </button>
                  </div>
                  {quantity > 0 && (
                    <button
                      type="button"
                      className="button2 add-to-cart-btn"
                      onClick={onClickAddToCart}
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              ) : (
                <p className="not-available">Not available</p>
              )}
              {dishType > 1 && (
                <p className="custimation">Customizations available</p>
              )}
            </div>
            <p className="calories">{dishCalories} calories</p>
            <img className="img" src={dishImage} alt={dishName} />
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}
export default FoodItem
