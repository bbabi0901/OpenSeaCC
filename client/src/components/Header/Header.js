import { Link } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { useWeb3React } from "@web3-react/core";
import "./Header.css";
import { useDisclosure, Input } from "@chakra-ui/react";
import WalletSellection from "../Wallet/Wallet";
import { useEffect, useState } from "react";
import { connectors } from "../../utils/connectors";

function Header() {
  // 이러면 atom을 '구독'하는 다른 컴포넌트에서는 useRecoilValue(key값)을 통해 atom을 조회.
  // selector -> 변화된 값으로부터 파생되는 다른 결과물. (ex. text -> text.length) selector({})로 설정후 useRecoilValue를 통해 불러올 수 있다.
  const searchTextState = atom({
    key: "searchTextState",
    default: "",
  });
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();
  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);
  return (
    <div className="header">
      <div className="nav">
        <span className="nav__CI">
          <Link to="/">
            <img
              className="nav__logo"
              src="https://opensea.io/static/images/logos/opensea.svg"
              alt=""
            />
          </Link>
          <Link className="nav__siteName" to="/">
            <h3>Gatiga</h3>
          </Link>
        </span>
        <span className="nav__text_input">
          <Input
            className="text_input"
            aria-label="Search OpenSea"
            aria-multiline="false"
            placeholder="   Search items, collections, and accounts"
            role="searchbox"
            type="search"
            value={searchText}
            onChange={onChange}
          ></Input>
        </span>
        <ul>
          <div className="nav__menu">
            <ul>
              <Link to="/market">Market</Link>
            </ul>
            <ul>
              <Link to="/mint">Mint</Link>
            </ul>
          </div>
        </ul>
        <div className="nav__icons">
          <li>
            {active ? (
              <Link to="/mypage">
                <i className="fa-solid fa-user"></i>
              </Link>
            ) : (
              ""
            )}
          </li>
          <li>
            {!active ? (
              <Link>
                <i className="fa-solid fa-wallet gray" onClick={onOpen}></i>
              </Link>
            ) : (
              <Link to="/">
                <i
                  className="fa-solid fa-wallet"
                  onClick={() => {
                    refreshState();
                    deactivate();
                  }}
                ></i>
              </Link>
            )}
          </li>
          {/* <!--Cart.symbol--> */}
          <li>
            <Link href="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </div>
      </div>
      <WalletSellection isOpen={isOpen} closeModal={onClose} />
    </div>
  );
}

export default Header;
