import {useState, useEffect} from 'react'
import Head from '../Head'
import CategoryItem from '../CategoryItem'
import FoodItem from '../FoodItem'
import {Unorder, ItemUnorder} from './styledComponent'

const menu = {
  categories: [
    'Salads and Soup',
    'From The Barnyard',
    'From the Hen House',
    'Fresh From The Sea',
    'Biryani',
    'Fast Food',
  ],
  items: [
    {
      id: 1,
      name: 'Spinach Salad',
      price: 7.95,
      description:
        'Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette',
      calories: 15,
      customizations_available: true,
      category: 'Salads and Soup',
      availability: true,
      image_url:
        'https://www.wellplated.com/wp-content/uploads/2019/04/Spinach-Strawberry-Salad.jpg',
      quantity: 0, // New quantity property
    },
    {
      id: 2,
      name: 'Traditional New England Seafood Chowder',
      price: 12,
      description: 'with clams, scallops, and shrimp',
      calories: 30,
      customizations_available: false,
      category: 'Salads and Soup',
      availability: true,
      image_url:
        'https://sundaysuppermovement.com/wp-content/uploads/2020/01/seafood-chowder-hero.jpg',
      quantity: 0, // New quantity property
    },
    {
      id: 3,
      name: 'Salad Bar Soup',
      price: 5,
      description: 'Flour Mixed with fresh green leafy vegetables',
      calories: 30,
      customizations_available: false,
      category: 'Salads and Soup',
      availability: true,
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4J_CzFUpbh8CBwzwJ5-lMi76LTQoMbjlXDUYeRW0ZQ&s',
      quantity: 0, // New quantity property
    },
    {
      id: 4,
      name: 'Chicken Soup',
      price: 14.89,
      description: 'Fresh as home-made chicken-soup',
      calories: 30,
      customizations_available: false,
      category: 'Salads and Soup',
      availability: false,
      image_url:
        'https://media.istockphoto.com/id/1443345624/photo/top-view-of-homemade-rice-and-chicken-soup-in-a-bowl.jpg?s=612x612&w=0&k=20&c=iVdTXp5pIJo4Ibo0WgnTvxSCR58qyQxUAe8uv2G0COs=',
      quantity: 0, // New quantity property
    },
    {
      id: 5,
      name: 'One-Pot Vegetarian',
      price: 22,
      description: 'One-Pot-Vegetarian-Orzo-Vegetable-Soup',
      calories: 25,
      customizations_available: false,
      category: 'Salads and Soup',
      availability: false,
      image_url:
        'https://images.immediate.co.uk/production/volatile/sites/2/2023/12/ImmuneSupportOnePot-copy-cb1702f.jpg?quality=90&webp=true&resize=975,649',
      quantity: 0, // New quantity property
    },
    {
      id: 6,
      name: 'Low Carb Chicken Soup',
      price: 25,
      description:
        'Wholesomeyum low-carb-chicken-soup-with-spaghetti-squash-paleo-gluten-free',
      calories: 45,
      customizations_available: false,
      category: 'Salads and Soup',
      availability: false,
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wdJJoVLpFH79Si-M8Vs0iPVrf5i2N5OISgxPQ7y9Ng&s',
      quantity: 0, // New quantity property
    },
    {
      id: 7,
      name: 'Grilled Steak',
      price: 25.99,
      description:
        'Juicy grilled steak with a side of mashed potatoes and green beans',
      calories: 700,
      customizations_available: true,
      category: 'From The Barnyard',
      availability: true,
      image_url:
        'https://cheflolaskitchen.com/wp-content/uploads/2023/08/Grilled-Steak-6.jpg',
      quantity: 0, // New quantity property
    },
    {
      id: 8,
      name: 'BBQ Ribs',
      price: 19.99,
      description: 'Slow-cooked BBQ ribs with a side of coleslaw and fries',
      calories: 850,
      customizations_available: true,
      category: 'From The Barnyard',
      availability: true,
      image_url:
        'https://www.foodnetwork.com/content/dam/images/food/fullset/2015/7/21/3/FNM_090115-Best-Barbecue-Ribs-Ever-Recipe_s4x3.jpg',
      quantity: 0, // New quantity property
    },
    {
      id: 9,
      name: 'Roast Chicken',
      price: 18.99,
      description: 'Herb-roasted chicken with seasonal vegetables and gravy',
      calories: 600,
      customizations_available: false,
      category: 'From the Hen House',
      availability: true,
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMSX6Up86bmFOmFL5e51cprseli9JfgTZgFCdRh9ymg&s',
      quantity: 0, // New quantity property
    },
    {
      id: 10,
      name: 'Chicken Wings',
      price: 12.99,
      description: 'Spicy chicken wings served with celery and blue cheese dip',
      calories: 450,
      customizations_available: true,
      category: 'From the Hen House',
      availability: true,
      image_url:
        'https://spicecravings.com/wp-content/uploads/2020/12/Tandoori-Chicken-Wings-featured-1.jpg',
      quantity: 0, // New quantity property
    },
    {
      id: 11,
      name: 'Grilled Salmon',
      price: 22.99,
      description:
        'Grilled salmon fillet with lemon butter sauce and asparagus',
      calories: 500,
      customizations_available: true,
      category: 'Fresh From The Sea',
      availability: true,
      image_url:
        'https://static01.nyt.com/images/2023/06/02/multimedia/02GRILL-BASICSrex5-salmon-vjtl/07GRILL-BASICSrex5-salmon-vjtl-superJumbo.jpg',
      quantity: 0, // New quantity property
    },
    {
      id: 12,
      name: 'Shrimp Scampi',
      price: 20.99,
      description: 'Shrimp cooked in garlic butter sauce, served over linguine',
      calories: 650,
      customizations_available: false,
      category: 'Fresh From The Sea',
      availability: true,
      image_url:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.saltandlavender.com%2Fgarlic-butter-shrimp%2F&psig=AOvVaw3RzM_1OzPjI0Kdkj2kKbHo&ust=1716281311587000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCxjafsm4YDFQAAAAAdAAAAABAE',
      quantity: 0, // New quantity property
    },
    {
      id: 13,
      name: 'Chicken Biryani',
      price: 14.99,
      description: 'Aromatic basmati rice with spiced chicken pieces',
      calories: 550,
      customizations_available: true,
      category: 'Biryani',
      availability: true,
      image_url:
        'https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2020/10/PXL_20201011_200951855.PORTRAIT-01.jpeg?resize=800%2C840&ssl=1',
      quantity: 0, // New quantity property
    },
    {
      id: 14,
      name: 'Vegetable Biryani',
      price: 12.99,
      description:
        'Basmati rice cooked with a variety of vegetables and spices',
      calories: 500,
      customizations_available: true,
      category: 'Biryani',
      availability: true,
      image_url:
        'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg',
      quantity: 0, // New quantity property
    },
    {
      id: 15,
      name: 'Beef Burger',
      price: 10.99,
      description:
        'Juicy beef patty with lettuce, tomato, and cheese in a toasted bun',
      calories: 800,
      customizations_available: true,
      category: 'Fast Food',
      availability: true,
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVnWKyPlRr3dTuPK0nEaRgXfuBUpCJhcEsh-ydchtcg&s',
      quantity: 0, // New quantity property
    },
    {
      id: 16,
      name: 'Cheese Pizza',
      price: 8.99,
      description: 'Classic cheese pizza with tomato sauce and mozzarella',
      calories: 900,
      customizations_available: true,
      category: 'Fast Food',
      availability: true,
      image_url:
        'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
      quantity: 0, // New quantity property
    },
    {
      id: 17,
      name: 'Grilled Chicken Sandwich',
      price: 9.99,
      description:
        'Grilled chicken breast with lettuce, tomato, and mayo in a toasted bun',
      calories: 700,
      customizations_available: true,
      category: 'Fast Food',
      availability: true,
      image_url:
        'https://joyfoodsunshine.com/wp-content/uploads/2023/01/best-grilled-cheese-sandwich-recipe-2.jpg',
      quantity: 0, // New quantity property
    },
    {
      id: 18,
      name: 'Falafel Wrap',
      price: 7.99,
      description:
        'Falafel balls with lettuce, tomato, and tzatziki sauce in a wrap',
      calories: 600,
      customizations_available: true,
      category: 'Fast Food',
      availability: true,
      image_url:
        'https://img.taste.com.au/UJXGBjq0/taste/2016/11/falafel-and-hommus-wrap-63735-1.jpeg',
      quantity: 0, // New quantity property
    },
    {
      id: 19,
      name: 'Tandoori Chicken',
      price: 15.99,
      description: 'Marinated chicken cooked in a traditional tandoor oven',
      calories: 400,
      customizations_available: true,
      category: 'From the Hen House',
      availability: true,
      image_url:
        'https://onestophalal.com/cdn/shop/articles/air_fryer_chicken_tandoori-1694242200588_1200x.jpg?v=1694242335',
      quantity: 0, // New quantity property
    },
    {
      id: 20,
      name: 'Lamb Chops',
      price: 23.99,
      description: 'Grilled lamb chops with a side of mint sauce',
      calories: 800,
      customizations_available: true,
      category: 'From The Barnyard',
      availability: true,
      image_url:
        'https://www.homemadeinterest.com/wp-content/uploads/2022/08/Grilled-Lamb-Chops-in-a-Curry-Marinade_IG-1.jpg',
      quantity: 0, // New quantity property
    },
  ],
}

