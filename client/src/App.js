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
        const web = new Web3(window.ethereum);
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const checkAccConnect = () => {
    if (typeof window.ethereum !== "undefined") {
      return window.ethereum.isConnected();
    }
    return false;
  };
  const [isAccConnected, setIsAccConnected] = useState(checkAccConnect());
  const [account, setAccount] = useState(undefined);
  const onWalletConnect = (account) => {
    setAccount(account);
    setIsAccConnected(true);
  };

  const name = "example";
  return (
    <div className="App">
      <main>
        <Header account={account} isAccConnected={isAccConnected} />
        <section className="features">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/market" element={<Market />} />
            <Route
              path="/mypage"
              element={<MyPage name={name} account={account} />}
            />
            <Route path="/mint" element={<Mint />} />
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
            <Route path="/nftdetails" element={<NFTdetails />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
