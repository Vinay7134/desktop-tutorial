import { useState } from 'react'
import './App.css'

const menuItems = [
  {
    id: 'sesame-bowl',
    restaurant: 'Little Sesame',
    dish: 'Crispy chicken grain bowl',
    detail: 'Herb rice, pickled cucumber, green tahini',
    category: 'Bowls',
    rating: 4.9,
    time: '20-30 min',
    price: 289,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85',
    tag: 'Neighborhood favorite',
  },
  {
    id: 'margot-pizza',
    restaurant: "Margot's Pizza",
    dish: 'Hot honey margherita',
    detail: 'Sourdough crust, basil, local hot honey',
    category: 'Pizza',
    rating: 4.8,
    time: '25-35 min',
    price: 349,
    image:
      'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85',
    tag: 'Bestseller',
  },
  {
    id: 'golden-burger',
    restaurant: 'Golden Diner',
    dish: 'The crispy chicken sandwich',
    detail: 'Shredded lettuce, dill pickle, house sauce',
    category: 'Burgers',
    rating: 4.7,
    time: '15-25 min',
    price: 259,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
    tag: 'Fast delivery',
  },
  {
    id: 'green-table',
    restaurant: 'The Green Table',
    dish: 'Roasted market vegetable plate',
    detail: 'Whipped feta, toasted seeds, lemon oil',
    category: 'Plant-based',
    rating: 4.9,
    time: '20-30 min',
    price: 239,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',
    tag: 'Fresh today',
  },
  {
    id: 'sora-sushi',
    restaurant: 'Sora Sushi',
    dish: 'Salmon avocado roll set',
    detail: 'Eight pieces, ginger, house ponzu',
    category: 'Sushi',
    rating: 4.8,
    time: '25-35 min',
    price: 329,
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=85',
    tag: 'Staff pick',
  },
  {
    id: 'rice-and-shine',
    restaurant: 'Rice & Shine',
    dish: 'Chili crunch salmon bowl',
    detail: 'Jasmine rice, avocado, ginger greens',
    category: 'Bowls',
    rating: 4.6,
    time: '20-30 min',
    price: 269,
    image:
      'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1000&q=85',
    tag: 'Under ₹300',
  },
]

