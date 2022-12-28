import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import NFT from "../components/NFT/NFT";
const Main = () => {
  const [pagination, setPagination] = useState(0);
  const [nfts, setNfts] = useState({});

  const handlePrevClick = () => {
    setPagination((curr) => {
      if (curr <= 0) {
        return 0
      } else {
        return curr -= 1;
      }
    });
  };
  const handleNextClick = () => {
    setPagination((curr) => {
      return curr += 1;
    });
  };

  // console.log(pagination)
  const [nftList, setNftList] = useState([]);
  useEffect(() => {
    // axios.get();
    axios.get("http://localhost:3000/mainList?point=" + pagination)
    .then((response) => {
      setNfts(response.data)
    })
  }, [pagination]);

  console.log(nfts);
  return (
    <div className="body">
      <div className="slide">
        <h1>Explore, collect, and sell NFTs</h1>

        <img
          src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/706290/nft-abstract-design.jpg&w=2000&op=resize"
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

      <div className="main_nft_pagination">
        <Button className="main_nft_pagination_button" onClick={handlePrevClick}>
        <h1>Prev</h1>
        </Button>
        <Button className="main_nft_pagination_button" onClick={handleNextClick}>
        <h1>Next</h1>
        </Button>
      </div>
      <div className="trending_top_number">
        {
          nfts.length > 0
          ?nfts.map((item, index) => {
            return (
              <div className="trending_top_source">
                <a href={`http://localhost:3000/nftdetails?id=${item.id}`}>
                  <img src={`http://localhost:3000/images?path=${item.nft_image}`} />
                  <h4>{item.nft_name} #{item.id}</h4>
                  <h4>{item.nft_price} ETH</h4>
                </a>
              </div>
            )
          })
          :""
        }
        </div>



      <h1>Notable collections</h1>
      <div className="trending_top_number">
        {
          nfts.length > 0
          ?nfts.map((item, index) => {
            return (
              <div className="trending_top_source">
                <a href={`http://localhost:3000/nftdetails?id=${item.id}`}>
                  <img src={`http://localhost:3000/images?path=${item.nft_image}`} />
                  <h4>{item.nft_name} #{item.id}</h4>
                  <h4>{item.nft_price} ETH</h4>
                </a>
              </div>
            )
          })
          :""
        }
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
            <button className="footer_signup">
              <h2>Sign up</h2>
            </button>
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
                  <img
                    className="footer_logo"
                    src="https://opensea.io/static/images/logos/opensea-white.svg"
                  />
                </a>
                <h2>OpenSea</h2>
                <h4>
                  The world’s first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs). Buy, sell, and
                  discover exclusive digital items.
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
              <h3>Stats</h3>
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
