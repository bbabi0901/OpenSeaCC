const Main = () => {
  return (
    <div className="body">
      <div className="slide">
        <h1>Explore, collect, and sell NFTs</h1>
        <img
          src="https://cdn.mos.cms.futurecdn.net/VECkttyB7rAa9qSkxMiB8f.jpg"
          alt=""
        ></img>
      </div>
      <div className="trending_top">
        <div className="toggle">
          <h2>Trending</h2>
          <h2>Top</h2>
        </div>
        <span className="select">
          <div className="select_1">
            <select name="chains" type="text">
              <option value={24}>24h</option>
            </select>
            All chains
            <i className="fa-brands fa-atlassian"></i>
            <i className="fa-brands fa-uikit"></i>
            <i className="fa-brands fa-ethereum"></i>
            <i className="fa-brands fa-xbox"></i>
            <i className="fa-brands fa-playstation"></i>
            <i className="fa-brands fa-pagelines"></i>
            <i className="fa-brands fa-codepen"></i>
            <button>View all</button>
          </div>
        </span>
      </div>
      <span className="trending_top_menu">
        <h5>COLLECTION</h5>
        <h5>FLOOR PRICE</h5>
        <h5>VOLUME</h5>
        <h5>COLLECTION</h5>
        <h5>FLOOR PRICE</h5>
        <h5>VOLUME</h5>
      </span>
      <div className="trending_top_number">
        <div className="trending_top_number_a">
          <a href="#">
            <h4>1</h4>
            <img src="https://opensea.io/collection/yaypegs"></img>
            <h4>COLLECTION_1</h4>
          </a>
          <a href="#">
            <h4>2</h4>
            <img src="https://opensea.io/collection/genesis-oath"></img>
            <h4>COLLECTION_2</h4>
          </a>
          <a href="#">
            <h4>3</h4>
            <img src="https://opensea.io/collection/wolf-game"></img>
            <h4>COLLECTION_3</h4>
          </a>
          <a href="#">
            <h4>4</h4>
            <img src="https://opensea.io/collection/tougenkyouofficial"></img>
            <h4>COLLECTION_4</h4>
          </a>
          <a href="#">
            <h4>5</h4>
            <img src="https://opensea.io/collection/kagura-jp"></img>
            <h4>COLLECTION_5</h4>
          </a>
        </div>
        <div className="trending_top_number_b">
          <a href="#">
            <h4>6</h4>
            <img src="https://opensea.io/collection/arbitrum-odyssey-nft"></img>
            <h4>COLLECTION_6</h4>
          </a>
          <a href="#">
            <h4>7</h4>
            <img src="https://opensea.io/collection/pacific-rim-legacy-collection"></img>
            <h4>COLLECTION_7</h4>
          </a>
          <a href="#">
            <h4>8</h4>
            <img src="https://opensea.io/collection/10ktf-stockroom"></img>
            <h4>COLLECTION_8</h4>
          </a>
          <a href="#">
            <h4>9</h4>
            <img src="https://opensea.io/collection/acrocalypse"></img>
            <h4>COLLECTION_9</h4>
          </a>
          <a href="#">
            <h4>10</h4>
            <img src="https://opensea.io/collection/a-common-place"></img>
            <h4>COLLECTION_10</h4>
          </a>
        </div>
      </div>

      <h3>Notable collections</h3>
      <div className="notable_collections">
        <div className="notable_collections_1">1</div>
        <div className="notable_collections_1">2</div>
        <div className="notable_collections_1">3</div>
        <div className="notable_collections_1">4</div>
        <div className="notable_collections_1">5</div>
      </div>
      <h3>Food NFTs spotlight</h3>
      <div className="food_NFTs_spotlight">
        <div className="food_NFTs_spotlight_1">1</div>
        <div className="food_NFTs_spotlight_1">2</div>
        <div className="food_NFTs_spotlight_1">3</div>
        <div className="food_NFTs_spotlight_1">4</div>
        <div className="food_NFTs_spotlight_1">5</div>
        <div className="food_NFTs_spotlight_1">6</div>
      </div>
      <h3>NFT_101</h3>
      <div className="NFT_101">
        <div className="NFT_101_1">1</div>
        <div className="NFT_101_1">2</div>
        <div className="NFT_101_1">3</div>
        <div className="NFT_101_1">4</div>
        <div className="NFT_101_1">5</div>
        <div className="NFT_101_1">6</div>
      </div>
      <h3>Browse by category</h3>
      <div className="browse_by_category">
        <div className="browse_by_category_1">1</div>
        <div className="browse_by_category_1">2</div>
        <div className="browse_by_category_1">3</div>
      </div>
      <div className="browse_by_category">
        <div className="browse_by_category_1">1</div>
        <div className="browse_by_category_1">2</div>
        <div className="browse_by_category_1">3</div>
      </div>
      <div className="browse_by_category">
        <div className="browse_by_category_1">1</div>
        <div className="browse_by_category_1">2</div>
        <div className="browse_by_category_1">3</div>
      </div>
        <div className="footer">
        <div className="footer_head">
          {/* <!--sign up--> */}
          <div className="stay_in_the_loop">
            <h2>Stay in the loop</h2>
            <h4>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </h4>

            <input className="footer_input"></input>
            <button className="footer_signup"><h2>Sign up</h2></button>
          </div>
          <div className="join_the_community">
            <h2>Join the community</h2>
            <div className="icon">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-discord"></i>
              <i className="fa-brands fa-reddit-alien"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
          {/* <!--Join the community--> */}
        </div>
        <div className="footer_body">
          <div className="opensea">
            {/* <!--intro--> */}
            <div className="footer_menu_1">
              <div>
                <a className="footer_logo" href="/">
                  <img className="footer_logo" src="https://opensea.io/static/images/logos/opensea-white.svg"/>
                </a>
                <h2>OpenSea</h2>
                <h4>
                  The world’s first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
                  exclusive digital items.
                </h4>
            </div>
          </div>
          <div className="footer_menu_2">
              <div className="marketplace">
              <h3>Marketplace</h3>
              <h4>All NFTs</h4>
              <h4>Art</h4>
              <h4>Collectibles</h4>
              <h4>Domain Names</h4>
              <h4>Music</h4>
              <h4>Photography</h4>
              <h4>Sports</h4>
              <h4>Trading Cards</h4>
              <h4>Utlity</h4>
              <h4>Virtual Worlds</h4>
              </div>
            </div>
            <div className="my_account">
              <h3>My Account</h3>
              <h4>Profile</h4>            
              <h4>Favorites</h4>
              <h4>Watcst</h4>
              <h4>My Collections</h4>
              <h4>Settings</h4>
              <h3 >Stats</h3>
              <h4>Rankings</h4>
              <h4>Activity</h4>
            </div>
            <div className="resources">
              <h3>Resources</h3>       
                <h4>Learn</h4>
                <h4>Help Center</h4>
                <h4>Platform Status</h4>
                <h4>Partners</h4>
                <h4>Taxes</h4>
                <h4>Blog</h4>        
                <h4>Docs</h4>
                <h4>Newsletter</h4>     
            </div>
            <div className="company">
              <h3>Company</h3>      
                <h4>About</h4>
                <h4>Careers</h4>
                <h4>Ventures</h4>
                <h4>Grants</h4>
            </div>

          </div>
          </div>  
        <div>
          <h6>© 2018 - 2022 Ozone Networks, Inc</h6>
          <h6>Privacy Policy</h6>
          <h6>Terms of Service</h6>
        </div>
      </div>
    </div>
    
  );
};

export default Main;
