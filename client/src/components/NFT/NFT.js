import React from 'react';
function NFT({nft}) {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');

    //required data
        //img
        //name
        //owners
        //items
        //views
        //favorites
        //attribute
        //time limit to sale ends
        //current price
    return(
        <li className="NFT" id={nft.id} key = {nft.id}>
        <div className="tweet__profile">
            <img src={nft.picture} />
        </div>
          <div className="nft__content">
            <div className="nft__Info">
              <div className="nft__Info--wrapper">
                <div className="nft__name">{nft.name}</div>
                <div className = "nft__createdAt">{parsedDate}</div>
                <div className = "nft__currentPrice">{nft.price}</div>
              </div>
            </div>
            {/*TODO : NFT discription이 있어야 합니다.*/}
            <div className = "nft__discription">{nft.discription}</div>
          </div>
        
      </li>
    );

}

export default NFT;
