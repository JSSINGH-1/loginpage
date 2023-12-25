import './index.css'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="imageContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="imageLogo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="imageLogo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="imageLogo"
      />
    </div>
    <div className="cardDetailsContainer">
      <div className="ShopContainer">
        <h1>Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes"
        />
        <p>
          Fashion is part of the daily air, trends and styles weave a
          captivating narrative. From the classic elegance of timeless couture
          to the avant-garde expressions of contemporary design, each garment
          tells a story of innovation and self-expression. Runways become
        </p>
        <button className="shopNow" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="clothes1"
      />
    </div>
  </>
)

export default Home
