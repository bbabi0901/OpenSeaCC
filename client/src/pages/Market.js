import "./Market.css";
import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NFT from "../components/NFT/NFT";
import axios from "axios";
import { getGoerliWeb } from "../utils/wallet";
import { collections } from "../utils/contract";

const Market = ({ onImageClick }) => {
  const [category, setCategory] = useState("trending");
  const [nfts, setNtfs] = useState([]);

  const web = getGoerliWeb();
  const id = collections[category].num * 8;
  const getNftList = async (category) => {
    const nftList = [];
    const contractAddr = collections[category].contractAddr;
    const contractAbi = collections[category].abi;
    const tokenContract = new web.eth.Contract(contractAbi, contractAddr);
    // const tokenName = await tokenContract.methods.name().call();
    // const totalSupply = await tokenContract.methods.totalSupply().call()

    for (let tokenId = id; tokenId <= id + 8; tokenId++) {
      const tokenuri = await tokenContract.methods.tokenURI(tokenId).call();
      const owner = await tokenContract.methods.ownerOf(tokenId).call();

      axios.get(tokenuri).then((res) => {
        const { name, image } = res.data;
        nftList.push({ name, tokenId, image, contractAddr, owner });
      });
    }
    return nftList;
  };
  // nft trending, collection, art에 따라 contract주소(=collection) 다르게

  useEffect(() => {
    getNftList(category).then((res) => {
      setNtfs(res);
    });
  }, [category]);

  const onCategoryClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCategory(value);
  };

  return (
    <div className="market">
      <div className="explore_collections">
        <h1>Explore collections </h1>
        <div className="category">
          <Button
            onClick={onCategoryClick}
            value="trending"
            className="category_detail"
          >
            Trending
          </Button>
          <Button
            onClick={onCategoryClick}
            value="art"
            className="category_detail"
          >
            Art
          </Button>
          <Button
            onClick={onCategoryClick}
            value="collectibles"
            className="category_detail"
          >
            Collectibles
          </Button>
        </div>
      </div>
      <div className="display">
        {nfts.map((nft) => {
          return (
            <NFT
              className="nft"
              nft={nft}
              onImageClick={onImageClick}
              key={nft.tokenId}
            />
          ); // NFT에선 이미지 클릭하면 Link to NFTdetails
        })}
      </div>
    </div>
  );
};

export default Market;
