import './index.css'

function FoodItem(props) {
  const {itemData, decrement, cartList, increment} = props
  const {
    dishId,
    dishAvailability,
    dishCalories,
    dishType,
    dishDescription,
    dishImage,
    dishName,
    dishPrice,
    dishCurrency,
  } = itemData
  const onDecrement = () => {
    decrement(itemData)
  }
  const onIncrement = () => {
    increment(itemData)
  }
  const getQuantity = () => {
    const cartitem = cartList.find(item => item.dishId === dishId)
    return cartitem ? cartitem.quantity : 0
  }
  return (
    <li className="list-item">
      <div className="div1">
        <h1 className="h11">{dishName}</h1>
        <p className="p1">{`${dishCurrency} ${dishPrice}`}</p>
        <p className="pdescr">{dishDescription}</p>
        {dishAvailability ? (
          <div className="button-container">
            <button type="button" disabled={getQuantity() === 0 } className="button" onClick={onDecrement}>
              -
            </button>
            <span>{getQuantity()}</span>
            <button type="button" className="button" onClick={onIncrement}>
              +
            </button>
          </div>
        ) : (
          <p className="not-available">Not Available</p>
        )}
        {dishType > 1 && (
          <p className="custimation">Customizations available</p>
        )}
      </div>
      <p className="calories">{dishCalories} calories</p>
      <img className="img" src={dishImage} alt={dishName} />
    </li>
  )
}

export default FoodItem
