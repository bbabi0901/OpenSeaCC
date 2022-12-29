import React from "react";
import { Link } from "react-router-dom";
import { CardBody, Card } from "reactstrap";
import axios from "axios";
import { useState } from "react";
import NFTdetails from "../../pages/NFTdetails";

export default function NFT({ nft, onImageClick }) {
  if (nft) {
    return (
      <div className="parts">
        <div className="nft__content">
          <div className="nft__Info">
            <div className="nft__Info--wrapper">
              <Link
                id={nft.id}
                key={nft.id}
                to={`../nft/${nft.contractAddr}/${nft.tokenId}`}
              >
                <div
                  className="nft__nft_image"
                  onClick={() => {
                    onImageClick(nft);
                  }}
                  value={nft.id}
                >
                  <img src={nft.image} />
                </div>
              </Link>
              <div className="nft__nft_address">{nft.nft_address}</div>
              <div className="nft__nft_name">
                <h2>
                  {nft.tokenName} #{nft.tokenId}
                </h2>
              </div>
              <div className="nft__nft_price">
                <h3>{nft.nft_price} ETH</h3>
              </div>
            </div>
          </div>
          <div className="nft__discription"></div>
        </div>
      </div>
    );
  } else {
    return;
  }
}

{
  /* <li className="NFT" id={nft.id} key = {nft.id}>
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
</li> */
}
