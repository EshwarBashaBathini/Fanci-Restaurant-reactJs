import {useState, useEffect} from 'react'
import './index.css'
import Head from '../Head'
import CategoryItem from '../CategoryItem'
import FoodItem from '../FoodItem'

function Home() {
  const [categoriesData, setCategoriesData] = useState([])
  const [categorId, setCategoryId] = useState('')
  const [cartList, setCartList] = useState([])
  const [restaurantList, setRestaurant] = useState([])
  const [isLoader, setLoader] = useState(true)

  const filterData = categoriesData.filter(
    item => item.categoryId === categorId,
  )
  console.log(cartList)

  const setIdChange = itemData => {
    setCategoryId(itemData)
  }

  const increment = itemData => {
    const alreadyExists = cartList.find(item => item.dishId === itemData.dishId)

    if (!alreadyExists) {
      const newDish = {...itemData, quantity: 1}
      setCartList(prevCartList => [...prevCartList, newDish])
    } else {
      setCartList(prevCartList =>
        prevCartList.map(item =>
          item.dishId === itemData.dishId
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      )
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true)
      const apiUrl =
        'https://run.mocky.io/v3/72562bef-1d10-4cf5-bd26-8b0c53460a8e'
      const response = await fetch(apiUrl)
      const data = await response.json()

      const restaurantData = {
        restaurantName: data[0].restaurant_name,
      }
      setRestaurant(restaurantData)

      const categories = data[0].table_menu_list.map(item => ({
        categoryId: item.menu_category_id,
        categoryName: item.menu_category,
        foodItems: item.category_dishes.map(dish => ({
          addonCat: dish.addonCat,
          dishAvailability: dish.dish_Availability,
          dishType: dish.dish_Type,
          dishCalories: dish.dish_calories,
          dishCurrency: dish.dish_currency,
          dishId: dish.dish_id,
          dishDescription: dish.dish_description,
          dishImage: dish.dish_image,
          dishName: dish.dish_name,
          dishPrice: dish.dish_price,
          quantity: 0,
        })),
      }))
      console.log(categories)
      setCategoriesData(categories)
      if (categories.length > 0) {
        setCategoryId(categories[0].categoryId)
      }
      setLoader(false)
    }

    fetchData()
  }, [])

  const decrement = itemData => {
    const alreadyExists = cartList.find(item => item.dishId === itemData.dishId)

    if (alreadyExists) {
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
  }

  return (
    <div>
      <Head list={cartList} isLoader={isLoader} details={restaurantList} />
      {isLoader ? null : (
        <div>
          <ul className="unorder">
            {categoriesData.map(item => (
              <CategoryItem
                itemData={item}
                categorId={categorId}
                key={item.categoryId}
                setId={setIdChange}
              />
            ))}
          </ul>
          <ul className="item-unorder">
            {filterData[0].foodItems.map(item => (
              <FoodItem
                key={item.dishId}
                cartList={cartList}
                increment={increment}
                decrement={decrement}
                itemData={item}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Home
