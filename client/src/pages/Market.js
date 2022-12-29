import "./Market.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NFT from "../components/NFT/NFT";
import axios from "axios";
import { getGoerliWeb, getWallet } from "../utils/wallet";
import abi from "../utils/ERC721/azukiABI";

const Market = () => {
  const [isFiltered, setIsFiltered] = useState();
  const handleFilterNFT = (e) => {};
  const [nfts, setNtf] = useState([]);

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
  const trendingClick =()=>{
    console.log("click trending")


    axios.get("http://localhost:3000/market/trending")
    .then((response) => {
      console.log(response.data)
      setNtf(response.data)
    })

    return
  }
  const artClick =()=>{
    console.log("click art")
    
    axios.get("http://localhost:3000/market/art")
    .then((response) => {
      console.log(response.data)
      setNtf(response.data)
    })
    return
  }
  const collectiblesClick =()=>{
    console.log("click collectibles")

    axios.get("http://localhost:3000/market/collectibles")
    .then((response) => {
      console.log(response.data)
      setNtf(response.data)
    })
    return
  }

  return (
    <div className="market">
    <div className="explore_collections">
      <h1>Explore collections </h1>
      <div className="category">
        <button onClick={(e) => trendingClick()}
        className="trending">
          <h3>Trending</h3>
        </button>
        <button onClick={(e) => artClick()} className="art">
          <h3>Art</h3>
        </button>
        <button onClick={(e) => collectiblesClick()}
        className="collectibles">
          <h3>Collectibles</h3>
        </button>
      </div>


      </div>
      <div className="display">
            {nfts.map((item) => {
                return (
                <NFT className="nft_list" nft={item} key={item.id}/>
                )
                }
            )}
      </div>

    </div>
    
  );
};

export default Market;