const localRestaurants = [
  { name: 'Cake Factory', rating: 4.1, cuisines: 'Desserts, Sweets, Beverages', locality: 'Yellandu X Road' },
  { name: 'Udupi Ahaar', rating: 4.2, cuisines: 'South Indian', locality: 'Lenin Nagar' },
  { name: 'Burger King', rating: 4.2, cuisines: 'Burgers, American', locality: 'Mamata Hospital Road, Kaviraj Nagar' },
  { name: 'Pizza Hut', rating: 4.4, cuisines: 'Pizzas', locality: 'Khammam' },
  { name: 'WarmOven Cake & Desserts', rating: 3.9, cuisines: 'Bakery, Desserts, Ice Cream, Beverages, Cakes', locality: 'Lenin Nagar' },
  { name: 'Havmor Ice Cream', rating: 4.4, cuisines: 'Ice Cream, Cakes, Desserts, Beverages', locality: 'Lenin Nagar' },
  { name: 'Ibaco', rating: 4.6, cuisines: 'Ice Cream', locality: 'Lenin Nagar' },
  { name: 'Baskin Robbins - Ice Cream Desserts', rating: 4.3, cuisines: 'Desserts, Ice Cream', locality: 'Lenin Nagar' },
  { name: 'Annapurna Hotel', rating: 3.9, cuisines: 'South Indian', locality: 'Gattaiah Center' },
  { name: 'The Dessert Zone', rating: 3.7, cuisines: 'Bakery, Desserts, Ice Cream, Beverages, Cakes', locality: 'Lenin Nagar' },
  { name: 'Udupi Grand', rating: 3.5, cuisines: 'South Indian', locality: 'Lenin Nagar' },
  { name: "Domino's Pizza", rating: 4.2, cuisines: 'Pizzas, Italian, Pastas, Desserts', locality: 'Lenin Nagar' },
  { name: 'KFC', rating: 4.1, cuisines: 'Burgers, Fast Food, Rolls & Wraps', locality: 'Khammam' },
  { name: 'Kaati Zone Rolls & Wraps', rating: 3.4, cuisines: 'Fast Food, Bengali, Beverages, Desserts, Rolls', locality: 'Lenin Nagar' },
  { name: 'Indiana Burgers', rating: 3.1, cuisines: 'Burgers, American, Fast Food, Beverages, Desserts', locality: 'Lenin Nagar' },
  { name: "Mom's Kitchen", rating: null, cuisines: 'Biryani', locality: 'Lenin Nagar' },
  { name: 'Pista House', rating: 4, cuisines: 'Chinese, Biryani, Kebabs, Fast Food, North Indian, Indian', locality: 'Lenin Nagar' },
  { name: "Kwality Wall's Ice Cream And More", rating: 4.5, cuisines: 'Desserts, Ice Cream, Ice Cream Cakes', locality: 'Lenin Nagar' },
  { name: 'Cream Stone Ice Cream', rating: 4.4, cuisines: 'Ice Cream', locality: 'Lenin Nagar' },
  { name: 'Rice Express By Shero', rating: 3.9, cuisines: 'Home Food, North Indian, South Indian, Healthy, Desserts, Snacks, Thali', locality: 'Lenin Nagar' },
  { name: 'Chowdary Annapurna Hotel', rating: 4.1, cuisines: 'South Indian, Telangana', locality: 'Lenin Nagar' },
  { name: 'Hotel Ayyappa', rating: 4, cuisines: 'South Indian', locality: 'Lenin Nagar' },
  { name: '7th Heaven', rating: 4.1, cuisines: 'Bakery, Desserts, Cakes & Pastries', locality: 'Lenin Nagar' },
  { name: 'Miya Bhai Food Court', rating: 3.6, cuisines: 'Biryani', locality: 'Lenin Nagar' },
  { name: 'Amma Mess & Caterers', rating: 4.4, cuisines: 'South Indian', locality: 'NTR Circle' },
  { name: 'Sree Raghavendra Food Court', rating: 3.6, cuisines: 'Chaat, Ice Cream, Juices, Fast Food, Cafe', locality: 'Lenin Nagar' },
  { name: 'Millets Tiffins', rating: 3.9, cuisines: 'South Indian', locality: 'Lenin Nagar' },
  { name: 'Hotel Sravanthi Tiffins and Meals', rating: 3.9, cuisines: 'South Indian, Thalis', locality: 'Lenin Nagar' },
  { name: 'Burger It Up', rating: 4.2, cuisines: 'Burgers, Beverages, Desserts, American, Cafe', locality: 'Lenin Nagar' },
  { name: 'Hotel Sitara Grand', rating: 3.7, cuisines: 'South Indian', locality: 'Lenin Nagar' },
  { name: 'Polas', rating: 4.3, cuisines: 'Bakery, Juices, Ice Cream', locality: 'Z.P. Center' },
  { name: 'Brewbakes', rating: 3.8, cuisines: 'Desserts, Sweets, Beverages', locality: 'Lenin Nagar' },
  { name: 'Fit Fuel', rating: 3.9, cuisines: 'Salads, Healthy Food', locality: 'Netaji Nagar' },
  { name: 'Hotel Suprabhath', rating: 3.6, cuisines: 'South Indian', locality: 'Lenin Nagar' },
  { name: 'Hotel Konark', rating: 3.9, cuisines: 'Biryani, Chinese', locality: 'Lenin Nagar' },
  { name: 'Balaji Food Court', rating: null, cuisines: 'Chinese', locality: 'Lenin Nagar' },
  { name: 'Biryani House', rating: 3.8, cuisines: 'Biryani', locality: 'Lenin Nagar' },
  { name: 'Gourmet Ice Cream Cakes by Baskin Robbins', rating: 5, cuisines: 'Desserts, Ice Cream, Bakery', locality: 'Khanapuram' },
  { name: 'Winni Cakes & More', rating: 3.5, cuisines: 'Desserts, Sweets, Beverages', locality: 'Lenin Nagar' },
  { name: 'Momo Zone - The Momo Company', rating: 3.6, cuisines: 'Chinese, Tibetan, Fast Food, Momos', locality: 'Lenin Nagar' },
  { name: 'Sundae Everyday Ice Creams', rating: 3.7, cuisines: 'Beverages, Ice Cream, Desserts', locality: 'Lenin Nagar' },
  { name: 'Seoul Fried Chicken', rating: 3.5, cuisines: 'American, Fast Food, Snacks, Korean, Burgers, Beverages', locality: 'Lenin Nagar' },
  { name: 'Kouzina Kafe - The Food Court', rating: 3.6, cuisines: 'Bakery, Desserts, Ice Cream, Beverages, Cakes, Cafe', locality: 'Lenin Nagar' },
  { name: 'Cupcake Bliss Cake & Desserts', rating: 3.6, cuisines: 'Bakery, Desserts, Ice Cream, Beverages, Cakes', locality: 'Lenin Nagar' },
  { name: 'Delight Cafe', rating: 4.2, cuisines: 'Biryani', locality: 'Lenin Nagar' },
  { name: 'Rajasthan Bhojnalaya', rating: 4.2, cuisines: 'Chinese, Continental, South Indian, Rajasthani, Indian, Salads, Pizzas', locality: 'Lenin Nagar' },
  { name: 'Iceberg Organic Icecreams', rating: 4.5, cuisines: 'Ice Cream', locality: 'Lenin Nagar' },
  { name: 'Royal Biryani', rating: 2.8, cuisines: 'Chinese', locality: 'Khammam Haveli' },
  { name: 'Rest Inn', rating: 4.2, cuisines: 'Biryani, Chinese, Mughlai, Beverages', locality: 'NTR Circle' },
  { name: 'Ten To Ten PLAY', rating: 3, cuisines: 'Chinese, Hyderabadi, Bakery, Indian, Beverages, Sweets', locality: 'Lenin Nagar' },
  { name: 'Bhavani Mess', rating: 4.3, cuisines: 'South Indian', locality: 'Nehru Nagar' },
  { name: 'Taj Bakery', rating: 4.3, cuisines: 'Bakery, Desserts, Beverages', locality: 'Lenin Nagar' },
  { name: 'Brewberrys Coffee', rating: 4.2, cuisines: 'Beverages, Continental', locality: 'Mamatha Road' },
  { name: 'Buddha Fast Food Centre', rating: 3.9, cuisines: 'Chinese', locality: 'Lenin Nagar' },
  { name: 'Organic Fruit Box', rating: 3.8, cuisines: 'Snacks, Healthy Food', locality: 'Lenin Nagar' },
  { name: 'GK Pure Ghee Sweets and Bakery', rating: 4.2, cuisines: 'Sweets, Snacks, Home Food, South Indian, Indian', locality: 'Lenin Nagar' },
  { name: 'The Granios', rating: 4.2, cuisines: 'Pizzas, Beverages, Italian, Continental', locality: 'Z.P. Center' },
  { name: 'Sri Balaji Family Restaurant', rating: 3.9, cuisines: 'South Indian, Indian, North Indian, Punjabi', locality: 'Lenin Nagar' },
  { name: 'Cakes Granios', rating: 4.2, cuisines: 'Bakery, Desserts, Ice Cream, Beverages', locality: 'Lenin Nagar' },
  { name: 'Sri Tirumala Home Foods', rating: 4.3, cuisines: 'Bakery, Sweets', locality: 'Lenin Nagar' },
  { name: 'Milk Shake Factory', rating: 4.1, cuisines: 'Beverages, Continental', locality: 'Mamatha Road' },
  { name: 'Hotel Satya Vaibhav Inn', rating: 3.9, cuisines: 'Biryani, Chinese, Tandoor', locality: 'Lenin Nagar' },
  { name: 'Sri Varalakshmi Home Foods', rating: 4.2, cuisines: 'Snacks, Home Food, Healthy Food, Cafe, Pickles, South Indian, Andhra', locality: 'Lenin Nagar' },
]

