import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getWallet } from "../utils/wallet";
import { hashAddress } from "../utils/hash";

const Wallet = ({ name, account, onWalletConnect }) => {
  const navigate = useNavigate();
  const [accConncected, setAccConnected] = useState(account);
  const handleWalletConnect = async () => {
    const acc = await getWallet();
    if (acc === undefined) {
      // alert("install metamask extension!!");
      window.open("https://metamask.io/download/");
      navigate(-1);
    }
    setAccConnected(acc);
    onWalletConnect(accConncected);
  };

  const serverURL = "http://localhost:8080/userinfo";
  const addressDB = () => {
    try {
      axios
        .post(
          serverURL,
          {
            name: name,
            address: hashAddress(name, accConncected),
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
  });

  return <div>Wallet 미구현, {accConncected}</div>;
};

export default Wallet;

// isWalletConnected => icon color / body
// props => wallet type => kaikas / metamask(=klaytn / ethereum)
// 계정 연동 <-> extension 건드릴 필요 없이 getWallet으로 호출
