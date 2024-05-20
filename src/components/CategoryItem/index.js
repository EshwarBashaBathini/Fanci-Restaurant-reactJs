import {ListItem, P} from './styledComponent'

const CategoryItem = props => {
  const {itemData, isActive, setId} = props

  const onChangeCategory = () => {
    setId(itemData)
  }

  return (
    <ListItem isActive={isActive} onClick={onChangeCategory}>
      <P isActive={isActive}>{itemData}</P>
    </ListItem>
  )
}

export default CategoryItem
