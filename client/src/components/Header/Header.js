function Header() {
  return (
    <div className="header">
      <div class="nav">
        {/* <!--logo--> */}
        <span class="nav__CI">
          <a href="/">
            <img
              class="nav__logo"
              src="https://opensea.io/static/images/logos/opensea.svg"
            />
          </a>
          <a class="nav__siteName" href="/">
            OpenSea
          </a>
        </span>

        <span class="nav__search">
          {/* <input class="nav__searchbar" aria-label="Search OpenSea" aria-multiline="false" placeholder="    Search items, collections, and accounts" role="searchbox" type="search" value style = "cursor: text;"></input> */}
        </span>
        <ul>
          <div class="nav__menu">
            <ul>
              <a href="/market">Market</a>
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

            <ul>
              <a href="/mint">Mint</a>
            </ul>
          </div>
        </ul>
        <div class="nav__icons">
          <li>
            <a href="/mypage">
              <i class="fa-solid fa-user"></i>
            </a>
          </li>

          <li>
            <a>
              <i class="fa-solid fa-wallet"></i>
            </a>
          </li>

          <li>
            <a>
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Header;
