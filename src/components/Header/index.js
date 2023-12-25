import './index.css'

const Header = () => (
  <nav className="HeaderContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="image"
    />
    <ul className="itemContainer">
      <li className="para">Home</li>
      <li className="para">Products</li>
      <li className="para">Cart</li>
      <button className="buttonEl" type="button">
        Logout
      </button>
    </ul>
    <button className="navlogout" type="button">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="imageLogo"
      />
    </button>
  </nav>
)
export default Header
