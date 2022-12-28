import './Market.css'
import React,  { useEffect } from 'react';
import NFT from '../components/NFT/NFT';
import { Router } from 'react-router-dom';
import axios from "axios";
import { getGoerliWeb, getWallet } from "../utils/wallet";
import { useState } from "react";
import abi from "../utils/ERC721/testAbi";


const Market = () => {
  const [isFilterde, setIsFiltered ] = useState()
  const handleFilterNFT = (e) =>{
  }
  return (
    <div className='market'>
      <h1>Explore collections</h1>
      <div className="category">
        <a href='/' className="trending"><h3>Trending</h3></a>
        <a href='/' className="art"><h3>Art</h3></a>
        <a href='/' className="collectibles"><h3>Collectibles</h3></a>
      </div>
      <div className='goods'>
        <ul className="NFTs">
          
          {/* {NFTs.map(NFT => {
              return (
              <NFT  NFT={NFT} key={NFT.id}/>
              )
              }
          )} */}
          <div className="display">
            <div className="nft_list">
            <NFT/><NFT/><NFT/>
            </div>
            <div className="nft_list">
            <NFT/><NFT/><NFT/>
            </div>
            <div className="nft_list">
            <NFT/><NFT/><NFT/>
            </div>
          </div>
        </ul>
      </div>
    </div>
    );


};

export default Market;
