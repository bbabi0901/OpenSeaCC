import React, { useState } from 'react';
import NFT from '../components/NFT/NFT'

const NFTs = () => {
    const [name, setName] = useState("parkhacker")
    const [discription, setDiscription] = useState("")
    const [NFTs, setNFTs] = useState()

  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.

  const handleButtonClick = (event) => {
    
    // 새로 등록되는 NFT을 정의해준다
    const NFT = {
      id: NFTs.length + 1,
      name: name,
      picture: ``,
      title: 'new NFT',
      discription: discription,
      createdAt: new Date().toLocaleDateString('ko-KR'),
      price: 0.01,
    };

    const newNFTs = [NFT, ...NFTs];

    setNFTs(newNFTs);
  }

  const handleChangeName = (event) => {
    setName(event.target.value)
    // TODO : NFT input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  const handleChangeMsg = (event) => {
    setDiscription(event.target.value)

    // TODO : NFT textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  return (
    <React.Fragment>
      <div className="NFTForm__container">
        <div className="NFTForm__wrapper">
          <div className="NFTForm__profile">
            <img src="" />
          </div>
          <div className="NFTForm__inputContainer">
            <div className="NFTForm__inputWrapper">
              <div className="NFTForm__input">
                <input
                  type="text"
                  value={name}
                  onChange = {handleChangeName}
                  placeholder="your username here.."
                  className="NFTForm__input--username"
                ></input>
                <textarea
                  type="text"
                  value={msg}
                  onChange = {handleChangeMsg}
                  placeholder="your username here.."
                  className="NFTForm__input--message"
                ></textarea>
                {/*TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요.*/}
              </div>
              <div className="NFTForm__count" role="status">
                <span className="NFTForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요.// */}
                  {'total: ' + dummyNFTs.length}
                </span>
              </div>
            </div>
            <div className="NFTForm__submit">
              <div className="NFTForm__submitIcon"></div>
              <button className="NFTForm__submitButton" onClick={handleButtonClick}> Create</button>
               
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}

            </div>
          </div>
        </div>
      </div>
      <div className="NFT__selectUser"></div>
      <ul className="NFTs">
        
        {NFTs.map(NFT => {
            return (
            <NFT  NFT={NFT} key={NFT.id}/>
            )
            }
        )}
      </ul>
    </React.Fragment>
  );
};

export default NFTs;
