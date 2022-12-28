import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Web3 from "web3";

import { getWallet, getBalance, getGoerliWeb } from "../utils/wallet";
// import { hashAddress } from "../utils/hash";

const Wallet = ({ name, account, onWalletConnect }) => {
  const navigate = useNavigate();
  const [accConncected, setAccConnected] = useState(account);
  const handleWalletConnect = async () => {
    const acc = await getWallet();
    if (acc === undefined) {
      window.open("https://metamask.io/download/");
      navigate(-1);
    }
    setAccConnected(acc);
    onWalletConnect(accConncected);
  };

  const serverURL = "http://localhost:3000/userinfo";

  const addressDB = () => {
    try {
      axios
        .post(
          serverURL,
          {
            name: name,
            address: accConncected,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log("ok", res);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleWalletConnect();
    addressDB();
    const web = getGoerliWeb();
    getBalance(accConncected, web).then((bal) =>
      setBalance(parseFloat(web.utils.fromWei(bal)).toFixed(4))
    );
  }, [accConncected]);

  const [balance, setBalance] = useState("0");

  return (
    <div>
      Wallet 미구현, {accConncected}, Balance: {balance}
      <img src="https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/7.png" />
    </div>
  );
};

export default Wallet;

// isWalletConnected => icon color / body
// props => wallet type => kaikas / metamask(=klaytn / ethereum)
// 계정 연동 <-> extension 건드릴 필요 없이 getWallet으로 호출
