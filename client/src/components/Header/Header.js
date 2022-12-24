// import {useState} from 'react';
// const [isChecked, setIsChecked] = useState()

import { Link } from "react-router-dom";

function Header() {
  let elIsWalletChecked = document.querySelector(".fa-wallet");
  let isWalletChecked = function (value) {
    if (value === true) {
      elIsWalletChecked.classList.remove("gray");
    } else if (value === false) {
      elIsWalletChecked.classList.add("gray");
    }
  };
  // isWalletChecked(true)
  //지갑 연결 상태 표시

  return (
    <div class="header">
      <div class="nav">
        {/* <!--logo--> */}
        <span class="nav__CI">
          <Link to="/">
            <img
              class="nav__logo"
              src="https://opensea.io/static/images/logos/opensea.svg"
              alt=""
            />
          </Link>
          <Link className="nav__siteName" to="/">
            <h3>OpenSea</h3>
          </Link>
        </span>

        {/* <!--Search items, collections, and accounts--> */}
        {/* <a href='#'><i class="fa-solid fa-magnifying-glass"></i></a> */}
        <span class="nav__search">
          <input
            class="nav__searchbar"
            aria-label="Search OpenSea"
            aria-multiline="false"
            placeholder="...Search items, collections, and accounts"
            role="searchbox"
            type="search"
          ></input>
        </span>
        <ul>
          <div class="nav__menu">
            {/* <!--Explore--> */}
            <ul>
              <Link to="/market">Market</Link>
              {/* <!-- <li>All NFTs</li>
                            <li>Art</li>
                            <li>Collectibles</li>
                            <li>Domain Names</li>
                            <li>Music</li>
                            <li>Photography</li>
                            <li>Sports</li>
                            <li>Trading Cards</li>
                            <li>Utility</li>
                            <li>Virtual Worlds</li> --> */}
            </ul>

            {/* <!--Create--> */}
            <ul>
              <Link to="/mint">Mint</Link>
            </ul>
          </div>
        </ul>
        {/* <!--icon.symbol--> */}
        <div class="nav__icons">
          <li>
            <Link to="/mypage">
              <i class="fa-solid fa-user"></i>
            </Link>
          </li>
          {/* <!-- <li>Profile</li>
                        <li>Favorites</li>
                        <li>Watchlist</li>
                        <li>My Collections</li>
                        <li>Settings</li>
                        <li>Language</li>
                        <ul><a><-Choose Language</a>
                            <li>English</li>
                            <li>Spanish</li>
                            <li>Deutsch</li>
                            <li>French</li>
                            <li>Japanese</li>
                            <li>Korean</li>
                            <li>Chinese</li>
                        </ul>
                        <li>Night Mode.onOff</li> --> */}

          {/* <!--Wallet.symbol--> */}
          <li>
            <Link to="/wallet">
              <i class="fa-solid fa-wallet gray"></i>
            </Link>
          </li>
          {/* <!--Cart.symbol--> */}
          <li>
            <Link href="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