const restaurantPhotoThemes = [
  {
    keywords: ['ice cream'],
    photos: ['photo-1501446529957-6226bd447c46', 'photo-1560008581-09826d1de69e', 'photo-1563805042-7684c019e1cb'],
  },
  {
    keywords: ['dessert', 'cake', 'bakery', 'sweets', 'pastries'],
    photos: ['photo-1578985545062-69928b1d9587', 'photo-1486427944299-d1955d23e34d', 'photo-1551024506-0bccd828d307'],
  },
  {
    keywords: ['pizza', 'pizzas'],
    photos: ['photo-1513104890138-7c749659a591', 'photo-1579751626657-72bc17010498'],
  },
  {
    keywords: ['burger', 'fast food', 'rolls', 'wraps'],
    photos: ['photo-1568901346375-23c9450c58cd', 'photo-1606755962773-d324e0a13086', 'photo-1626082927389-6cd097cdc6ec'],
  },
  {
    keywords: ['south indian', 'telangana', 'andhra', 'thali', 'biryani', 'north indian', 'indian', 'tandoor', 'kebab'],
    photos: ['photo-1585937421612-70a008356fbe', 'photo-1546833999-b9f581a1996d', 'photo-1516684732162-798a0062be99'],
  },
  {
    keywords: ['chinese', 'tibetan', 'momo'],
    photos: ['photo-1563245372-f21724e3856d', 'photo-1585032226651-759b368d7246'],
  },
  {
    keywords: ['beverages', 'coffee', 'cafe', 'juices'],
    photos: ['photo-1442512595331-e89e73853f31', 'photo-1505252585461-04db1eb84625'],
  },
  {
    keywords: ['healthy', 'salad', 'fruit'],
    photos: ['photo-1512621776951-a57141f2eefd', 'photo-1546069901-ba9599a7e63c'],
  },
]