function Home() {
  const [categoriesData, setCategoryData] = useState(menu.categories)
  const [itemsData, setItemsData] = useState(menu.items)
  const [categoryId, setCategoryId] = useState(categoriesData[0])
  const [cartList, setcartList] = useState([])

  const filterData = itemsData.filter(item => item.category === categoryId)

  const setIdChange = itemData => {
    setCategoryId(itemData)
  }

  const increment = itemData => {
    const alreadyExit = cartList.find(item => item.id === itemData.id)
    if (!alreadyExit) {
      const newDish = {...itemData, quantity: 1}
      setcartList(prevcartList => [...prevcartList, newDish])
    } else {
      setcartList(prevcartList =>
        prevcartList.map(item =>
          item.id === itemData.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      )
    }
  }

  const decrement = itemData => {
    const alreadyExit = cartList.find(item => item.id === itemData.id)
    if (!alreadyExit) {
      setcartList(prevcartList =>
        prevcartList
          .map(item =>
            item.id === itemData.id
              ? {...item, quantity: item.quantity - 1}
              : item,
          )
          .filter(item => item.quantity > 0),
      )
    }
  }

  return (
    <div>
      <Head list={cartList} />
      <Unorder>
        {categoriesData.map(item => (
          <CategoryItem
            itemData={item}
            isActive={categoryId === item}
            key={item}
            setId={setIdChange}
          />
        ))}
      </Unorder>
      <ItemUnorder>
        {filterData.map(item => (
          <FoodItem
            key={item.id}
            cartList={cartList}
            increment={increment}
            decrement={decrement}
            itemData={item}
          />
        ))}
      </ItemUnorder>
    </div>
  )
}

export default Home
