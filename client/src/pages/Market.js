
import './Market.css'
// import NFTs from '../pages/NFTs'
// import NFT from '../components/NFT/NFT'
import React,  { useEffect } from 'react';
import NFT from '../components/NFT/NFT';
import { Router } from 'react-router-dom';



const Market = () => {

  return (
    <div className='market'>
      <h1>Explore collections</h1>
      <div className="category">
        <a href='/' className="trending"><h3>Trending</h3></a>
        <a href='/' className="top"><h3>Top</h3></a>
        <a href='/' className="art"><h3>Art</h3></a>
        <a href='/' className="collectibles"><h3>Collectibles</h3></a>
        <a href='/' className="domain_names"><h3>Domain Names</h3></a>
        <a href='/' className="music"><h3>Music</h3></a>
        <a href='/' className="photography"><h3>Photography</h3></a>
        <a href='/' className="sports"><h3>Sports</h3></a>
        <a href='/' className="trading_cards"><h3>Trading Cards</h3></a>
        <a href='/' className="utility"><h3>Utility</h3></a>
        <a href='/' className="virtual_worlds"><h3>Virtual Worlds</h3></a>
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
        

      <div className="browse_by_category">
          <NFT/><NFT/><NFT/>
          </div>
          <div className="browse_by_category">
          <NFT/><NFT/><NFT/>
          </div>
          <div className="browse_by_category">
          <NFT/><NFT/><NFT/>
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
        </div>

      </ul>

      </div>
    </div>
    );

};

export default Market;