function restaurantPhoto(restaurant) {
  const cuisines = restaurant.cuisines.toLowerCase()
  const theme = restaurantPhotoThemes.find(({ keywords }) =>
    keywords.some((keyword) => cuisines.includes(keyword)),
  )
  const photoIndex = [...restaurant.name].reduce((total, character) => total + character.charCodeAt(0), 0)
  const photoId = theme?.photos[photoIndex % theme.photos.length] || 'photo-1546069901-ba9599a7e63c'
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=480&q=80`
}

const categories = ['Everything', 'Bowls', 'Pizza', 'Burgers', 'Plant-based', 'Sushi']
const locations = ['Khammam, Telangana', 'Warangal, Telangana', 'Hyderabad, Telangana', 'Vijayawada, Andhra Pradesh']
const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

function formatPrice(amount) {
  return currencyFormatter.format(amount)
}

function App() {
  const [query, setQuery] = useState('')
  const [restaurantCuisine, setRestaurantCuisine] = useState('Everything')
  const [category, setCategory] = useState('Everything')
  const [sortMode, setSortMode] = useState('For you')
  const [location, setLocation] = useState(locations[0])
  const [locationOpen, setLocationOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [cart, setCart] = useState({})

  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  const cartItems = menuItems.filter((item) => cart[item.id])
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * cart[item.id],
    0,
  )
  const deliveryFee = cartCount > 0 ? 29 : 0
  const total = subtotal + deliveryFee
  const restaurantCuisines = ['Everything', 'South Indian', 'Biryani', 'Desserts', 'Ice Cream', 'Burgers', 'Bakery', 'Pizza']
  const visibleRestaurants = localRestaurants.filter((restaurant) => {
    const matchesCuisine = restaurantCuisine === 'Everything'
      || restaurant.cuisines.toLowerCase().includes(restaurantCuisine.toLowerCase())
    const searchText = `${restaurant.name} ${restaurant.cuisines} ${restaurant.locality}`.toLowerCase()
    return matchesCuisine && searchText.includes(query.trim().toLowerCase())
  })

  let visibleItems = menuItems.filter((item) => {
    const matchesCategory = category === 'Everything' || item.category === category
    const searchText = `${item.restaurant} ${item.dish} ${item.detail} ${item.category}`.toLowerCase()
    return matchesCategory && searchText.includes(query.trim().toLowerCase())
  })

  if (sortMode === 'Top rated') {
    visibleItems = [...visibleItems].sort((first, second) => second.rating - first.rating)
  } else if (sortMode === 'Under ₹300') {
    visibleItems = visibleItems.filter((item) => item.price < 300)
  }

  function updateQuantity(itemId, change) {
    setOrderPlaced(false)
    setCart((currentCart) => {
      const nextQuantity = (currentCart[itemId] || 0) + change
      if (nextQuantity <= 0) {
        const remainingItems = { ...currentCart }
        delete remainingItems[itemId]
        return remainingItems
      }
      return { ...currentCart, [itemId]: nextQuantity }
    })
  }

  function addToCart(itemId) {
    updateQuantity(itemId, 1)
  }

  function placeOrder() {
    if (cartCount === 0) return
    setCart({})
    setOrderPlaced(true)
    setCartOpen(true)
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Supper Club home">
          <span className="brand-mark" aria-hidden="true">s</span>
          <span className="brand-copy">
            <strong>supper club</strong>
            <small>GOOD FOOD, CLOSE BY</small>
          </span>
        </a>

        <div className="header-actions">
          <div className="location-wrap">
            <button
              className="location-button"
              type="button"
              aria-expanded={locationOpen}
              onClick={() => setLocationOpen((isOpen) => !isOpen)}
            >
              <span className="location-pin" aria-hidden="true">+</span>
              <span className="location-copy">
                <small>DELIVERING TO</small>
                <strong>{location}</strong>
              </span>
              <span className="chevron" aria-hidden="true">⌄</span>
            </button>
            {locationOpen && (
              <div className="location-menu" role="menu">
                {locations.map((place) => (
                  <button
                    className={place === location ? 'selected' : ''}
                    key={place}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setLocation(place)
                      setLocationOpen(false)
                    }}
                  >
                    {place}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="bag-button"
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label={`Open bag, ${cartCount} items`}
          >
            <span>Your bag</span>
            <span className="bag-count">{cartCount}</span>
          </button>
        </div>
      </header>

      <main id="home">
        <section className="welcome-row" aria-labelledby="page-title">
          <div>
            <p className="eyebrow"><span className="live-dot" /> GOOD EVENING, {location.split(',')[0].toUpperCase()}</p>
            <h1 id="page-title">What sounds good?</h1>
            <p className="welcome-note">A few neighborhood favorites, right to your door.</p>
          </div>
          <div className="delivery-note">
            <span className="delivery-note-mark" aria-hidden="true">25</span>
            <span><strong>Quick delivery</strong><small>Most orders under 35 min</small></span>
          </div>
        </section>

        <section className="feature-banner" aria-label="Featured restaurant">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1800&q=90"
            alt="Freshly baked pizza topped with basil"
          />
          <div className="feature-shade" />
          <div className="feature-content">
            <span className="feature-kicker">TONIGHT'S NEIGHBORHOOD PICK</span>
            <h2>One good pizza<br />can fix a lot.</h2>
            <p>Margot's sourdough, made slow and delivered warm.</p>
            <button className="feature-button" type="button" onClick={() => addToCart('margot-pizza')}>
              Add the hot honey margherita <span>{formatPrice(349)}</span>
            </button>
          </div>
          <div className="feature-stamp" aria-hidden="true"><span>LOCAL<br />LOVE</span></div>
        </section>

        <section className="local-restaurants" aria-labelledby="local-restaurants-title">
          <div className="local-restaurants-heading">
            <div>
              <p className="eyebrow">KHAMMAM, TELANGANA</p>
              <h2 id="local-restaurants-title">Neighborhood restaurants</h2>
            </div>
            <span className="restaurant-count">{visibleRestaurants.length} restaurants</span>
          </div>
          <div className="local-restaurant-tools">
            <label className="search-box">
              <span className="search-symbol" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search restaurants, cuisines, areas..."
                aria-label="Search Khammam restaurants"
              />
              {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search">×</button>}
            </label>
            <div className="local-cuisine-filters" aria-label="Filter restaurants by cuisine">
              {restaurantCuisines.map((cuisine) => (
                <button
                  className={restaurantCuisine === cuisine ? 'active' : ''}
                  key={cuisine}
                  type="button"
                  aria-pressed={restaurantCuisine === cuisine}
                  onClick={() => setRestaurantCuisine(cuisine)}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          {visibleRestaurants.length > 0 ? (
            <div className="local-restaurant-grid">
              {visibleRestaurants.map((restaurant) => (
                <article className="local-restaurant-card" key={restaurant.name}>
                  <img
                    className="local-restaurant-photo"
                    src={restaurantPhoto(restaurant)}
                    alt={`Food photo representing ${restaurant.name}`}
                    loading="lazy"
                  />
                  <div className="local-restaurant-details">
                    <div className="local-restaurant-topline">
                      <h3>{restaurant.name}</h3>
                      <span className="local-rating">
                        <span aria-hidden="true">★</span> {restaurant.rating === null ? 'New' : restaurant.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="local-cuisines">{restaurant.cuisines}</p>
                    <p className="locality">{restaurant.locality}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <h3>No restaurants found</h3>
              <p>Try another restaurant, cuisine, or locality.</p>
              <button type="button" onClick={() => { setQuery(''); setRestaurantCuisine('Everything') }}>Show all restaurants</button>
            </div>
          )}
        </section>

        <section className="browse-section" aria-labelledby="browse-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SAMPLE MENU</p>
              <h2 id="browse-title">A few dishes to start</h2>
            </div>
          </div>

          <div className="browse-controls">
            <div className="category-list" aria-label="Filter by cuisine">
              {categories.map((item) => (
                <button
                  className={`category-chip ${category === item ? 'active' : ''}`}
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="sort-tabs" aria-label="Sort restaurants">
              {['For you', 'Top rated', 'Under ₹300'].map((mode) => (
                <button
                  className={sortMode === mode ? 'active' : ''}
                  key={mode}
                  type="button"
                  aria-pressed={sortMode === mode}
                  onClick={() => setSortMode(mode)}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="results-heading">
            <h3>{query || category !== 'Everything' ? 'Your matches' : 'Good near you'}</h3>
            <span>{visibleItems.length} spots</span>
          </div>

          {visibleItems.length > 0 ? (
            <div className="restaurant-grid">
              {visibleItems.map((item) => (
                <article className="restaurant-card" key={item.id}>
                  <div className="restaurant-image-wrap">
                    <img className="restaurant-image" src={item.image} alt={item.dish} loading="lazy" />
                    <span className="restaurant-tag">{item.tag}</span>
                    <span className="image-rating"><span aria-hidden="true">★</span> {item.rating.toFixed(1)}</span>
                  </div>
                  <div className="restaurant-info">
                    <div className="restaurant-title-row">
                      <div>
                        <p className="restaurant-name">{item.restaurant}</p>
                        <p className="dish-name">{item.dish}</p>
                      </div>
                      <div className="card-quantity-control">
                        {cart[item.id] > 0 && (
                          <button
                            className="remove-button"
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            aria-label={`Remove one ${item.dish} from bag`}
                          >
                            −
                          </button>
                        )}
                        <button
                          className="add-button"
                          type="button"
                          onClick={() => addToCart(item.id)}
                          aria-label={cart[item.id]
                            ? `Add one ${item.dish} from ${item.restaurant}; ${cart[item.id]} in bag`
                            : `Add ${item.dish} from ${item.restaurant} to bag`}
                        >
                          <span aria-hidden="true">{cart[item.id] ? `+${cart[item.id]}` : '+'}</span>
                          {!cart[item.id] && ' Add'}
                        </button>
                      </div>
                    </div>
                    <p className="dish-detail">{item.detail}</p>
                    <div className="restaurant-meta">
                      <span>{item.category}</span><i />
                      <span>{item.time}</span><i />
                      <strong>{formatPrice(item.price)}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <span aria-hidden="true">( o )</span>
              <h3>No bites found</h3>
              <p>Try another dish, restaurant, or cuisine.</p>
              <button type="button" onClick={() => { setQuery(''); setCategory('Everything') }}>Show everything</button>
            </div>
          )}
        </section>
      </main>

      <div
        className={`drawer-backdrop ${cartOpen ? 'visible' : ''}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <aside className={`cart-drawer ${cartOpen ? 'is-open' : ''}`} aria-label="Your bag">
        <div className="cart-heading">
          <div>
            <p className="eyebrow">YOUR ORDER</p>
            <h2>Your bag <span>{cartCount ? `(${cartCount})` : ''}</span></h2>
          </div>
          <button className="close-cart" type="button" onClick={() => setCartOpen(false)} aria-label="Close bag">×</button>
        </div>

        {orderPlaced ? (
          <div className="order-success">
            <span className="success-mark" aria-hidden="true">✓</span>
            <h3>That's dinner sorted.</h3>
            <p>Your order is being prepared. See you soon.</p>
            <button type="button" onClick={() => setOrderPlaced(false)}>Keep browsing</button>
          </div>
        ) : cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-copy">
                    <strong>{item.dish}</strong>
                    <small>{item.restaurant}</small>
                    <span>{formatPrice(item.price * cart[item.id])}</span>
                  </div>
                  <div className="quantity-control" aria-label={`Quantity of ${item.dish}`}>
                    <button type="button" onClick={() => updateQuantity(item.id, -1)} aria-label={`Remove one ${item.dish}`}>−</button>
                    <span>{cart[item.id]}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, 1)} aria-label={`Add one ${item.dish}`}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-totals">
              <p><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></p>
              <p><span>Delivery</span><strong>{formatPrice(deliveryFee)}</strong></p>
              <p className="total-line"><span>Total</span><strong>{formatPrice(total)}</strong></p>
            </div>
            <button className="checkout-button" type="button" onClick={placeOrder}>
              Place order <span>{formatPrice(total)}</span>
            </button>
            <p className="checkout-note">Taxes calculated at checkout</p>
          </>
        ) : (
          <div className="empty-cart">
            <span className="empty-bag" aria-hidden="true">+</span>
            <h3>Your bag is taking a breather.</h3>
            <p>Add something lovely from the neighborhood.</p>
            <button type="button" onClick={() => setCartOpen(false)}>Browse the menu</button>
          </div>
        )}

        <div className="cart-footer"><span>Made for your neighborhood</span><span>Fresh, always.</span></div>
      </aside>

      <button className="mobile-bag" type="button" onClick={() => setCartOpen(true)}>
        Your bag <span>{cartCount}</span>
      </button>
    </div>
  )
}

export default App
