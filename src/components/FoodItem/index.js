import {
  ListItem,
  H1,
  P,
  Pdescr,
  ButtonsContainer,
  Button,
  NotAvaiable,
  Customization,
  Calories,
  Div,
  Img,
} from './styledComponent'

function FoodItem(props) {
  const {itemData, decrement, cartList, increment} = props
  const {
    id,
    availability,
    calories,
    customizations_available,
    description,
    image_url,
    quantity,
    name,
    price,
  } = itemData

  const onDecrement = () => {
    decrement(itemData)
  }
  const onIncrement = () => {
    increment(itemData)
  }
  const getQuantity = () => {
    const cartitem = cartList.find(item => item.id === id)
    return cartitem ? cartitem.quantity : 0
  }
  return (
    <ListItem>
      <Div>
        <H1>{name}</H1>
        <P>SAR {price}</P>
        <Pdescr>{description}</Pdescr>
        {availability ? (
          <ButtonsContainer>
            <Button onClick={onDecrement}>-</Button>
            <span>{getQuantity()}</span>
            <Button onClick={onIncrement}>+</Button>
          </ButtonsContainer>
        ) : (
          <NotAvaiable>Not Available</NotAvaiable>
        )}
        {customizations_available && (
          <Customization>Customizations available</Customization>
        )}
      </Div>
      <Calories>{calories} Calories</Calories>
      <Img src={image_url} alt={name} />
    </ListItem>
  )
}

export default FoodItem
