import '../pages/Mint';
import '../pages/Mypage';
import '../pages/wallet';
// import {useState} from 'react';
// const [isChecked, setIsChecked] = useState()







function Header() {
    let elIsWalletChecked = document.querySelector('.fa-wallet');
    let isWalletChecked = function(value) {
        if( value === true ){
            elIsWalletChecked.classList.remove('gray')
        }else if(value === false ){
            elIsWalletChecked.classList.add('gray')
        }
    }
    // isWalletChecked(true)
    //지갑 연결 상태 표시

  return (
    <div class="header">
        <div class="nav">
                    {/* <!--logo--> */}
                <span class="nav__CI">
                    <a href="/"><img class="nav__logo" src ="https://opensea.io/static/images/logos/opensea.svg"/></a>
                    <a class="nav__siteName" href="/"><h3>OpenSea</h3></a> 
                </span>

                    {/* <!--Search items, collections, and accounts--> */}
                    {/* <a href='#'><i class="fa-solid fa-magnifying-glass"></i></a> */}
                <span class="nav__search">
                    <input class="nav__searchbar" aria-label="Search OpenSea" aria-multiline="false" placeholder="...Search items, collections, and accounts" role="searchbox" type="search" ></input>
                </span>
                <ul>
                    <div class="nav__menu">
                        {/* <!--Explore--> */}
                        <ul><a href="/">Explore</a>
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
                        {/* <!--Stats--> */}
                        <ul><a href="/">Stats</a>
                            {/* <!-- <li>Ranking</li>
                            <li>Activity</li> --> */}
                        </ul>
                        {/* <!--Resources--> */}
                        <ul><a href="/">Resources</a>
                            {/* <!-- <li>Learn</li>
                            <li>Help</li>
                            <li>Platform Status</li>
                            <li>Partners</li>
                            <li>Taxes</li>
                            <li>Blogs</li>
                            <li>Docs</li>
                            <li>Newsletter</li> --> */}
                            {/* <!--Community.symbols--> */}
                            {/* <!-- <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-discord"></i>
                            <i class="fa-brands fa-reddit-alien"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-tiktok"></i> --> */}
                        </ul>       
                        {/* <!--Create--> */}
                        <ul><a href="../pages/mint">Create</a></ul>
                    </div>
                </ul>
                {/* <!--icon.symbol--> */}
                <div class="nav__icons">
                    <li><a href="../pages/mypage"><i class="fa-solid fa-user"></i></a></li>
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
                            <a href='../pages/wallet'>
                                <i class="fa-solid fa-wallet gray" ></i>
                            </a>
                        </li>
                    {/* <!--Cart.symbol--> */}
                    <li><a href='/'><i class="fa-solid fa-cart-shopping"></i></a></li>
                </div>
            </div>
    </div>
  );
}

export default Header;
