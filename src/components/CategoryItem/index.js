import './index.css'

const CategoryItem = props => {
  const {itemData, categorId, setId} = props
  const {categoryId, categoryName} = itemData
  const onChangeCategory = () => {
    setId(categoryId)
  }
  const value = categoryId === categorId ? 'name-color1' : 'name-color2'
  console.log(value)

  return (
    <li className="list-item2" onClick={onChangeCategory}>
      <button type="button" className="button1">
        <h4 className={`${value}`}>{categoryName}</h4>
      </button>
    </li>
  )
}
export default CategoryItem
