import React from 'react';
import { Link } from "react-router-dom";
import './NFT.css'
import axios from "axios";
import { useState } from "react";
import { getGoerliWeb, getWallet } from "../../utils/wallet";
import abi from "../../utils/ERC721/testAbi";
import NFTdetails from '../../pages/NFTdetails';

export default function NFT({nft}) {
  // const req = async () => {
  //   const result = await axios.post(
  //     "http://localhost:3000/nftdetails",
  //     isNft, // body
  //     { "Content-Type": "application/json" } // header
  //   );
  //   return result;
  // };
  // const result = req().then((result) => {
  //   return result;
  // });

  // const [isNft, setIsNft] = useState({
  //   user_address: "0x0000000000000000000000000000000000000000",
  //   nft_id:"1",
  //   nft_address: "test nft address",
  //   nft_name: "test nft name",
  //   nft_detail: "test nft detail",
  //   nft_price: "0.99 ETH $",
  //   reg_dt: "",
  //   upt_dt: "",
  // });
  // const [tokenURI, setTokenURI] = useState(
  //   "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31"
  // );

  // const testContractAddr = "0x4e5E76fEd68E5a0456059aC46A0bAe5623C522Fc";
  // const testTokenId = 1;

  // const web3 = getGoerliWeb();
  // const getERC721NFT = async () => {
  //   const tokenContract = new web3.eth.Contract(abi, testContractAddr);
  //   const tokenURI = await tokenContract.methods.tokenURI(testTokenId);
  //   setTokenURI(tokenURI);
  // };
  // console.log(isNft.nft_id)
  
  function handleClick(e, id) {
    console.log(id)
  }

    if (nft) {
      return(
      <Link id={nft.nft_id} key ={nft.nft_id} to={"../nftdetails"}>
        <div className="parts">
          <div className="nft__content">
            <div className="nft__Info">
              <div className="nft__Info--wrapper">
                <div className="nft__nft_image" onClick={(e) => handleClick(e, nft.id)} value={nft.id}>
                  <img src={`http://localhost:3000/images?path=${nft.nft_image}`}/>
                </div>
                <div className="nft__nft_address">{nft.nft_address}</div>
                <div className="nft__nft_name">{nft.nft_name}</div>
                <div className="nft__nft_price">${nft.nft_price}</div>

              </div>
            </div>
            <div className = "nft__discription"></div>
          </div>
        </div>
      </Link>
    
  );
    } else {
      return;
    }
    

}




{/* <li className="NFT" id={nft.id} key = {nft.id}>
<div className="nft__content">
  <div className="nft__Info">
    <div className="nft__Info--wrapper">
      <div className="nft__user_address">{nft.user_address}</div>
      <div className="nft__nft_address">{nft.nft_address}</div>
      <div className="nft__nft_name">{nft.nft_name}</div>
      <div className="nft__nft_detail">{nft.nft_detail}</div>
      <div className="nft__nft_image"onClick={(e) => handleClick(e, nft.id)}>{nft.nft_image}</div>
      <div className="nft__nft_price">{nft.nft_price}</div>
      <div className = "nft__reg_dt">{parsedDate}</div>
      <div className = "nft__upt_dt">{parsedDate}</div>
    </div>
  </div>
  <div className = "nft__discription">{nft.discription}</div>
</div>
</li> */}