import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Main from "./pages/Main";
import Mint from "./pages/Mint";
import MyPage from "./pages/MyPage";
import Market from "./pages/Market";
import Wallet from "./pages/Wallet";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider: any) => new Web3Provider(provider);

const App = (props) => {
  return (
    <div className="App">
      <main>
        <Header />
        <section className="features">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/market" element={<Market />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
