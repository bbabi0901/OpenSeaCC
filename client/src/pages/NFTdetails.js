import axios from "axios";
import "./NFTdetails.css";
import { getGoerliWeb, getWallet } from "../utils/wallet";
import { useState, useEffect } from "react";

import abi from "../utils/ERC721/azukiABI";

// props로 contract주소랑 id받아온다
const NFTdetails = ({ nft }) => {
  // tokenId로 chain에서 찾아와서 setNftDetail
  const [nftDetails, setNftDetails] = useState({
    contract_address: "",
    tokenId: 0,
    user_address: "0x0000000000000000000000000000000000000000",
    owner_address: "0x0000000000000000000000000000000000000000",
    nft_name: "test nft name",
    nft_detail: "test nft detail",
    nft_image: "",
    nft_price: "0.99 ETH $",
    reg_dt: "",
    upt_dt: "",
  });

  // db에는 contract주소, tokenId, name, detail, creator, createdAt, updatedAt. owner, img은 메소드로
  // 제일 좋은 건 ipfs 공부...
  useEffect(() => {
    axios.get("http://localhost:3000/mint/detail?id=1").then((response) => {
      console.log(response.data);
      setNftDetails(response.data);
    });
  }, []);

  return (
    <div className="nft_details">
      <div className="top">
        <div className="top_left">
          <img className="image" src={nft.image} alt="nft"></img>
          <div className="floor_left">
            <div>
              <h4>Description</h4>
              <div>{nftDetails.nft_detail}</div>
              <div>
                <h4>By</h4>
                <a href="/">
                  <h4>LaidBackLlamas</h4>
                </a>
                <h4>
                  This NFT is a Limited Edition Christmas Lady Llama (Official
                  Collectors NFT) /50.
                </h4>
              </div>
              <h4>Details</h4>
            </div>
          </div>
        </div>
        <div className="top_right">
          <div className="info">
            <div className="nft_name">{nftDetails.nft_name}</div>
            <div className="owner">
              <h4>Owned by {nft.owner}</h4>
            </div>
          </div>
          <div className="sale_ends">
            <h4>Create {nftDetails.reg_dt}</h4>
            {/* <h4>02 17 06 24</h4>
            <h4>Days Hours Minutes Seconds</h4> */}
          </div>
          <div className="buy_sell">
            <h4>Current price</h4>
            <h4>{nftDetails.nft_price}</h4>
            <button className="add_to_cart">
              <h3>Add to cart</h3>
            </button>
            <button className="make_offer">
              <h3>Make offer</h3>
            </button>
          </div>
          <div className="price_history"></div>
          <div className="floor_right">
            <div className="listing">
              <button>Listings</button>
              <h4>Price &nbsp;USD Price &nbsp;Expiration</h4>
              <h4>0.13 ETH &nbsp; $158.66 &nbsp;3days</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NFTdetails;
