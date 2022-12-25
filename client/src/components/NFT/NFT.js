import React from 'react';
function NFT() {
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
            <div className="nft__userInfo">
              <div className="nft__userInfo--wrapper">
                {/* TODO : 유져 이름이 있어야 합니다. */}
                <div className="nft__username">{tweet.username}</div>
                {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}
                <div className = "nft__createdAt">{parsedDate}</div>
              </div>
            </div>
            {/*TODO : 트윗 메세지가 있어야 합니다.*/}
            <div className = "nft__discription">{tweet.content}</div>
          </div>
        
      </li>
    );

}

export default NFT;
