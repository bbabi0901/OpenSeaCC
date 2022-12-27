import React from 'react';
import './NFT.css'
export default function NFT({nft, handleClick}) {
    return(
        <a href='/' className="NFT" id='1' key = '1'>
          <div className="nft__content">
            <div className="nft__Info">
              <div className="nft__Info--wrapper">
                <div className="nft__nft_image"onClick={(e) => handleClick(e, nft.id)}><img src='https://turbofuture.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:eco%2Cw_1200%2Cx_300%2Cy_489/MTkxODE4MTg0MDIwNjAwMzA2/shutterstock_1928691428.jpg'/></div>
                <div className="nft__user_address">asdfsadf</div>
                <div className="nft__nft_address">1213123123</div>
                <div className="nft__nft_name">Russ</div>
                <div className="nft__nft_detail">big, cool</div>
                <div className="nft__nft_price">$123,430</div>
                <div className = "nft__reg_dt">1234</div>
                <div className = "nft__upt_dt">{1234}</div>
              </div>
            </div>
            <div className = "nft__discription"></div>
          </div>
        
      </a>
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