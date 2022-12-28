import axios from "axios";
import React, { useState, useEffect } from "react";
import NFT from '../components/NFT/NFT';
import { useNavigate } from "react-router-dom";
import { getWallet } from "../utils/wallet";

const MyPage = ({ name, account, web3 }) => {

  const [nfts, setNfts] = useState();
  const [disconnect, setDisconnect] = useState(account);
  

  useEffect(() => {
    axios.post(
      "http://localhost:3000/mypage/userInfo",
      { address: account },
      { "Content-Type": "application/json" } // header
    ).then((response) => {
      setNfts(response.data)
    })
    ;
  }, []);

  function logOut() {
    localStorage.clear()
    return setDisconnect(!account)
  }


  return (
    <div className="mypage">
      <div className="background_image">
        <div className="slide">
          <img
            src="https://cdn.mos.cms.futurecdn.net/VECkttyB7rAa9qSkxMiB8f.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <div className="user_image">
        <img
          src="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"
          alt=""
        ></img>
      </div>
      <div className="user_info">
        <div className="name">
          <h1>{name}</h1>
          <div className="wallet_address">
            <i className="fa-brands fa-ethereum"></i>
            <h5>{disconnect}</h5>
            <div className="created_date">
              <h5>Joined December 2022</h5>
            </div>
            <button onClick={logOut}>
                  Disconnect Wallet
                </button>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="user_menu">
        <div className="user_collected">
          <h2>Collected</h2>
        </div>
        <div className="user_created">
          <h2>Created</h2>
        </div>
        <div className="user_favorited">
          <h2>Favorited</h2>
        </div>
        <div className="user_activity">
          <h2>Activity</h2>
        </div>
        <div className="user_more">
          <select>
            <option value="Offers made">More</option>
            <option value="Offers made">Offers made</option>
            <option value="Offers received">Offers received</option>
            <option value="Active Listings">Active Listings</option>
            <option value="Inactive Listings">Inactive Listings</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>
      </div>
      <div className="display">
        {console.log(nfts)}
        {
          nfts !== {} && nfts !== undefined
          ? nfts.owner.map((item) => {
            return (
              <NFT 
                className = 'nft_list'
                nft={item} 
              />
            )
          })
          : 0
        }

      </div>
    </div>
  );
};

export default MyPage;
