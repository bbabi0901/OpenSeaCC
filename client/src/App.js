import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Main from "./pages/Main";
import Mint from "./pages/Mint";
import MyPage from "./pages/MyPage";
import Market from "./pages/Market";
import Wallet from "./pages/Wallet";

const App = () => {
  const [isWalletChecked, setIsWalletChecked] = useState(
    window.ethereum ? window.ethereum.isConnected() : false
  );
  const handleWalletChecked = () => {
    setIsWalletChecked(true);
  };
  return (
    <div className="App">
      <main>
        <Header isWalletChecked={isWalletChecked} />
        <section className="features">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/market" element={<Market />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mint" element={<Mint />} />
            <Route
              path="/wallet"
              element={<Wallet handleWalletChecked={handleWalletChecked} />}
            />
          </Routes>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
