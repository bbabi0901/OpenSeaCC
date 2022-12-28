import "./Market.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NFT from "../components/NFT/NFT";
import { Router } from "react-router-dom";
import axios from "axios";
import { getGoerliWeb, getWallet } from "../utils/wallet";
import abi from "../utils/ERC721/azukiABI";

const Market = () => {
  const [isFiltered, setIsFiltered] = useState();
  const handleFilterNFT = (e) => {};

  const web = getGoerliWeb();
  const getNftList = async () => {
    const nftList = [];
    const tokenContract = new web.eth.Contract(
      abi,
      "0x10B8b56D53bFA5e374f38e6C0830BAd4ebeE33E6"
    );
    const tokenName = await tokenContract.methods.name().call();
    for (let tokenId = 1; tokenId <= 3; tokenId++) {
      const tokenuri = await tokenContract.methods.tokenURI(tokenId).call();
      axios.get(tokenuri).then((res) => {
        const image = res.data.image;
        // setNftList((curr) =>[...curr, { tokenId, tokenuri, image }]);
        nftList.push({ tokenId, tokenuri, image });
      });
    }
    return nftList;
  };
  const azukiList = getNftList();
  // const [nftList, setNftList] = useState([]);


  return (
    <div className="market">
      <h1>Explore collections </h1>
      <div className="category">
        <button onClick="/market/trending" className="trending">
          <h3>Trending</h3>
        </button>
        <button onClick="/market/art" className="art">
          <h3>Art</h3>
        </button>
        <button onClick="/market/collectibles" className="collectibles">
          <h3>Collectibles</h3>
        </button>
      </div>
      <div className="goods">
        <ul className="NFTs">
          {/* {NFTs.map(NFT => {
              return (
              <NFT  NFT={NFT} key={NFT.id}/>
              )
              }
          )} */}
          <div className="display">
            <div className="nft_list">
              <NFT />
              <NFT />
              <NFT />
            </div>
            {/* <div className="nft_list">
              <NFT />
              <NFT />
              <NFT />
            </div>
            <div className="nft_list">
              <NFT />
              <NFT />
              <NFT />
            </div> */}

          </div>
        </ul>
      </div>
    </div>
  );
};

export default Market;
