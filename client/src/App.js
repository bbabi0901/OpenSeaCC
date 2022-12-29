import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Mint from "./pages/Mint";
import MyPage from "./pages/MyPage";
import Market from "./pages/Market";
import Wallet from "./pages/Wallet";
import NFTdetails from "./pages/NFTdetails";

const App = () => {
  const [web3, setWeb3] = useState();
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // const web = new Web3(window.ethereum);
        const goerliURL =
          "https://goerli.infura.io/v3/2d2c8426cde6446fa9185e2e0b01dcea";
        const getWeb3 = () => {
          const web3 = new Web3(new Web3.providers.HttpProvider(goerliURL));
          return web3;
        };
        const web = getWeb3();
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const checkAccConnect = () => {
    // if (typeof window.ethereum !== "undefined") {
    //   return window.ethereum.isConnected();
    // }
    // return false;
    return localStorage.getItem("address") !== "undefined";
  };
  const [isAccConnected, setIsAccConnected] = useState(checkAccConnect());
  const [account, setAccount] = useState(localStorage.getItem("address"));
  const onWalletConnect = (account) => {
    setAccount(account);
    setIsAccConnected(true);
    localStorage.setItem("address", account);
  };

  const [nft, setNft] = useState({});
  const onImageClick = (nft) => {
    setNft(nft);
  };
  const name = "example";
  return (
    <div className="App">
      <main>
        <Header account={account} isAccConnected={isAccConnected} />
        <section className="features">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route
              path="/market"
              element={<Market onImageClick={onImageClick} />}
            />
            <Route
              path="/mypage"
              element={<MyPage name={name} account={account} web3={web3} />}
            />
            <Route path="/mint" element={<Mint />} account={account} />
            <Route
              path="/wallet"
              element={
                <Wallet
                  name={name}
                  account={account}
                  onWalletConnect={onWalletConnect}
                />
              }
            />
            <Route
              path={`/nft/${nft.contractAddr}/${nft.tokenId}`}
              element={<NFTdetails nft={nft} />}
            />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
