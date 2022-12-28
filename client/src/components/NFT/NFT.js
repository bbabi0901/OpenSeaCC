import React from 'react';
import { Link } from "react-router-dom";
import './NFT.css'
import axios from "axios";
import { useState } from "react";

export default function NFT({nft, handleClick}) {
  const req = async () => {
    const result = await axios.post(
      "http://localhost:3000/nftdetails",
      isNft, // body
      { "Content-Type": "application/json" } // header
    );
    return result;
  };
  const result = req().then((result) => {
    return result;
  });

  const [isNft, setIsNft] = useState({
    user_address: "0x0000000000000000000000000000000000000000",
    nft_id:"1",
    nft_address: "test nft address",
    nft_name: "test nft name",
    nft_detail: "test nft detail",
    nft_price: "0.99 ETH $",
    reg_dt: "",
    upt_dt: "",
  });
  console.log(isNft.nft_id)
    return(
      
        <Link className="NFT" id={isNft.nft_id} key ={isNft.nft_id} to={"../nftdetails/?id="+isNft.nft_id}>
          <div className="nft__content">
            <div className="nft__Info">
              <div className="nft__Info--wrapper">
                <div className="nft__nft_image"onClick={(e) => handleClick(e, nft.id)}><img src='https://turbofuture.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:eco%2Cw_1200%2Cx_300%2Cy_489/MTkxODE4MTg0MDIwNjAwMzA2/shutterstock_1928691428.jpg'/></div>
                <div className="nft__nft_address">{isNft.nft_address}</div>
                <div className="nft__nft_name">{isNft.nft_name}</div>
                <div className="nft__nft_price">${isNft.nft_price}</div>
              </div>
            </div>
            <div className = "nft__discription"></div>
          </div>
        </Link>
      
    );

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