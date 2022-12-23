import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div class="nav">
        <span class="nav__CI">
          <Link to="/">
            <img
              class="nav__logo"
              src="https://opensea.io/static/images/logos/opensea.svg"
              alt=""
            />
          </Link>
          <Link to="/">
            <h1 className="nav__siteName">OpenSea</h1>
          </Link>
        </span>

        <span class="nav__search">
          <input
            class="nav__searchbar"
            aria-label="Search OpenSea"
            aria-multiline="false"
            placeholder="    Search items, collections, and accounts"
            role="searchbox"
            type="search"
            value
          ></input>
        </span>
        <ul>
          <div class="nav__menu">
            <ul>
              <Link to="/market">Market</Link>
            </ul>
            <ul>
              <Link to="/mint">Mint</Link>
            </ul>
          </div>
        </ul>

        <div class="nav__icons">
          <li>
            <Link to="/mypage">
              <i class="fa-solid fa-user"></i>
            </Link>
          </li>
          <li>
            <Link to="/wallet">
              <i class="fa-solid fa-wallet"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
