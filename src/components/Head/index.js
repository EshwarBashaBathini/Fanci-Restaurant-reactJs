import {
  NavContainer,
  H1,
  Div,
  DivContainer,
  DivContainer2,
  MyOrder,
  P,
} from './styledComponent'
import {FiShoppingCart} from 'react-icons/fi'

const Head = props => {
  const {list} = props

  const getCartItemsCounter = () => {
    let len = list.reduce((acc, item) => acc + item.quantity, 0)
    return len
  }
  return (
    <NavContainer>
      <H1>UNI Resto Cafe</H1>
      <Div>
        <MyOrder>My Order</MyOrder>
        <DivContainer>
          <FiShoppingCart color="#6e6565" size={40} />
          <DivContainer2>
            <P>{getCartItemsCounter()}</P>
          </DivContainer2>
        </DivContainer>
      </Div>
    </NavContainer>
  )
}

export default Head
